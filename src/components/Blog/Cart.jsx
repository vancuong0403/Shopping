import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

function Cart() {
  const cartLocal = localStorage.getItem("cartItems");
  // const accessToken = localStorage.getItem("accessToken");
  const [cartItems, setCartItems] = useState(JSON.parse(cartLocal));
  const [data, setData] = useState({});
  const [tax, SetTax] = useState(2);
  let totalCart = 0;

  useEffect(() => {
    console.log({ cartItems });
    api
      .post("/product/cart", JSON.stringify(cartItems))
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleIncrease = (idProduct, value) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        ...cartItems,
        [idProduct]: value + 1,
      })
    );

    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [idProduct]: value + 1,
    }));
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const handleDecrease = (idProduct, value) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        ...cartItems,
        [idProduct]: value - 1,
      })
    );

    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [idProduct]: value - 1,
    }));
  };
  const handleDelete = (idProduct) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    // Xóa sản phẩm khỏi danh sách
    delete cartItems[idProduct];

    // Cập nhật danh sách sản phẩm mới vào LocalStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      delete updatedCartItems[idProduct];
      return updatedCartItems;
    });
  };

  return (
    <>
      <section id="cart_items">
        <div class="container">
          <div class="breadcrumbs">
            <ol class="breadcrumb">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li class="active">Shopping Cart</li>
            </ol>
          </div>
          <div class="table-responsive cart_info">
            <table class="table table-condensed">
              <thead>
                <tr class="cart_menu">
                  <td class="image">Item</td>
                  <td class="description"></td>
                  <td class="price">Price</td>
                  <td class="quantity">Quantity</td>
                  <td class="total">Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map(
                  (key) => (
                    (totalCart +=
                      data[key].price *
                      (cartItems[data[key].id] || data[key].qty)),
                    (
                      <tr>
                        <td class="cart_product">
                          <Link href="">
                            <img
                              style={{ width: 50, height: 50 }}
                              src={`http://localhost/laravel8/public/upload/product/${
                                data[key].id_user
                              }/${JSON.parse(data[key].image)?.[0]}`}
                              alt=""
                            />
                          </Link>
                        </td>
                        <td class="cart_description">
                          <h4>
                            <Link href="">{data[key].name}</Link>
                          </h4>
                          <p>web_id: {data[key].web_id}</p>
                        </td>
                        <td class="cart_price">
                          <p>${data[key].price}</p>
                        </td>
                        <td class="cart_quantity">
                          <div class="cart_quantity_button">
                            <button
                              onClick={() =>
                                handleIncrease(
                                  data[key].id,
                                  cartItems[data[key].id] || data[key].qty
                                )
                              }
                              class="cart_quantity_up"
                            >
                              +
                            </button>

                            <input
                              class="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={cartItems[data[key].id] || data[key].qty}
                              autocomplete="off"
                              size="2"
                            />

                            <button
                              onClick={() =>
                                handleDecrease(
                                  data[key].id,
                                  cartItems[data[key].id] || data[key].qty
                                )
                              }
                              class="cart_quantity_down"
                            >
                              {" "}
                              -{" "}
                            </button>
                          </div>
                        </td>
                        <td class="cart_total">
                          <p class="cart_total_price">
                            $
                            {data[key].price *
                              (cartItems[data[key].id] || data[key].qty)}
                          </p>
                        </td>
                        <td class="cart_delete">
                          <button
                            class="cart_quantity_delete"
                            onClick={() => handleDelete(data[key].id)}
                          >
                            <i class="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="do_action">
        <div class="container">
          <div class="heading">
            <h3>What would you like to do next?</h3>
            <p>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="chose_area">
                <ul class="user_option">
                  <li>
                    <input type="checkbox" />
                    <label>Use Coupon Code</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Use Gift Voucher</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Estimate Shipping & Taxes</label>
                  </li>
                </ul>
                <ul class="user_info">
                  <li class="single_field">
                    <label>Country:</label>
                    <select>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li class="single_field">
                    <label>Region / State:</label>
                    <select>
                      <option>Select</option>
                      <option>Dhaka</option>
                      <option>London</option>
                      <option>Dillih</option>
                      <option>Lahore</option>
                      <option>Alaska</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li class="single_field zip-field">
                    <label>Zip Code:</label>
                    <input type="text" />
                  </li>
                </ul>
                <Link class="btn btn-default update" href="">
                  Get Quotes
                </Link>
                <Link class="btn btn-default check_out" href="">
                  Continue
                </Link>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="total_area">
                <ul>
                  <li>
                    Cart Sub Total{" "}
                    <span class="cart-sub-total">${totalCart}</span>
                  </li>
                  <li>
                    Eco Tax <span class="tax">${tax}</span>
                  </li>
                  <li>
                    Shipping Cost <span>Free</span>
                  </li>
                  <li>
                    Total <span class="total-cart">${totalCart + tax}</span>
                  </li>
                </ul>
                <Link class="btn btn-default update" href="">
                  Update
                </Link>
                <Link class="btn btn-default check_out" href="">
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
