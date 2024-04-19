import MenuLeftAccount from "./MenuLeftAccount";
import UpdateUser from "./UpdateUser";

function Account() {
  return (
    <section>
      <div class="container">
        <div class="row" >
          <MenuLeftAccount />
          <UpdateUser />
        </div>
      </div>
    </section>
  );
}

export default Account;
