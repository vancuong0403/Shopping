import MenuLeftAccount from "../Member/MenuLeftAccount";
import EditPrd from "./EditPrd";

function EditProduct() {
  return (
    <>
      <section>
        <div class="container">
          <div class="row">
            <MenuLeftAccount />
            <EditPrd />
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProduct;
