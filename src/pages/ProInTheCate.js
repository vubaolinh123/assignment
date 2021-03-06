import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import HomeLeft from "../components/HomeLeft";
import ProInCateRight from "../components/ProInCateRight";


const ProInTheCate = {
    async print(id) {
        return /*html*/ ` 
			<header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
			<div class="" id="banner">${Banner.printf()}</div>
			<main class="grid grid-cols-8 gap-3 my-2 relative">
					<div class="main-left col-span-2">${await HomeLeft.printf()}</div>
					<div class="main-right col-span-6">${await ProInCateRight.printf(id)}</div>
			</main>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
		`;
    },
    afterRender() {
        Header.afterRender();
    }
};

export default ProInTheCate;
