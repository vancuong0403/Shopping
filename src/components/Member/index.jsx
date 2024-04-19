import Login from "./Login";
import Register from "./Register";

function Index() {
  return (
    <>
      <section id="form">
        <div className="container">
          <div className="row">
            <Login />
            <div className="col-sm-1">
              <h2 className="or">OR</h2>
            </div>
            <div className="col-sm-4">
            <Register />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
