import { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";

const initFormValue = {
  name: "",
  price: "",
  category: "",
  brand: "",
  company: "",
  detail: "",
  status: "",
  sale: "",
};
function EditPrd() {
  const { id } = useParams();
  console.log("param",id);
  const accessToken = localStorage.getItem("accessToken");
  const [brand, setBrand] = useState([]);
  const [category, SetCategory] = useState([]);
  const [formError, setFormError] = useState({});
  const [avatar, setAvatar] = useState({});
  console.log("avt", avatar);
  const [data, setData] = useState({});
  const [selectCategory, setSelectedCategory] = useState("");
  const [selectBrand, setSelectBrand] = useState("");
  const [images, setImages] = useState([]);
  // console.log("images", images);
  const [avtCheckBox, setAvtCheckBox] = useState([]);
  // console.log("avtCheckBox", avtCheckBox);

  useEffect(() => {
    let config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };
    api
      .get(`user/product/${id}`, config)
      .then((res) => {
        Object.keys(res.data.data).map((key) => setData(res.data.data));
        setSelectedCategory(res.data.data.id_category);
        setSelectBrand(res.data.data.id_brand);
        const newImages = res.data.data.image.map((item) => ({
          isFromDB: true,
          image: item,
        }));

        setImages(newImages);
      })
      .catch((err) => console.log(err));

    api
      .get(`category-brand`)
      .then((res) => {
        SetCategory(res.data.category);
        setBrand(res.data.brand);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectBrand(e.target.value);
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleUserInputFile = (e) => {
    setAvatar(e.target.files);
    const avt = URL.createObjectURL(e.target.files[0]);
    setImages((prev) => [...prev, { isFromDB: false, image: avt }]);
  };

  const handleChangeCheckBox = (event, item) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setAvtCheckBox((prevSelectedImages) => [...prevSelectedImages, item]);
    } else {
      setAvtCheckBox((prevSelectedImages) =>
        prevSelectedImages.filter((img) => img !== item)
      );
    }
  };
  const handleSubmit = (e) => {
  
    if (images.length <= 3){
      console.log("ok");
    }else{
      console.log(">3 ");
    }
     e.preventDefault();

    let config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("category", data.id_category);
    formData.append("brand", data.id_brand);
    formData.append("company", data.company_profile);
    formData.append("detail", data.detail);
    formData.append("status", data.status);
    formData.append("sale", data.sale);

    Object.keys(avatar).map((item, i) => {
      formData.append("file[]", avatar[item]);
    });

    Object.keys(avtCheckBox).map((item, i) => {
      formData.append("avatarCheckBox[]", avtCheckBox[item].image);
    });

    api
      .post(`user/product/update/${id}`, formData, config)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div class="col-sm-9 padding-right">
        <div className="signup-form">
          <h2>Edit Product</h2>
          <form
            action="#"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            {formError.name && <div>{formError.name}</div>}

            <input
              type="text"
              placeholder="Price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            {formError.price && <div>{formError.price}</div>}
            <select
              value={selectCategory}
              name="category"
              placeholder="Please choose category"
              onChange={handleChange}
            >
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
              value={selectBrand}
            >
              {brand.map((it) => (
                <option key={it.value} value={it.id}>
                  {it.brand}
                </option>
              ))}
            </select>
            {formError.brand && <div>{formError.brand}</div>}

            <select name="status" value={data.status} onChange={handleChange}>
              <option value="1">New</option>
              <option value="0">Sale</option>
            </select>

            {/* {data.status === "0" && ( */}
            <div style={{ display: "flex" }}>
              <input
                style={{ width: "200px" }}
                type="text"
                name="sale"
                placeholder="Enter price sale"
                onChange={handleChange}
                value={data.sale}
              />
              <span style={{ marginTop: "8px" }}>%</span>
            </div>
            {/* )} */}
            {formError.sale && <div>{formError.sale}</div>}

            <input
              type="text"
              name="company"
              value={data.company_profile}
              placeholder="Company"
              onChange={handleChange}
            />
            {formError.sale && <div>{formError.sale}</div>}

            <input
              type="file"
              name="file"
              onChange={handleUserInputFile}
              accept="image/*"
            />
            <div style={{ display: "flex", gap: "5%" }}>
              {images.map((item) => (
                <div
                  style={{
                    height: "100px",
                  }}
                >
                  <img
                    style={{ width: 50, height: 50 }}
                    src={
                      item.isFromDB
                        ? `http://localhost/laravel8/public/upload/product/${data.id_user}/${item.image}`
                        : item.image
                    }
                    alt=""
                  />
                  <input
                    checked={avtCheckBox.includes(item)}
                    value={item.image}
                    style={{ width: "30px" }}
                    type="checkbox"
                    onChange={(event) => handleChangeCheckBox(event, item)}
                  ></input>
                </div>
              ))}
            </div>
            {formError.file && <div>{formError.file}</div>}

            <textarea
              name="detail"
              placeholder="detail"
              value={data.detail}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-default">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditPrd;
