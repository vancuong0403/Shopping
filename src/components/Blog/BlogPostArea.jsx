import { Link } from "react-router-dom";
import SingleBlog from "./SingleBlog";
import { useEffect, useState } from "react";
import api from "../../api";

function BlogPostArea() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api
      .get("/blog")
      .then((res) => setBlogs(res.data?.blog?.data))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <>
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
          {blogs.map((item) => (
            <SingleBlog
              title={item.title}
              id={item.id}
              description={item.description}
              createdAt={item.created_at}
              key={item.id}
              img={`http://localhost/laravel8/public/upload/Blog/image/${item.image}`}
            />
          ))}
          <div className="pagination-area">
            <ul className="pagination">
              <li>
                <Link to="" className="active">
                  1
                </Link>
              </li>
              <li>
                <Link to="">2</Link>
              </li>
              <li>
                <Link to="">3</Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa fa-angle-double-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostArea;
