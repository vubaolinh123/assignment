import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
	print() {
		return /*html*/ `
            <header id="header">${Header.printf()}</header>
			<div class="my-3" id="banner">${Banner.printf()}</div>
			<main>About Page</main>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
        `;
	},
};

export default AboutPage;
