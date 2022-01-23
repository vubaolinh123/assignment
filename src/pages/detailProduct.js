import { get, getAll } from "../api/products";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import HomeLeft from "../components/HomeLeft";

const numberFormat = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});


const detailProduct = {
	async print(id) {
		const  { data } = await get(id);
		const data2 = await getAll();
		const dataProducts = data2.data;
		return /*html*/ `
            <header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.printf()}</header>
			<div class="" id="banner">${Banner.printf()}</div>
			<main class="grid grid-cols-8 gap-3 my-2 relative">
				<div class="main-left col-span-2">${HomeLeft.printf()}</div>
				<div class="main-right col-span-6">
                    <div class="tittle-sp bg-red-500 text-white text-xl py-3 px-5 text-center"><span class="">CHI TIẾT SẢN PHẨM</span> </div>
				    <div class="chitietsp grid grid-cols-5 gap-4 bg-gray-100">
					<div class="anh-chitiet  col-span-3"><img src="${data.img}" alt=""></div>
					<div class="content-sp col-span-2 p-2">
						<h1 class="ten-sanpham font-bold text-xl pb-2">Tên Sản Phẩm: ${data.title}</h1>
						<p class="chitiet-sanpham"><span class="font-bold">Giới thiệu:</span> <span class="text-sm">${data.desc}</span></p>
						<div class="nav-price py-3">
							<span class="price-text font-bold text-lg inline-block w-[75px]">Giá Cũ: </span>
							<span class="gia-sanpham text-2xl text-[#888] font-bold"><del> ${numberFormat.format(data.fakePrice)}</del></span>
							<br>
							<span class="price-text  font-bold text-lg inline-block w-[75px]">Giá KM:</span><span
								class="gia-sale text-2xl text-red-500 font-bold"> ${numberFormat.format(data.price)}</span>
						</div>
						<div class="form-group">
							<a href="/cart"
								class="font-bold text-white inline-block bg-red-500 py-3 px-5 rounded text-2xl my-3">ĐẶT
								HÀNG</a>
						</div>
					</div>
				</div>
             </div>
            <div class="spcl col-span-8">
                <div class="bg-red-500 text-white text-xl py-3 px-5 text-center "><span class="">Sản Phẩm Cùng Loại</span> </div>
                <div class="grid grid-cols-5 gap-4">
                ${dataProducts.map((product)=>{
                    return /*html*/`
                        <div class="border border-black p-2 my-2">
					        <a href="/news/${product.id}"><img src="${product.img}" alt=""></a>
					        <span class="font-bold">${product.title}</span>
					        <span class="block text-[#888]  text-base my-1"><del>${numberFormat.format(product.fakePrice)}</del> 
                                <span class="bg-red-500 text-white rounded-2xl  inline-block px-2 mx-2 text-sm">${product.discount}%</span>
                            </span>
					    <span class="text-red-500 font-bold block text-xl">${numberFormat.format(product.price)}</span>
				</div> 
                    `
                }).join("")}
			</div>
            </div>
			</main>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
          `;
	},
};

export default detailProduct;

                
