import { getAll, remove } from "../../../api/category"
import NavAdmin from "../../../components/navAdmin";

const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});



const indexCategory = {
	async print() {
		const { data } = await getAll();

		return /*html*/ `
            <div class="min-h-full">
		${NavAdmin.printf()}
		<header class="bg-white shadow">
			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
				<h1 class="text-3xl font-bold text-gray-900">Quản Trị Danh Mục Sản Phẩm</h1>
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
												Tên Danh Mục
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
												<a href="/admin/category/add"
													class="text-green-600 hover:text-green-900">ADD</a>
												</td>
											</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										${data.map((post, index) => {
			return /*html*/ `
										<tr>
											<td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
											<td class="px-6 py-4 whitespace-nowrap">${post.name}</td>
											<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<a href="/admin/category/${post.id}/edit"
													class="text-indigo-600 hover:text-indigo-900">Edit</a>
												<button data-id=${post.id}
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
	afterRender() {
		const buttons = document.querySelectorAll('.btn');
		buttons.forEach(button => {
			const id = button.dataset.id;
			button.addEventListener("click", () => {
				const confirm = window.confirm("Bạn có chắc muốn xóa không ?")
				if (confirm) {
					remove(id).then(() => alert("Bạn đã xóa thành công"))
				}
			})
		})
	}
};

export default indexCategory;
