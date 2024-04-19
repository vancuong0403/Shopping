import { Link } from "react-router-dom";

function SingleBlog({ img, title = "", createdAt, description, id }) {
  return (
    <div className="single-blog-post">
      <h3>{title}</h3>
      <div className="post-meta">
        <ul>
          <li>
            <i className="fa fa-user"></i> Mac Doe
          </li>
          <li>
            <i className="fa fa-clock-o"></i> 1:33 pm
          </li>
          <li>
            <i className="fa fa-calendar"></i> {createdAt}
          </li>
        </ul>
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </span>
      </div>
      <Link to="">
        <img src={img} alt="" />
      </Link>
      <p>{description}</p>
      <Link className="btn btn-primary" to={`${id}`}>
        Read More
      </Link>
    </div>
  );
}

export default SingleBlog;
