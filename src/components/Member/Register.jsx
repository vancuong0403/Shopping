import { useState } from "react";
import api from "../../api";

const initFormValue = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  avatar: "",
  level: "0",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};
const isEmailValid = (email) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

function Register() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [avt, setAvt] = useState("");
  const [Img, setImg] = useState("");

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.name)) {
      error["name"] = "Nhap name";
    }
    if (isEmptyValue(formValue.email)) {
      error["email"] = "Nhap Email";
    } else if (!isEmailValid(formValue.email)) {
      error["email"] = "Email khong hop le";
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Nhap Password";
    }
    if (isEmptyValue(formValue.phone)) {
      error["phone"] = "Nhap Phone";
    }
    if (isEmptyValue(formValue.address)) {
      error["address"] = "Nhap Address";
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

    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };
    api
      .post("/register", formValue, config)
      .then((res) => {
        if (res.status === 200) {
          alert("Dang ki thanh cong");
        }
      })
      .catch((err) => alert("dang ki that bai"));
  };

  const handleUserInputFile = (e) => {
    const file = e.target.files;
    let reader = new FileReader();
    reader.onload = (e) => {
      setFormValue((prev) => ({ ...prev, avatar: e.target.result }));
      setAvt(e.target.result);
      setImg(file[0]);
    };
    reader.readAsDataURL(file[0]);
  };

  return (
    <div className="signup-form">
      <h2>New User Signup!</h2>
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
          type="email"
          placeholder="Email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
        />
        {formError.email && <div>{formError.email}</div>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
        />
        {formError.password && <div>{formError.password}</div>}

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formValue.phone}
          onChange={handleChange}
        />
        {formError.phone && <div>{formError.phone}</div>}

        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formValue.address}
          onChange={handleChange}
        />
        {formError.address && <div>{formError.address}</div>}

        <input type="file" name="file" onChange={handleUserInputFile} />
        {formError.file && <div>{formError.file}</div>}

        <input
          placeholder="level"
          name="level"
          value={formValue.level}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-default">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Register;
