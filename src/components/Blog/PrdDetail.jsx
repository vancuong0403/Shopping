import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import { Modal } from "react-bootstrap";

function PrdDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [image, setImage] = useState({});
  const [slide, setSlide] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    api
      .get(`/product/detail/${id}`)
      .then((res) => {
        console.log("data", res.data.data);
        setData(res.data.data);
        setImage(JSON.parse(res.data.data.image));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="col-sm-9 padding-right">
      <div class="product-details">
        <div class="col-sm-5">
          <div class="view-product">
            <img
              src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[0]}`}
              alt=""
            />
            <button onClick={handleShow}>ZOOM</button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <img
              src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[0]}`}
              alt=""
            />
          </Modal>
          <div
            style={{ marginBottom: "20px" }}
            id="similar-product"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div style={{ marginLeft: "40px" }} class="item active">
                <Link to="">
                  <img
                    style={{ width: "20%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[1]}`}
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    style={{ width: "25%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[2]}`}
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    style={{ width: "25%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[2]}`}
                    alt=""
                  />
                </Link>
              </div>
              <div class="item">
                <Link to="">
                  <img
                    style={{ width: "20%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[1]}`}
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    style={{ width: "25%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[2]}`}
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    style={{ width: "25%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[2]}`}
                    alt=""
                  />
                </Link>
              </div>
              <div class="item">
                <Link to="">
                  <img
                    style={{ width: "20%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[1]}`}
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    style={{ width: "25%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[2]}`}
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    style={{ width: "25%" }}
                    src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${image?.[2]}`}
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <Link
              class="left item-control"
              to="#similar-product"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </Link>

            <Link
              class="right item-control"
              to="#similar-product"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </Link>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="product-information">
            <img
              src={`http://localhost/laravel8/public/upload/product/${data.id_user}/${data.image?.[0]}`}
              class="newarrival"
              alt=""
            />
            <h2>{data.name}</h2>
            <p>Web ID: {data.web_id}</p>
            <img src="images/product-details/rating.png" alt="" />
            <span>
              <span>US ${data.price}</span>
              <label>Quantity:</label>
              <input type="text" value="3" />
              <button type="button" class="btn btn-fefault cart">
                <i class="fa fa-shopping-cart"></i>
                Add to cart
              </button>
            </span>
            <p>
              <b>Availability:</b> In Stock
            </p>
            <p>
              <b>Condition:</b> New
            </p>
            <p>
              <b>Brand:</b> E-SHOPPER
            </p>
            <Link to="">
              <img
                src="images/product-details/share.png"
                class="share img-responsive"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div class="category-tab shop-details-tab">
        <div class="col-sm-12">
          <ul class="nav nav-tabs">
            <li>
              <Link to="#details" data-toggle="tab">
                Details
              </Link>
            </li>
            <li>
              <Link to="#companyprofile" data-toggle="tab">
                Company Profile
              </Link>
            </li>
            <li>
              <Link to="#tag" data-toggle="tab">
                Tag
              </Link>
            </li>
            <li class="active">
              <Link to="#reviews" data-toggle="tab">
                Reviews (5)
              </Link>
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade" id="details">
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="companyprofile">
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="tag">
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <button type="button" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade active in" id="reviews">
            <div class="col-sm-12">
              <ul>
                <li>
                  <Link to="">
                    <i class="fa fa-user"></i>EUGEN
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i class="fa fa-clock-o"></i>12:41 PM
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i class="fa fa-calendar-o"></i>31 DEC 2014
                  </Link>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                <b>Write Your Review</b>
              </p>

              <form action="#">
                <span>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                </span>
                <textarea name=""></textarea>
                <b>Rating: </b>{" "}
                <img src="images/product-details/rating.png" alt="" />
                <button type="button" class="btn btn-default pull-right">
                  Submit
                </button>
              </form>
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
                      <img src="images/home/recommend1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src="images/home/recommend2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src="images/home/recommend3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </button>
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
                      <img src="images/home/recommend1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src="images/home/recommend2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img src="images/home/recommend3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <button type="button" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </button>
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

export default PrdDetail;
