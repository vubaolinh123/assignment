import { getAll } from "../api/products"

const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});

const HomeRight = {
	async printf() {
		const { data } = await getAll();
		return /*html*/ `
			<div class="tittle-sp bg-red-500 text-white text-xl py-3 px-5 text-center"><span class="">TẤT CẢ CÁC SẢN
						PHẨM MỚI NHẤT</span>
				</div>
				<div class="py-3 grid grid-cols-3 gap-3">
						${data.map((product) => {
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
      `
	},
};

export default HomeRight;
