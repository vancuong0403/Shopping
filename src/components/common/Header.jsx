import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets/images";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import QtyContext from "../../context/QtyContext";

function Header() {
  const { isLogged, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { qty } = useContext(QtyContext);

  return (
    <>
      <header id="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li>
                      <Link to="">
                        <i className="fa fa-phone"></i> +2 95 01 88 821
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-envelope"></i> info@domain.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 clearfix">
                <div className="logo pull-left">
                  <Link to="index.html">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
                <div className="btn-group pull-right clearfix">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      USA
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="">Canada</Link>
                      </li>
                      <li>
                        <Link to="">UK</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      DOLLAR
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="">Canadian Dollar</Link>
                      </li>
                      <li>
                        <Link to="">Pound</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 clearfix">
                <div className="shop-menu clearfix pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/account">
                        <i className="fa fa-user"></i> Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/productwishlist">
                        <i className="fa fa-star"></i> Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="checkout.html">
                        <i className="fa fa-crosshairs"></i> Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                        <p>{qty}</p>
                        {/* {qty ? <p>{qty}</p> : <p>Cart</p>} */}
                      </Link>
                    </li>
                    {isLogged ? (
                      <li onClick={logout}>
                        <Link to={"/register"}>
                          <i className="fa fa-lock"></i>Logout
                        </Link>
                      </li>
                    ) : (
                      <li
                        onClick={() => {
                          navigate("/register");
                        }}
                      >
                        <Link to="/register">
                          <i className="fa fa-lock"></i> Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="#">
                        Shop<i className="fa fa-angle-down"></i>
                      </Link>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <Link to="shop.html">Products</Link>
                        </li>
                        <li>
                          <Link to="product-details.html">Product Details</Link>
                        </li>
                        <li>
                          <Link to="checkout.html">Checkout</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                        <li
                          onClick={() => {
                            //handle it
                          }}
                        >
                          <Link to="/register">Login</Link>
                        </li>
                        <li
                          onClick={() => {
                            //handle it
                          }}
                        >
                          <button>Logout</button>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link to="/blog" className="active">
                        Blog<i className="fa fa-angle-down"></i>
                      </Link>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <Link to="blog.html" className="active">
                            Blog List
                          </Link>
                        </li>
                        <li>
                          <Link to="blog-single.html">Blog Single</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="404.html">404</Link>
                    </li>
                    <li>
                      <Link to="contact-us.html">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
