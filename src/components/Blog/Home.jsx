import LeftSidebar from "../common/LeftSidebar";
import Product from "./Product";
import Slider from "./Slider";

function Home() {
    return ( 
    <>
        <Slider/>
        <section>
		<div class="container">
			<div class="row">
                <LeftSidebar/>
                <Product/>
			</div>
		</div>
    	</section>
    </>
     );
}

export default Home;