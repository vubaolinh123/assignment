import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";
import { reRender } from "../utils/reRedner"
import { getAll } from "../api/products"
import PageSearch from "./PageSearch";

let param = null;
const HomePage = {
	async print() {
		const { data } = await getAll(param);
		return /*html*/ ` 
			<header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
			<div class="" id="banner">${Banner.printf()}</div>
			<main class="grid grid-cols-8 gap-3 my-2 relative">
					<div class="main-left col-span-2">${await HomeLeft.printf()}</div>
					<div class="main-right col-span-6">${await HomeRight.printf()}</div>
			</main>
			<ul class="text-center my-2 renderPage">
						
			</ul>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
		`;
	},
	async afterRender(key) {
		const { data } = await getAll(param);
		const RenderPage = document.querySelector(".renderPage")
		let listPageSto = [];
		var ListPage = "";


		const numberPage = Math.ceil(data.length / 6);
		for (let index = 1; index <= numberPage; index++) {
			ListPage += `<li class="inline-block"><button class="PageNumber border border-black text-lg px-2 cursor-pointer hover:bg-black hover:text-white text-2xl listPage ml-2" value="${index}">${index}</button></li>`
		}

		RenderPage.innerHTML = ListPage;

		const listPage = document.querySelectorAll(".listPage");



		listPage.forEach(item => {
			item.addEventListener("click", (e) => {
				var pages = {
					numberPage: item.value
				}
				listPageSto.push(pages)
				localStorage.setItem('listPage', JSON.stringify(listPageSto));
				reRender(HomePage, "#app", item.value);
			})
		})

		const keyword = document.querySelector("#search");
		const btnSearch = document.querySelector("#btnSearch");
		var dataKeyword = ""
		var keywordSto = []
		btnSearch.addEventListener("click", (e) => {
			dataKeyword = keyword.value;
			const keywordData = {
				keyword: dataKeyword,
			}
			keywordSto.push(keywordData)
			localStorage.setItem('keyword', JSON.stringify(keywordSto));
			reRender(PageSearch, "#app");
		});


		Header.afterRender();

	}
};

export default HomePage;
