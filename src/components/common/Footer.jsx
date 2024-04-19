import { Link } from "react-router-dom";
import { iframe1, iframe2, iframe3, iframe4 } from "../../assets/images";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-hrefp">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="companyinfo">
                  <h2>
                    <span>e</span>-shopper
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <Link href="#">
                      <div className="iframe-img">
                        <img src={iframe1} alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </Link>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <Link href="#">
                      <div className="iframe-img">
                        <img src={iframe2} alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </Link>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <Link href="#">
                      <div className="iframe-img">
                        <img src={iframe3} alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </Link>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <Link href="#">
                      <div className="iframe-img">
                        <img src={iframe4} alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </Link>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="address">
                  <img src="images/home/map.png" alt="" />
                  <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Service</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link href="">Online Help</Link>
                    </li>
                    <li>
                      <Link href="">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="">Order Status</Link>
                    </li>
                    <li>
                      <Link href="">Change Location</Link>
                    </li>
                    <li>
                      <Link href="">FAQ’s</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Quock Shop</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link href="">T-Shirt</Link>
                    </li>
                    <li>
                      <Link href="">Mens</Link>
                    </li>
                    <li>
                      <Link href="">Womens</Link>
                    </li>
                    <li>
                      <Link href="">Gift Cards</Link>
                    </li>
                    <li>
                      <Link href="">Shoes</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Policies</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link href="">Terms of Use</Link>
                    </li>
                    <li>
                      <Link href="">Privecy Policy</Link>
                    </li>
                    <li>
                      <Link href="">Refund Policy</Link>
                    </li>
                    <li>
                      <Link href="">Billing System</Link>
                    </li>
                    <li>
                      <Link href="">Ticket System</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link href="">Company Information</Link>
                    </li>
                    <li>
                      <Link href="">Careers</Link>
                    </li>
                    <li>
                      <Link href="">Shrefre Location</Link>
                    </li>
                    <li>
                      <Link href="">Affillate Program</Link>
                    </li>
                    <li>
                      <Link href="">Copyright</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-sm-offset-1">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <form action="#" className="searchform">
                    <input type="text" placeholder="Your email address" />
                    <buthrefn type="submit" className="btn btn-default">
                      <i className="fa fa-arrow-circle-o-right"></i>
                    </buthrefn>
                    <p>
                      Get the most recent updates from <br />
                      our site and be updated your self...
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bothrefm">
          <div className="container">
            <div className="row">
              <p className="pull-left">
                Copyright © 2013 E-SHOPPER Inc. All rights reserved.
              </p>
              <p className="pull-right">
                Designed by{" "}
                <span>
                  <Link target="_blank" href="http://www.themeum.com">
                    Themeum
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
