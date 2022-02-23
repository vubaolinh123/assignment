import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";
import { reRender } from "../utils/reRedner"
import { getAll, Search } from "../api/products"
import { getAll as dataCate } from '../api/category'

const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});

const PageSearch = {
	async print() {
		let dataKeyword = []
		if (localStorage.getItem('keyword')) {
			dataKeyword = JSON.parse(localStorage.getItem('keyword'))
		}

		const { data } = await getAll();
		const Cate = await dataCate();
		console.log(dataKeyword[0].keyword);
		const dataSearch = await Search(dataKeyword[0].keyword);
		return /*html*/ ` 
			<header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
			<div class="" id="banner">${Banner.printf()}</div>
			<main class="grid grid-cols-8 gap-3 my-2 relative">
					<div class="main-left col-span-2">
                            <div class="border border-gray-300 bg-gray-100 mb-4 danhmuc">
					<span class="bg-red-600 text-white py-3 px-3 block text-lg"><i class="fas fa-bars mr-3"></i>Danh Mục
						Các Loại Sản Phẩm</span>
					<ul class="main-menu px-4">
					${Cate.data.map((cate) => {
			return /*html*/ `
							<li class="my-5"><a href="#" class=""><i class="fas fa-chevron-right text-red-600 mr-2"></i><a href="/productCate/${cate.id}">${cate.name}</a>
							</a></li>
						`
		}).join("")}
					</ul>
				</div>
				<div class="border border-gray-300 bg-gray-100 danhmuc">
					<span class="bg-red-600 text-white py-3 px-3 block text-lg"><i class="fas fa-bars mr-3"></i>CÁC SẢN
						PHẨM MỚI RA</span>
					<ul class="main-menu px-4">
						<li class="my-5"><a href="#"><i class="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 1
							</a></li>
						<li class="my-5"><a href="#"><i class="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 2
							</a></li>
						<li class="my-5"><a href="#"><i class="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 3
							</a></li>
						<li class="my-5"><a href="#"><i class="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 4
							</a></li>
						<li class="my-5"><a href="#"><i class="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 5
							</a></li>
					</ul>
				</div>
                    </div>
					<div class="main-right col-span-6">
                            <div class="tittle-sp bg-red-500 text-white text-xl py-3 px-5 text-center"><span class="">Các Sản Phẩm Có Từ Khóa Là ${dataKeyword[0].keyword}</span>
				</div>
				<div class="py-3 grid grid-cols-3 gap-3">
						${dataSearch.data.map((product) => {
			if (product.status == 1) {
				var status = "Còn Hàng"
			} else {
				status = "Hết Hàng"
			}
			return  /*html*/`
									<div class="sanpham border border-gray-400 text-center">
										<a href="/products/${product.id}"><img src="${product.img}" /></a>
										<a href="/products/${product.id}" class="block my-3"><span class="name-sp text-xl">${product.title}</span></a>
										<div class="render-price">
											<span class="giamgia text-[#888] text-base line-through">Giá Gốc: ${numberFormat.format(product.price)} 
												<span class="bg-red-500 text-white rounded-2xl  inline-block px-2 mx-2">${product.discount}%</span>
											</span>
											<span class="gia block text-[#ed0000] text-xl font-semibold">Giảm Giá: ${numberFormat.format(product.fakePrice)}</span>
											<span class="gia block text-gray-600 text-xl font-semibold">Tình Trạng: ${status}</span>
										</div>
										<a href="/products/${product.id}" class="inline-block my-5 text-white bg-red-500 py-2 px-4 text-xl">Chi tiết <i
												class="fas fa-chevron-circle-right "></i></a>
									</div>
								`
		}).join("")}
					</div>
                    </div>
			</main>
			<ul class="text-center my-2 renderPage">
						
			</ul>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
		`;
	},
	async afterRender() {

		// const { data } = await Search(keyword.value);
		// console.log(data);
		let dataKeywords = []
		if (localStorage.getItem('keyword')) {
			dataKeywords = JSON.parse(localStorage.getItem('keyword'))
		}

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

export default PageSearch;
