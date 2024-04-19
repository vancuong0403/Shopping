import { Link } from "react-router-dom";

function ResponseArea({
  nameUser,
  idComment,
  cmt,
  img,
  id,
  onReplyCmt,
  listCmtChildren,
}) {
  const renderChildren = (idCmt) =>
    listCmtChildren.filter((item) => item.id_comment === idCmt);

  // console.log({ hello: renderChildren(id) });

  return (
    <>
      <li className={`media `}>
        <Link class="pull-left" to="#">
          <img
            class="media-object"
            src={img}
            alt=""
            style={{ width: 100, height: 100 }}
          />
        </Link>
        <div class="media-body">
          <ul class="sinlge-post-meta">
            <li>
              <i class="fa fa-user"></i>
              {nameUser}
            </li>
            <li>
              <i class="fa fa-clock-o"></i> 1:33 pm
            </li>
            <li>
              <i class="fa fa-calendar"></i> DEC 5, 2013
            </li>
          </ul>
          <p>{cmt}</p>
          <button
            onClick={() => onReplyCmt(idComment, id)}
            class="btn btn-primary"
            to=""
          >
            <i class="fa fa-reply"></i>Replay
          </button>
        </div>
      </li>
      {renderChildren(id).map((element) => (
        <li className={`media second-media`}>
          <Link class="pull-left" to="#">
            <img
              class="media-object"
              src={`http://localhost/laravel8/public/upload/user/avatar/${element.image_user}`}
              alt=""
              style={{ width: 100, height: 100 }}
            />
          </Link>
          <div class="media-body">
            <ul class="sinlge-post-meta">
              <li>
                <i class="fa fa-user"></i>
                {element.name_user}
              </li>
              <li>
                <i class="fa fa-clock-o"></i> 1:33 pm
              </li>
              <li>
                <i class="fa fa-calendar"></i> DEC 5, 2013
              </li>
            </ul>
            <p>{element.comment}</p>
            <button
              onClick={() =>  onReplyCmt(element.id_comment, element.id)}
              class="btn btn-primary"
              to=""
            >
              <i class="fa fa-reply"></i>Replay
            </button>
          </div>
        </li>
      ))}
    </>
  );
}

export default ResponseArea;
