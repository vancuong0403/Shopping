import { Link } from "react-router-dom";

function MenuLeftAccount() {
  
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link
                  data-toggle="collapse"
                  data-parent="#accordian"
                  to="/account"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Account
                </Link>
              </h4>
            </div>
            <div id="sportswear" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <Link to="">Nike </Link>
                  </li>
                  <li>
                    <Link to="">Under Armour </Link>
                  </li>
                  <li>
                    <Link to="">Adidas </Link>
                  </li>
                  <li>
                    <Link to="">Puma</Link>
                  </li>
                  <li>
                    <Link to="">ASICS </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link data-toggle="collapse" data-parent="#accordian" to="/myproduct">
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  My Product
                </Link>
              </h4>
            </div>
            <div id="mens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <Link to="">Fendi</Link>
                  </li>
                  <li>
                    <Link to="">Guess</Link>
                  </li>
                  <li>
                    <Link to="">Valentino</Link>
                  </li>
                  <li>
                    <Link to="">Dior</Link>
                  </li>
                  <li>
                    <Link to="">Versace</Link>
                  </li>
                  <li>
                    <Link to="">Armani</Link>
                  </li>
                  <li>
                    <Link to="">Prada</Link>
                  </li>
                  <li>
                    <Link to="">Dolce and Gabbana</Link>
                  </li>
                  <li>
                    <Link to="">Chanel</Link>
                  </li>
                  <li>
                    <Link to="">Gucci</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default MenuLeftAccount;
