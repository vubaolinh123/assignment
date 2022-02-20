import { getAll, remove } from "../../../api/products"
import { getAll as GetAllCategory } from "../../../api/category";
import { reRender } from "../../../utils/reRedner"
import { Relationships } from "../../../api/category"
import NavAdmin from "../../../components/navAdmin";


const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});



const indexNews = {
	async print() {
		const { data } = await getAll();
		const Category = await GetAllCategory()
		const dataC = Category.data
		return /*html*/ `
            <div class="min-h-full">
		${NavAdmin.printf()}
		<header class="bg-white shadow">
			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
				<h1 class="text-3xl font-bold text-gray-900">Quản Trị Sản Phẩm</h1>
				<select name="select-category" id="select-category" class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
						<option value="0" selected>Tất Cả Sản Phẩm</option>
						${dataC.map((catePro) => {
			return /*html*/`
								<option value="${catePro.id}" >${catePro.name}</option>
							`
		}).join("")}
				</select>
			</div>
		</header>
		<main>
			<div class="max-w-7xl mx-auto py-6 ">
				<div class="flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="bg-gray-50">
										<tr>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												STT
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Title
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Image
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Desc
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Category
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Discount
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Price
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Cost Price 
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Status
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
												<a href="/admin/product/add"
													class="text-green-600 hover:text-green-900">ADD</a>
												</td>
											</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										${data
				.map((product, index) => {
					if (product.status == 1) {
						var status = "Còn"
					} else {
						status = "Hết"
					}

					const result = dataC.filter(category => category.id == product.categoryId)
					return /*html*/ `
										<tr>
											<td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
											<td class="px-6 py-4 whitespace-nowrap">${product.title}</td>
											<td class="px-6 py-4 whitespace-nowrap"><img src="${product.img}" alt=""
													width="100" /></td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span
													class=""> ${product.desc.substr(0, 15)}....</span></td>
											<td class="px-6 py-4 whitespace-nowrap">
												${result[0].name}
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												${product.discount}%
											</td>
											<td class="px-6 py-4 whitespace-nowrap">${numberFormat.format(product.fakePrice)}</td>
											<td class="px-6 py-4 whitespace-nowrap">${numberFormat.format(product.price)}
											</td>
											<td class="px-6 py-4 whitespace-nowrap">${status}</td>
											<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<a href="/admin/product/${product.id}/edit"
													class="text-indigo-600 hover:text-indigo-900">Edit</a>
												<button data-id=${product.id}
													class="btn-remove btn text-red-600 hover:text-red-900">Delete</button>
											</td>
										</tr>
										`;
				}).join("")}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
            
        `;
	},
	async afterRender() {
		const buttons = document.querySelectorAll('.btn');
		const selectCatePro = document.querySelector("#select-category")
		console.log(selectCatePro);

		buttons.forEach(button => {
			const id = button.dataset.id;
			button.addEventListener("click", () => {
				const confirm = window.confirm("Bạn có chắc muốn xóa không ?")
				if (confirm) {
					remove(id).then(() => reRender(indexNews, '#app'))
				}
			})
		});
		// abc
		selectCatePro.addEventListener("change", (item) => {
			if (selectCatePro.value != 0) {
				// const ProInCate = await Relationships((selectCatePro.value));
				// const dataProInCate = ProInCate.data.products;
				// console.log(dataProInCate);

			} else {
				reRender(indexNews, '#app')
			}
		})
	}
};

export default indexNews;
