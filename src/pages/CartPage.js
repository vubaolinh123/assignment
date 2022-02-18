import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";



const CartPage = {
	print() {
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
						<tr id="sanphamtt">
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">
								<div class="">
									<a href="" class=""><img src="https://i.imgur.com/5vbUxov.jpg" alt="" width="100"
											class="align-middle inline-block"></a>
								</div>
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">VENTUS M</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">
								<input type="number" min="1" size="3" value="1"
									class="text-center border border-black w-[65px]">
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">8,590,000₫</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center"><a href="">
									<i class="fa fa-trash">
									</i>
								</a></td>
						</tr>
						<tr id="sanphamtt">
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">
								<div class="">
									<a href="" class=""><img src="https://i.imgur.com/5vbUxov.jpg" alt="" width="100"
											class="align-middle inline-block"></a>
								</div>
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">VENTUS M</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">
								<input type="number" min="1" size="3" value="1"
									class="text-center border border-black w-[65px]">
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">8,590,000₫</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center"><a href="">
									<i class="fa fa-trash">
									</i>
								</a></td>
						</tr>
						<tr id="tong-tien">
							<td colspan="4"
								class="border border-[#f0f0f0] border-x-[1px] p-4 text-center font-bold text-xl">Tổng
								Tiền:
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center font-bold ">
								17,180,000₫</td>
						</tr>
					</tbody>
				</table>
				<div class="thanh-toan text-center my-4">
					<button type="submit"
						class="text-white bg-red-500 inline-block rounded font-bold text-2xl px-4 py-3"><a href="/#/checkout">Thanh
						Toán</a></button>
					<button type="submit"
						class="text-white bg-red-500 inline-block rounded font-bold text-2xl px-4 py-3">Cập
						Nhật</button>
				</div>
			</form>
		</div>
			</main>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
		`;
	},
	afterRender() {
		Header.afterRender();
	}
};

export default CartPage;
