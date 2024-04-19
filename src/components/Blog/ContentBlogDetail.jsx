import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import api from "../../api";
import { AuthContext } from "../../context/AuthContext";
import ResponseArea from "./ResponseArea";
import Rate from "./Rate";

const userLocal = localStorage.getItem("userInfo");
let UserInfor = {};
if (userLocal) {
  UserInfor = JSON.parse(userLocal);
}
// console.log("ct",UserInfor);
function ContentBlogDetail() {
  const accessToken = localStorage.getItem("accessToken");
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLogged, setIsComment } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState("");
  const [commentList, setcommentList] = useState([]);
  const [curIdCmt, setCurIdCmt] = useState(0);
  const textareaRef = useRef(null);

  const rootComment = commentList.filter((item) => item.id_comment === 0);
  const childrenComment = commentList.filter((item) => item.id_comment !== 0);

  const postComment = () => {
    if (!isLogged) {
      alert("Vui long dang nhap de binh luan");
      navigate("/register");
      setIsComment(true);
    } else if (isLogged) {
      if (!comment.trim()) {
        setCommentError("Vui lòng nhập bình luận.");
        return;
      }
    }

    let config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    if (comment) {
      const formData = new FormData();
      formData.append("id_blog", id);
      formData.append("id_user", UserInfor.id);
      formData.append("id_comment", curIdCmt);
      formData.append("comment", comment);
      formData.append("image_user", UserInfor.avatar);
      formData.append("name_user", UserInfor.name);

      api
        .post(`/blog/comment/${id}`, formData, config)
        .then((res) => {
          api
            .get(`/blog/detail/${id}`)
            .then((res) => {
              setcommentList(res.data.data.comment);
              setBlog(res.data?.data);
            })
            .catch((err) => {
              throw new Error(err);
            });
        })
        .catch((err) => console.log(err));
      setComment("");
    }
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setCommentError("");
  };

  useEffect(() => {
    api
      .get(`/blog/detail/${id}`)
      .then((res) => {
        setcommentList(res.data.data.comment);
        setBlog(res.data?.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  const handleReplyCmt = (idComment, id) => {
    textareaRef.current.focus();

    console.log({ idComment, id });
    if (idComment === 0) {
      setCurIdCmt(id);
    } else {
      setCurIdCmt(idComment);
    }
  };

  useEffect(() => {
    console.log(curIdCmt);
  }, [curIdCmt]);

  return (
    <>
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
          <div className="single-blog-post">
            <h3>{blog.title}</h3>
            <div className="post-meta">
              <ul>
                <li>
                  <i className="fa fa-user"></i> Mac Doe
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
            </div>
            <Link to="/">
              <img
                src={`http://localhost/laravel8/public/upload/Blog/image/${blog.image}`}
                alt=""
              />
            </Link>
            <p>{blog.description}</p>
            <div className="pager-area">
              <ul className="pager pull-right">
                <li>
                  <Link to="#">Pre</Link>
                </li>
                <li>
                  <Link to="#">Next</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rating-area">
          <Rate />
        </div>

        <div className="socials-share">
          <Link to="/">
            <img src="images/blog/socials.png" alt="" />
          </Link>
        </div>
        <div className="response-area">
          <h2>3 RESPONSES</h2>
          <ul className="media-list">
            {rootComment.map((rootCmt) => (
              <ResponseArea
                listCmtChildren={childrenComment}
                onReplyCmt={handleReplyCmt}
                key={rootCmt.id}
                id={rootCmt.id}
                nameUser={rootCmt.name_user}
                idComment={rootCmt.id_comment}
                cmt={rootCmt.comment}
                img={`http://localhost/laravel8/public/upload/user/avatar/${rootCmt.image_user}`}
              />
            ))}
          </ul>
        </div>
        <div className="replay-box">
          <div className="row">
            <div className="col-sm-12">
              <h2>Leave a replay</h2>
              <div className="text-area">
                <div className="blank-arrow">
                  <label>Your Name</label>
                </div>
                <span>*</span>
                <textarea
                  value={comment}
                  onChange={handleCommentChange}
                  name="message"
                  rows="11"
                  ref={textareaRef}
                ></textarea>
                {commentError && <p>{commentError}</p>}
                <button
                  onClick={postComment}
                  type="submit"
                  className="btn btn-primary"
                >
                  post comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentBlogDetail;
