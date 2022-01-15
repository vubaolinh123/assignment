import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newList";

const HomePage = {
	print() {
		return /*html*/ ` 
			<header id="header">${Header.printf()}</header>
			<div class="my-3" id="banner">${Banner.printf()}</div>
			<main class="py-2">${NewList.printf()}</main>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
		`;
	},
};

export default HomePage;
