import { Link } from "react-router-dom";
import api from "../../api";
import { useEffect, useState } from "react";

const userLocal = localStorage.getItem("userInfo");
let UserInfor = {};
if (userLocal) {
  UserInfor = JSON.parse(userLocal);
}
function MyProduct() {
  const accessToken = localStorage.getItem("accessToken");
  const [data, setData] = useState({});
  console.log("data1", data);

  console.log({ data });

  useEffect(() => {
    let config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    api
      .get("user/my-product", config)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (idProduct) => {
    let config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    api
      .get(`/user/product/delete/${idProduct}`, config)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="left-sidebar">
              <h2>Account</h2>
              <div class="panel-group category-products" id="accordian">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <Link to="#">account</Link>
                    </h4>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <Link to="#">My product</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="table-responsive cart_info">
              <table class="table table-condensed">
                <thead>
                  <tr style={{ background: "orange" }} class="cart_menu">
                    <td class="image">id</td>
                    <td class="description">Name</td>
                    <td class="price">Image</td>
                    <td class="quantity">Price</td>
                    <td class="total">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(data).map((key) => (
                    <tr key={data[key].id}>
                      <td>{data[key].id}</td>
                      <td>{data[key].name}</td>
                      <td>
                        <img
                          style={{ width: "50px" }}
                          src={`http://localhost/laravel8/public/upload/product/${
                            data[key].id_user
                          }/${JSON.parse(data[key].image)?.[0]}`}
                          alt=""
                        />
                      </td>
                      <td>${data[key].price}</td>
                      <td>
                        <button style={{ marginRight: "15px" }}>
                          <Link to={`${data[key].id}`}>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </button>
                        <button onClick={() => handleDelete(data[key].id)}>
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProduct;
