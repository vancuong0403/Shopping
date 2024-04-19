import { useContext, useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const initFormValue = {
  email: "",
  password: "",
  level: "0",
};
const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};
const isEmailValid = (email) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

function Login() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [errorlogin, setErrorLogin] = useState("");
  const { login, isLogged, isComment } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ isLogged });
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  console.log(errorlogin);

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.email)) {
      error["email"] = "Nhap Email";
    } else if (!isEmailValid(formValue.email)) {
      error["email"] = "Email khong hop le";
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Nhap Password";
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
      .post("/login", formValue, config)
      .then((response) => {
        localStorage.setItem("accessToken", response.data?.token);

        if (response.data.errors) {
          setErrorLogin(response.data.errors);
          alert("tai khoan hoac mat khau khong dung");
        } else {
          if (isComment) {
            navigate(-1);
          } else {
            navigate("/");
          }
          login();

          localStorage.setItem("userInfo", JSON.stringify(response.data?.Auth));
        }
      })
      .catch((err) => alert("dang nhap that bai"));
  };

  return (
    <>
      <div className="col-sm-4 col-sm-offset-1">
        <div className="login-form">
          <h2>Login to your account</h2>
          <form
            action="#"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
            {formError.email && <div>{formError.email}</div>}
            <input
              type="Password"
              placeholder="Password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
            />
            {formError.password && <div>{formError.password}</div>}
            <input
              placeholder="level"
              name="level"
              value={formValue.level}
              onChange={handleChange}
            />
            <span>
              <input type="checkbox" className="checkbox" />
              Keep me signed in
            </span>
            <button type="submit" className="btn btn-default">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
