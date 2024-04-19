import { Link } from "react-router-dom";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  recommend1,
  recommend2,
  recommend3,
} from "../../assets/images";
import api from "../../api";
import { useContext, useEffect, useState } from "react";
import QtyContext from "../../context/QtyContext";

function Product() {
  const [data, setData] = useState({});
  const cartLocal = localStorage.getItem("cartItems");
  const [cartItems, setCartItems] = useState(JSON.parse(cartLocal));
  const { handleAdd: handleAddContext } = useContext(QtyContext);

  useEffect(() => {
    api
      .get("product")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (productId) => {
    handleAddContext();
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };
      updatedCartItems[productId] = (updatedCartItems[productId] || 0) + 1;
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };
  const handleAddWishList = (productId) => {
    const existingValue = localStorage.getItem("idproduct");

    if (existingValue) {
      // Kiểm tra xem productId đã tồn tại trong existingValue chưa
      const parsedValue = JSON.parse(existingValue);
      if (parsedValue.includes(productId)) {
        return; // Nếu đã tồn tại thì không cần thêm
      }
      // Nếu chưa tồn tại, thêm vào mảng
      parsedValue.push(productId);
      const newValue = JSON.stringify(parsedValue);
      localStorage.setItem("idproduct", newValue);
    } else {
      // Nếu chưa có giá trị trong LocalStorage, tạo mảng mới và lưu giá trị
      const newValue = JSON.stringify([productId]);
      localStorage.setItem("idproduct", newValue);
    }
  };
  return (
    <div class="col-sm-9 padding-right">
      <div class="features_items">
        <h2 class="title text-center">Features Items</h2>
        {Object.keys(data).map((key) => (
          <div class="col-sm-4">
            <div class="product-image-wrapper">
              <div class="single-products">
                <div class="productinfo text-center" id="Product1">
                  <img
                    src={`http://localhost/laravel8/public/upload/product/${
                      data[key].id_user
                    }/${JSON.parse(data[key].image)?.[0]}`}
                    alt=""
                  />
                  <h2>${data[key].price}</h2>
                  <p>{data[key].name}</p>
                  <button class="btn btn-default add-to-cart">
                    <i class="fa fa-shopping-cart"></i>Add to cart
                  </button>
                </div>
                <div class="product-overlay">
                  <div class="overlay-content" id="Product1">
                    <h2>${data[key].price}</h2>
                    <p>{data[key].name}</p>
                    <button
                      onClick={() => handleAdd(data[key].id)}
                      class="btn btn-default add-to-cart"
                    >
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                  <button style={{ marginRight: "15px" }}>
                    <Link to={`/product/${data[key].id}`}>More</Link>
                  </button>
                </div>
              </div>
              <div class="choose">
                <ul class="nav nav-pills nav-justified">
                  <li>
                    <button onClick={() => handleAddWishList(data[key].id)}>
                      <i class="fa fa-plus-square"></i>Add to wishlist
                    </button>
                  </li>
                  <li>
                    <Link to="#">
                      <i class="fa fa-plus-square"></i>Add to compare
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      <div class="category-tab">
        <div class="col-sm-12">
          <ul class="nav nav-tabs">
            <li class="active">
              <Link to="#tshirt" data-toggle="tab">
                T-Shirt
              </Link>
            </li>
            <li>
              <Link to="#blazers" data-toggle="tab">
                Blazers
              </Link>
            </li>
            <li>
              <Link to="#sunglass" data-toggle="tab">
                Sunglass
              </Link>
            </li>
            <li>
              <Link to="#kids" data-toggle="tab">
                Kids
              </Link>
            </li>
            <li>
              <Link to="#poloshirt" data-toggle="tab">
                Polo shirt
              </Link>
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade active in" id="tshirt">
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="blazers">
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="sunglass">
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="kids">
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="poloshirt">
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src={gallery1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link to="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="recommended_items">
        <h2 class="title text-center">recommended items</h2>

        <div
          id="recommended-item-carousel"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="item active">
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src={recommend1} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src={recommend2} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src={recommend3} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src={recommend1} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src={recommend2} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src={recommend3} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            class="left recommended-item-control"
            to="#recommended-item-carousel"
            data-slide="prev"
          >
            <i class="fa fa-angle-left"></i>
          </Link>
          <Link
            class="right recommended-item-control"
            to="#recommended-item-carousel"
            data-slide="next"
          >
            <i class="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
