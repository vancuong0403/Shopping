import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";

const userLocal = localStorage.getItem("userInfo");
let UserInfor = {};
if (userLocal) {
  UserInfor = JSON.parse(userLocal);
}
// console.log("usinf: ",UserInfor.id);
function Rate() {
  const [rating, setRating] = useState(0);
  console.log(rating);
  const { isLogged } = useContext(AuthContext);
  const { id } = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const arrVote = [];

  function changeRating(newRating, name) {
    setRating(newRating);

    let config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    if (!isLogged) {
      alert("Vui long dang nhap de danh gia");
    } else if (isLogged) {
      if (rating) {
        let formData = new FormData();
        formData.append("blog_id", id);
        formData.append("user_id", UserInfor.id);
        formData.append("rate", rating);

        api
          .post(`/blog/rate/${id}`, formData, config)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    }
  }

  useEffect(() => {
    vote();
  }, []);

  const vote = () => {
    api
      .get(`/blog/rate/${id}`)
      .then((res) => {
        res.data.data.map((it) => {
          arrVote.push(it.rate);
        });
        const sum = arrVote.reduce((total, item) => total + item, 0);
        const avg = sum / arrVote.length;
        setRating(avg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      Đánh giá
      <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={changeRating}
        numberOfStars={6}
        name="rating"
      />
    </>
  );
}
export default Rate;
