import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newList";

const HomePage = {
	print() {
		return /*html*/ ` 
                <main class="my-2">
                        ${NewList.printf()}
                </main>
        `;
	},
};

export default HomePage;
