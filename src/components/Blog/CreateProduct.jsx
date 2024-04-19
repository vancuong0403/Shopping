import { useEffect, useState } from "react";
import api from "../../api";
import { toast } from "react-toastify";

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

const initFormValue = {
  name: "",
  price: "",
  catxegory: "",
  brand: "",
  company: "",
  detail: "",
  status: "",
  sale: "",
};

function CreateProduct() {
  const accessToken = localStorage.getItem("accessToken");
  const [brand, setBrand] = useState([]);
  const [category, SetCategory] = useState([]);
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState(initFormValue);
  const [avatar, setAvatar] = useState({});
  const [Img, setImg] = useState("");

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.name)) {
      error["name"] = "Nhap name";
    }
    if (isEmptyValue(formValue.price)) {
      error["price"] = "Nhap price";
    }
    if (isEmptyValue(formValue.category)) {
      error["category"] = "Nhap category";
    }
    if (isEmptyValue(formValue.brand)) {
      error["brand"] = "Nhap brand";
    }
    if (isEmptyValue(formValue.company)) {
      error["company"] = "Nhap company";
    }
    if (isEmptyValue(formValue.sale)) {
      error["sale"] = "Nhap sale";
    }

    setFormError(error);

    return Object.keys(error).length === 0;
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  useEffect(() => {
    api
      .get("category-brand")
      .then((res) => {
        console.log("a", res);
        setBrand(res.data.brand);
        SetCategory(res.data.category);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (Img.size > 1024 * 1024) {
        alert("up lai file khac");
      }
      const img = new Image();
      img.onload = () => {
        console.log("Đây là một file ảnh");
      };
      img.onerror = () => {
        console.log("Đây không phải là file ảnh");
      };
      img.src = URL.createObjectURL(Img);

      console.log("form value", formValue);
    } else {
      console.log("Khong hop le");
    }

    if (formValue) {
      let config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      let formData = new FormData();
      formData.append("name", formValue.name);
      formData.append("price", formValue.price);
      formData.append("category", formValue.category);
      formData.append("brand", formValue.brand);
      formData.append("company", formValue.company);
      formData.append("detail", formValue.detail);
      formData.append("status", formValue.status);
      formData.append("sale", formValue.sale);

      Object.keys(avatar).map((item, i) => {
        formData.append("file[]", avatar[item]);
      });

      api
        .post("/user/product/add", formData, config)
        .then((res) => {
          // toast.success("Create product sucessfully");
          console.log("res", res);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleUserInputFile = (e) => {
    setAvatar(e.target.files);
    const file = e.target.files;
    let reader = new FileReader();
    reader.onload = (e) => {
      setImg(file[0]);
    };
    reader.readAsDataURL(file[0]);
  };

  return (
    <div class="col-sm-9 padding-right">
      <div className="signup-form">
        <h2>Create Product</h2>
        <form action="#" onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          />
          {formError.name && <div>{formError.name}</div>}

          <input
            type="text"
            placeholder="Price"
            name="price"
            value={formValue.price}
            onChange={handleChange}
          />
          {formError.price && <div>{formError.price}</div>}

          <select
            name="category"
            placeholder="Please choose category"
            onChange={handleChange}
            value={formValue.category}
          >
            <option value="">Please choose category</option>
            {category.map((it) => (
              <option key={it.value} value={it.id}>
                {it.category}
              </option>
            ))}
          </select>
          {formError.category && <div>{formError.category}</div>}
          <select
            name="brand"
            placeholder="Please choose brand"
            onChange={handleChange}
            value={formValue.brand}
          >
            <option value="">Please choose brand</option>
            {brand.map((it) => (
              <option key={it.value} value={it.id}>
                {it.brand}
              </option>
            ))}
          </select>
          {formError.brand && <div>{formError.brand}</div>}

          <select
            name="status"
            value={formValue.status}
            onChange={handleChange}
          >
            <option value="1">New</option>
            <option value="0">Sale</option>
          </select>

          {formValue.status === "0" && (
            <div style={{ display: "flex" }}>
              <input
                style={{ width: "200px" }}
                type="text"
                name="sale"
                placeholder="Enter price sale"
                onChange={handleChange}
                value={formValue.sale}
              />
              <span style={{ marginTop: "8px" }}>%</span>
            </div>
          )}

          {formError.sale && <div>{formError.sale}</div>}

          <input
            type="text"
            name="company"
            value={formValue.company}
            placeholder="Company"
            onChange={handleChange}
          />
          {formError.sale && <div>{formError.sale}</div>}

          <input
            type="file"
            name="file"
            onChange={handleUserInputFile}
            multiple
            accept="image/*"
          />
          {formError.file && <div>{formError.file}</div>}

          <textarea
            name="detail"
            placeholder="detail"
            value={formValue.detail}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-default">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
