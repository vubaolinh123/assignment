import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import axios from "axios";
import $ from 'jquery';
import validate from 'jquery-validation';

const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});

const CheckOut = {
	print() {
		let cart = [];
		if (localStorage.getItem('cart')) {
			cart = JSON.parse(localStorage.getItem('cart'));
		}
		return /*html*/ ` 
			<header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
			<main class="grid grid-cols-8 gap-3 my-2 relative">
                    <div class="col-span-8">
			<div class="grid grid-cols-9">
				<div class="col-span-5 px-[65px]" id="checkout-left">
					<h2 class="text-2xl font-bold my-4">Thanh Toán Sản Phẩm</h2>
					<ul>
						<li class="inline-block mr-2"><a href="/cart" class="text-[#338dbc] text-sm">Giỏ hàng</a></li>>
						<li class="inline-block mx-2"><span class="text-sm">Thông tin giao hàng</span></li>>
						<li class="inline-block mx-2"><span class="text-[#999999] text-sm">Thanh toán</span></li>
					</ul>
					<span class="block my-2 text-xl">Thông tin giao hàng</span>
					${localStorage.getItem('user') ? `` : `<div class="my-2">
						<span class="text-[#737373]">Bạn đã có tài khoản?</span>
						<a href="/signin" class="text-[#338dbc]">Đăng nhập</a>
					</div>`}
					<form action ="" id="formOrder">
						<div class="">
							<div class="form-group">
								<label for="" class="block py-2 font-bold text-lg">Họ và tên</label>
								<input type="text" class="border border-black w-full px-2 py-2 rounded fullname" name="fullname"
									placeholder="Họ và tên...">
							</div>
							<div class="grid grid-cols-8 gap-2">
								<div class="form-group col-span-5">
									<label for="" class="block py-2 font-bold text-lg">Email</label>
									<input type="text" class="border border-black w-[100%] px-2 py-2 rounded email" name="email"
										placeholder="Email...">
								</div>
								<div class="form-group col-span-3">
									<label for="" class="block py-2 font-bold text-lg">Số Điện Thoại</label>
									<input type="number" class="border border-black w-[100%] px-2 py-2 rounded phone" name="phone"
										placeholder="Số Điện Thoại...">
								</div>
							</div>
							<div class="form-group">
								<label for="" class="block py-2 font-bold text-lg">Địa Chỉ</label>
								<input type="text" class="border border-black w-full px-2 py-2 rounded address" name="address"
									placeholder="Địa Chỉ...">
							</div>
						</div>
						<div class="text-center my-3">
							<button class="bg-[#338dbc] text-white py-4 px-5 rounded text-xl ">Tiếp
								Tục Thanh
								Toán</button>
						</div>
					</ >
				</div >
	<div id="checkout-right" class="col-span-4 bg-[#fafafa] border border-gray-300 border-y-0 p-7">
		<div class="h-[300px] overflow-auto">
			${cart.length > 0 ? cart.map(item => /*html*/`
						<div class=" grid grid-cols-5 border border-b-2 border-x-0 border-t-0 py-4">
							<div class="col-span-2"><img src="https://i.imgur.com/5vbUxov.jpg" alt="" width="150"></div>
							<div class="col-span-2 font-bold text-sm py-[50px]"><span class="">${item.title}</span></div>
							<div class="col-span-1  font-bold text-sm py-[50px]"><span class="">${numberFormat.format(item.fakePrice)}</span><div class="">Số lượng: ${item.quantity}</div></div>
						</div>
					`).join('') : `
						<div class=" grid grid-cols-5 border border-b-2 border-x-0 border-t-0 py-4">
							<h2>Không có sản phẩm nào trong giỏ hàng</h2>
						</div>
					`}
		</div>
		<div class="my-4 border border-b-2 border-x-0  border-t-0 py-5">
			<div class="grid grid-cols-2">
				<div class="">
					<span class="text-[#717171] text-lg">Tạm tính</span>
				</div>
				<div class="text-right font-bold">
					<span class="tamtinh"></span>
				</div>
				<div class="">
					<span class="text-[#717171] text-lg">Phí vận chuyển</span>
				</div>
				<div class="text-right font-bold">
					<span class="">--</span>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-2">
			<div class="">
				<span class="text-[#717171] text-xl">Tổng Cộng</span>
			</div>
			<div class="text-right font-bold text-2xl">
				<span class="total"></span>
			</div>
		</div>
	</div>
			</div >
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
		const tamTinh = document.querySelector(".tamtinh")
		cart.forEach(carts => {
			tongTien = tongTien + (carts.fakePrice * carts.quantity)
		})
		renderTongTien.innerHTML = `${numberFormat.format(tongTien)} `;
		tamTinh.innerHTML = `${numberFormat.format(tongTien)} `;

		const formOrder = $("#formOrder");
		const fullName = document.querySelector(".fullname")
		const email = document.querySelector(".email")
		const phone = document.querySelector(".phone")
		const address = document.querySelector(".address")
		let info = [];

		formOrder.validate({
			rules: {
				"fullname": {
					required: true,
				},
				"email": {
					required: true,
				},
				"phone": {
					required: true,
				},
				"address": {
					required: true,
				},
			},
			messages: {
				"fullname": {
					required: "Không được để trống tên người nhận !",
				},
				"email": {
					required: "Không được để trống email người nhận !",
				},
				"phone": {
					required: "Không được để trống số điện thoại người nhận !",
				},
				"address": {
					required: "Không được để trống địa chỉ người nhận !",
				},
			},
			submitHandler: function () {
				async function Order() {
					const InfoOrder = {
						fullname: fullName.value,
						email: email.value,
						address: address.value,
						phone: phone.value
					}
					info.push(InfoOrder);
					localStorage.setItem('infoOrder', JSON.stringify(info));
					document.location.href = "/ordersuccess";
				}
				Order();
			}
		});

	}
};

export default CheckOut;
