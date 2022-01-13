import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newList";

const HomePage = {
	print() {
		return /*html*/ ` ${NewList.printf()} `;
	},
};

export default HomePage;
