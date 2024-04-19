import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";

function SocialBlogDetail() {
    const [blog, setBlog] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      api
        .get(`/blog/comment/${id}`)
        .then((res) => {
            console.log(res);
          setBlog(res.data?.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    }, []);
    console.log(blog);
  return (
    <>
      <div className="rating-area">
        <ul className="ratings">
          <li className="rate-this">Rate this item:</li>
          <li>
            <i className="fa fa-star color"></i>
            <i className="fa fa-star color"></i>
            <i className="fa fa-star color"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </li>
          <li className="color">(6 votes)</li>
        </ul>
        <ul className="tag">
          <li>TAG:</li>
          <li>
            <Link className="color" to="/">
              Pink <span>/</span>
            </Link>
          </li>
          <li>
            <Link className="color" to="/">
              T-Shirt <span>/</span>
            </Link>
          </li>
          <li>
            <Link className="color" to="/">
              Girls
            </Link>
          </li>
        </ul>
      </div>

      <div className="socials-share">
        <Link to="/">
          <img src="images/blog/socials.png" alt="" />
        </Link>
      </div>


    </>
  );
}

export default SocialBlogDetail;
