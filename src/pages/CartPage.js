import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import { decInQty, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/reRedner";
import toastr from 'toastr';
import { $ } from "../utils/selector";
import "toastr/build/toastr.min.css";

const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});


const CartPage = {
	print() {
		let cart = [];
		if (localStorage.getItem('cart')) {
			cart = JSON.parse(localStorage.getItem('cart'));
		}
		return /*html*/ ` 
			<header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
			<div class="" id="banner">${Banner.printf()}</div>
			<main class="grid grid-cols-8 gap-3 my-2 relative">
			<div class="col-span-8">
			<form action="" id="form-cart">
				<h2 class="font-bold text-2xl text-center">GIỎ HÀNG</h2>
				<table class="w-full border-collapse">
					<thead>
						<tr>
							<th class="border border-[#f0f0f0] border-x-[1px] py-4">Sản Phẩm</th>
							<th class="border border-[#f0f0f0] border-x-[1px] p-4">Tên Sản Phẩm</th>
							<th class="border border-[#f0f0f0] border-x-[1px] p-4">Số Lượng</th>
							<th class="border border-[#f0f0f0] border-x-[1px] p-4">Giá Tiền</th>
							<th class="border border-[#f0f0f0] border-x-[1px] p-4">Xóa</th>
						</tr>
					</thead>
					<tbody>
					${cart.length > 0 ? cart.map(item => /*html*/`
                        <tr id="sanphamtt">
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">
								<div class="">
								<button type="button" hidden class="btn quantityProduct"></button>
									<a href="" class=""><img src="${item.img}" alt="" width="100"
											class="align-middle inline-block"></a>
								</div>
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">${item.title}</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">
								<input type="number"  size="3" value="${item.quantity}" data-id="${item.id}"
									class="text-center border border-black w-[65px] quantityProduct">
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">${numberFormat.format(item.fakePrice)}</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center"><button href="" data-id="${item.id}" class="btn btn-remove"> 
									<i class="fa fa-trash">
									</i>
								</button></td>
						</tr>
                    `).join("") : `
                        <tr>
                            <td colspan="4">Không có sản phẩm nào trong giỏ hàng</td>
                        </tr>
                    `}
					<tr id="tong-tien" >
							<td colspan="4"
								class="border border-[#f0f0f0] border-x-[1px] p-4 text-center font-bold text-xl">Tổng
								Tiền:
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center font-bold total">
								</td>
						</tr>
					</tbody >
				</table >
	<div class="thanh-toan text-center my-4">
		<button type="submit"
			class="text-white bg-red-500 inline-block rounded font-bold text-2xl px-4 py-3"><a href="/#/checkout">Thanh
				Toán</a></button>
	</div>
			</form >
		</div >
			</main >
	<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
`;
	},
	afterRender() {
		// Header.afterRender();
		let cart = [];
		var tongTien = 0;
		if (localStorage.getItem('cart')) {
			cart = JSON.parse(localStorage.getItem('cart'));
		}

		const renderTongTien = document.querySelector(".total")
		cart.forEach(carts => {
			tongTien = tongTien + (carts.fakePrice * carts.quantity)
		})
		renderTongTien.innerHTML = numberFormat.format(tongTien);

		if ($(".btn")) {
			console.log($(".btn"));
			$(".btn").forEach(btn => {
				const id = btn.dataset.id;
				btn.addEventListener('click', function () {
					removeItemInCart(id, () => {
						reRender(CartPage, "#app");
						toastr.success("Bạn đã xóa thành công")
					})
				})
			})
		}

		// const quantityProduct = $(".quantityProduct");
		// console.log(quantityProduct.length);
		if ($(".quantityProduct")) {
			$(".quantityProduct").forEach((quantity) => {
				quantity.addEventListener("change", () => {
					const id = quantity.dataset.id;
					decInQty(id, quantity.value, () => reRender(CartPage, "#app"));
				})
			})
		}

		// END
	}
};

export default CartPage;
