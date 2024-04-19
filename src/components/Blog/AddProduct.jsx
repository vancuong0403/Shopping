import MenuLeftAccount from "../Member/MenuLeftAccount";
import CreateProduct from "./CreateProduct";

function AddProduct() {
  return (
      <section>
        <div class="container">
          <div class="row">
            <MenuLeftAccount />
            <CreateProduct/>
          </div>
        </div>
      </section>
  );
}

export default AddProduct;
