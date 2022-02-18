import NavAdmin from "../../../components/navAdmin";
import { add } from "../../../api/products";
import { getAll } from "../../../api/category";
import axios from "axios";

const AddProduct = {
	async print() {
		const { data } = await getAll()
		return /*html*/ `
        <div class="min-h-full">
				${NavAdmin.printf()}
  				<header class="bg-white shadow">
    			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      			<h1 class="text-3xl font-bold text-gray-900">Thêm Mới Sản Phẩm</h1>
    	</div>
  	</header>
  <main>
		<div class="max-w-7xl mx-auto py-6 ">
      <!-- Replace with your content -->
		<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<form action=""  id="form-add-post">
						<div class="shadow overflow-hidden sm:rounded-md">
							<div class="px-4 py-5 bg-white sm:p-6">
								<div class="grid grid-cols-6 gap-6">
									<div class="col-span-6 sm:col-span-3">
										<label for="product-name" class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
										<input type="text" name="product-name" id="product-name" placeholder="Nhập tên sản phẩm"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									<div class="col-span-6 sm:col-span-3">
										<label for="image-product"
											class="block text-sm font-medium text-gray-700">Ảnh</label>
										<input type="file" name="image-product" id="image-product"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									<div class="col-span-6 sm:col-span-4">
										<label for="desc-product" class="block text-sm font-medium text-gray-700">Nội
											dung sản phẩm</label>
										<textarea type="text" name="desc-product" id="desc-product"
											autocomplete="email"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
									</div>
									<div class="col-span-6 sm:col-span-3">
										<label for="price-product"
											class="block text-sm font-medium text-gray-700">Giá</label>
										<input type="number" min="0" name="price-product" id="price-product" placeholder="Nhập giá sản phẩm"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>
										<div class="col-span-6 sm:col-span-3">
										<label for="discout-product"
											class="block text-sm font-medium text-gray-700">Giảm Giá</label>
										<input type="number" min="0" name="discout-product" id="discout-product" placeholder="Nhập số % muốn giảm"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									</div>

									<div class="col-span-6 sm:col-span-3 my-5">
										<label for="select-category" class="block text-sm font-medium text-gray-700">Chọn danh mục muốn thêm</label>
											<select name="select-category" id="select-category" class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
												${data.map((category, index) => {
			return /*html*/ `
														<option value="${category.id}">${category.name}</option>
													`
		})}
											</select>
									</div>

								</div>
							</div>
							<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button type="submit"
									class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Thêm Mới
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
	afterRender() {
		const formAdd = document.querySelector('#form-add-post');
		var nameProduct = document.querySelector('#product-name')
		var imageProduct = document.querySelector('#image-product')
		var descProduct = document.querySelector('#desc-product')
		var priceProduct = document.querySelector('#price-product')
		var discoutProduct = document.querySelector('#discout-product')
		var selectCategory = document.querySelector('#select-category');
		var dataImg = ""

		imageProduct.addEventListener('change', async (e) => {
			const file = e.target.files[0];
			const formData = new FormData();
			const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/hinalink/image/upload"
			formData.append('file', file);
			formData.append('upload_preset', "rgjdfr7q")

			const response = await axios.post(CLOUDINARY_API, formData, {
				headers: {
					"Content-Type": "application/form-data"
				}
			})

			dataImg = response.data.url
		})


		formAdd.addEventListener('submit', (e) => {
			e.preventDefault();

			var price = priceProduct.value - (priceProduct.value * discoutProduct.value / 100)
			add({
				title: nameProduct.value,
				img: dataImg,
				desc: descProduct.value,
				price: priceProduct.value,
				fakePrice: price,
				discount: discoutProduct.value,
				status: 1,
				categoryId: selectCategory.value
			})
				.then((result) => console.log(result.data))
				.catch((error) => console.log(error))

			alert('Thêm sản phẩm thành công')
		})
	}
};

export default AddProduct;
