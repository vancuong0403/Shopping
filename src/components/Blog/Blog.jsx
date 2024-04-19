import LeftSidebar from "../common/LeftSidebar";
import BlogPostArea from "./BlogPostArea";

function Blog() {
  return (
    <section>
      <div className="container">
        <LeftSidebar />
        <BlogPostArea />
      </div>
    </section>
  );
}

export default Blog;
