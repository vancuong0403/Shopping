import LeftSidebar from "../common/LeftSidebar";
import ContentBlogDetail from "./ContentBlogDetail";

function BlogDetail() {
  return (
    <>
      <section>
        <div className="container">
          <div class="row">
            <LeftSidebar />
            <ContentBlogDetail />         
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
