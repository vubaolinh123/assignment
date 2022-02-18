import { getAll } from '../api/category'
const HomeLeft = {
	async printf() {
		const { data } = await getAll();
		return /*html*/ `
            <div class="border border-gray-300 bg-gray-100 mb-4 danhmuc">
					<span class="bg-red-600 text-white py-3 px-3 block text-lg"><i class="fas fa-bars mr-3"></i>Danh Mục
						Các Loại Sản Phẩm</span>
					<ul class="main-menu px-4">
					${data.map((cate) => {
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
        `
	}
}

export default HomeLeft;