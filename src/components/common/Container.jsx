import BlogPostArea from "../Blog/BlogPostArea";
import LeftSidebar from "./LeftSidebar";

function Container() {
  return (
    <section>
      <div className="container">
        <LeftSidebar />
        <BlogPostArea />
      </div>
    </section>
  );
}

export default Container;
