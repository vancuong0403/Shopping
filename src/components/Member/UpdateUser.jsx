import { useEffect, useState } from "react";
import api from "../../api";

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};
function UpdateUser() {
  const accessToken = localStorage.getItem("accessToken");
  const [formError, setFormError] = useState({});
  const [Img, setImg] = useState("");
  const [avt, setAvt] = useState("");

  const [user, SetUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    let userData = localStorage.getItem("userInfo");
    if (userData) {
      userData = JSON.parse(userData);
    }
    SetUser({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      password: userData.password,
    });
  }, []);

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(user.name)) {
      error["name"] = "Nhap name";
    }
    if (isEmptyValue(user.password)) {
      error["password"] = "Nhap Password";
    }
    if (isEmptyValue(user.phone)) {
      error["phone"] = "Nhap Phone";
    }
    if (isEmptyValue(user.address)) {
      error["address"] = "Nhap Address";
    }

    setFormError(error);

    return Object.keys(error).length === 0;
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    SetUser({
      ...user,
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

      console.log("form value", user);
    } else {
      console.log("Khong hop le");
    }

    let config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    api
      .post(`/user/update/${user.id}`, user, config)
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data.Auth));
        localStorage.setItem("accessToken", res.data.token);
      })
      .catch((err) => console.log(err));
  };
  const handleUserInputFile = (e) => {
    const file = e.target.files;
    let reader = new FileReader();
    reader.onload = (e) => {
      SetUser((prev) => ({ ...prev, avatar: e.target.result }));
      setAvt(e.target.result);
      setImg(file[0]);
    };
    reader.readAsDataURL(file[0]);
  };
  return (
    <div class="col-sm-9 padding-right">
      <div className="signup-form">
        <h2>User Update</h2>
        <form action="#" onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          {formError.name && <div>{formError.name}</div>}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            readOnly
          />
          {formError.email && <div>{formError.email}</div>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {formError.password && <div>{formError.password}</div>} 
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          {formError.phone && <div>{formError.phone}</div>}

          <input
            type="text"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
          {formError.address && <div>{formError.address}</div>}

          <input type="file" name="file" onChange={handleUserInputFile} />
          {formError.file && <div>{formError.file}</div>}

          <button type="submit" className="btn btn-default">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
