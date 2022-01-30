import { update, get } from "../../../api/products"
import { getAll as GetAllCategory } from "../../../api/category";
import NavAdmin from "../../../components/navAdmin";

const EditProducts = {
	async print(id) {
		const { data } = await get(id);
		const Category = await GetAllCategory()
		const dataC = Category.data

		return /*html*/ `
        <div class="min-h-full">
			${NavAdmin.printf()}
			<header class="bg-white shadow">
				<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 class="text-3xl font-bold text-gray-900">Cập Nhật Sản Phẩm</h1>
				</div>
			</header>
			<main>
				<div class="max-w-7xl mx-auto py-6 ">
					<!-- Replace with your content -->
					<div class="flex flex-col">
						<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<form action="" id="form-add-post">
										<div class="shadow overflow-hidden sm:rounded-md">
											<div class="px-4 py-5 bg-white sm:p-6">
												<div class="grid grid-cols-6 gap-6">
													<div class="col-span-6 sm:col-span-3">
														<label for="product-name"
															class="block text-sm font-medium text-gray-700">Tên sản
															phẩm</label>
														<input type="text" name="product-name" id="product-name"
															placeholder="Nhập tên sản phẩm " value="${data.title}"
															class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
													</div>

													<div class="col-span-6 sm:col-span-3">
														<label for="image-product"
															class="block text-sm font-medium text-gray-700">Ảnh</label>
														<img src="${data.img}" alt="" width="200" height="100" />
														<input type="text" name="image-product" id="image-product"
															placeholder="Vui lòng nhập Url ảnh"
															class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
															value="${data.img}">
													</div>

													<div class="col-span-6 sm:col-span-4">
														<label for="desc-product"
															class="block text-sm font-medium text-gray-700">Nội
															dung sản phẩm</label>
														<textarea type="text" name="desc-product" id="desc-product"
															cols="20" rows="5"
															class="mt-1 py-4 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">${data.desc}</textarea>
													</div>
													<div class="col-span-6 sm:col-span-3">
														<label for="price-product"
															class="block text-sm font-medium text-gray-700">Giá</label>
														<input type="number" min="0" name="price-product"
															id="price-product" placeholder="Nhập giá sản phẩm"
															value="${data.fakePrice}"
															class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
													</div>
													<div class="col-span-6 sm:col-span-3">
														<label for="discout-product"
															class="block text-sm font-medium text-gray-700">Giảm
															Giá</label>
														<input type="number" min="0" name="discout-product"
															id="discout-product" placeholder="Nhập số % muốn giảm"
															value="${data.discount}"
															class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
													</div>
													<div class="col-span-6 sm:col-span-3">
														<h2>Trạng Thái</h2>
														<label for="status-product"
															class=" text-sm font-medium text-gray-700">Còn hàng</label>
														<input type="radio" name="status-product" class="status-product"
															class="mt-1 py-2 px-1 " value="1">
														<label for="status-product"
															class=" text-sm font-medium text-gray-700">Hết Hàng</label>
														<input type="radio" name="status-product" class="status-product"
															value="0" checked>
													</div>

													<div class="col-span-6 sm:col-span-3 my-5">
														<label for="select-category" class="block text-sm font-medium text-gray-700">Chọn Danh Mục Update</label>
														<select name="select-category" id="select-category" class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
																${dataC.map((category, index) => {
			return `
				<option value="${category.id}" class="options-category">${category.name}</option>
				`
		}).join("")}
														</select>
													</div>

												</div>
											</div>
											<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
												<button type="submit"
													class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
													Cập Nhật
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<!-- /End replace -->
				</div>
			</main>
		</div>
        `;
	},
	async afterRender(id) {
		// const { data } = await get(id);
		// const idCategorySelected = data.id_category;
		var selectCategory = document.querySelector('#select-category');

		// Selected vào category sản phẩm Edit 
		// var option;
		// for (var i = 0; i < selectCategory.options.length; i++) {
		// 	option = selectCategory.options[i];
		// 	if (option.value == idCategorySelected) {
		// 		option.setAttribute('selected', true);
		// 		return;
		// 	}
		// }
		// END SELECTED

		const formAdd = document.querySelector('#form-add-post');
		formAdd.addEventListener('submit', (e) => {
			e.preventDefault();
			var nameProduct = document.querySelector('#product-name')
			var imageProduct = document.querySelector('#image-product')
			var descProduct = document.querySelector('#desc-product')
			var priceProduct = document.querySelector('#price-product')
			var discoutProduct = document.querySelector('#discout-product')
			var statusProduct = document.querySelectorAll('.status-product')

			var price = priceProduct.value - (priceProduct.value * discoutProduct.value / 100)
			var status = 1;
			if (statusProduct[0].checked) {
				status = statusProduct[0].value
			} else {
				status = statusProduct[1].value
			}
			update({
				id: id,
				title: nameProduct.value,
				img: imageProduct.value,
				desc: descProduct.value,
				price: priceProduct.value,
				fakePrice: price,
				discount: discoutProduct.value,
				status: status,
				id_category: selectCategory.value
			})
				.then((result) => console.log(result.data))
				.catch((error) => console.log(error))

			alert('Cập nhật sản phẩm thành công')
		})
	}
};

export default EditProducts;
