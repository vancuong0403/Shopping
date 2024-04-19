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
import { useEffect, useState } from "react";
import api from "../../api";

function ProductWishLisht() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("giong", filteredProducts);
  const [data, SetData] = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem("idproduct");
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      setFavoriteIds(parsedValue);
    }
  }, []);

  useEffect(() => {
    api
      .get("product/wishlist")
      .then((res) => {
        SetData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filteredProducts = data.filter((product) =>
      favoriteIds.includes(product.id)
    );
    setFilteredProducts(filteredProducts);
  }, [data, favoriteIds]);
  const handleDelete = (id) => {
    // Xoá ID khỏi danh sách yêu thích
    const updatedFavoriteIds = favoriteIds.filter(
      (favoriteId) => favoriteId !== id
    );
    setFavoriteIds(updatedFavoriteIds);

    // Cập nhật LocalStorage
    localStorage.setItem("idproduct", JSON.stringify(updatedFavoriteIds));
  };

  return (
    <div class="col-sm-9 padding-right">
      <div class="features_items">
        <h2 class="title text-center">Product WishList</h2>
        {Object.keys(filteredProducts).map((key) => (
          <div class="col-sm-4">
            <div class="product-image-wrapper">
              <div class="single-products">
                <div class="productinfo text-center" id="Product1">
                  <img
                    src={`http://localhost/laravel8/public/upload/product/${
                      filteredProducts[key].id_user
                    }/${JSON.parse(filteredProducts[key].image)?.[0]}`}
                    alt=""
                  />
                  <h2>${filteredProducts[key].price}</h2>
                  <p>{filteredProducts[key].name}</p>
                  <button class="btn btn-default add-to-cart">
                    <i class="fa fa-shopping-cart"></i>Add to cart
                  </button>
                </div>
                <div class="product-overlay">
                  <div class="overlay-content" id="Product1">
                    <h2>${filteredProducts[key].price}</h2>
                    <p>{filteredProducts[key].name}</p>
                    <button class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </button>
                  </div>
                  <button style={{ marginRight: "15px" }}>
                    <Link to={`/product/${filteredProducts[key].id}`}>
                      More
                    </Link>
                  </button>
                </div>
              </div>
              <div class="choose">
                <ul class="nav nav-pills nav-justified">
                  <li>
                    <button onClick={() => handleDelete(filteredProducts[key].id)}>
                      <i class="fa-solid fa-minus"></i> Delete Product WishList
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default ProductWishLisht;
