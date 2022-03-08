import { getAll, update, remove } from "../../../api/infoOrder"
import { getAll as getAllDetailOrder, remove as removeDetailOrder } from "../../../api/detailOrder"
import NavAdmin from "../../../components/navAdmin";
import { reRender } from "../../../utils/reRedner";
// import $ from "jquery"
// import dt from "datatables.net"

const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});


const indexBill = {
	async print() {
		const { data } = await getAll();

		return /*html*/ `
            <div class="min-h-full">
		${NavAdmin.printf()}
		<header class="bg-white shadow">
			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
				<h1 class="text-3xl font-bold text-gray-900">Quản Trị Đơn Hàng</h1>
			</div>
		</header>
		<main>
			<div class="max-w-7xl mx-auto py-6 ">
				<div class="flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table class="min-w-full divide-y divide-gray-200" id="table_id" >
									<thead class="bg-gray-50">
										<tr>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												STT
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												FullName
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Email
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Address
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Phone
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Total
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Status
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Detail Bill
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Control
											</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										${data.map((infoOrder, index) => {
			return /*html*/ `
										<tr>
											<td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
											<td class="px-6 py-4 whitespace-nowrap">${infoOrder.fullname}</td>
											<td class="px-6 py-4 whitespace-nowrap">${infoOrder.email}</td>
											<td class="px-6 py-4 whitespace-nowrap ">${infoOrder.address}</td>
											<td class="px-6 py-4 whitespace-nowrap">${infoOrder.phone}</td>
											<td class="px-6 py-4 whitespace-nowrap">${numberFormat.format(infoOrder.total)}</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<select name=""  class="bg-blue-100 selectStatus">
												${infoOrder.status == 0 ? `<option value="0" class="bg-blue-400">Chờ Xác Nhận</option>
													<option value="${infoOrder.id}_1" class="bg-green-500">Hoàn Tất</option> <option value="${infoOrder.id}_2" class="bg-red-500">Hủy Đơn </option>` : infoOrder.status == 1 ? `<option value="${infoOrder.id}_1" class="bg-green-500">Hoàn Tất</option>` : `<option value="${infoOrder.id}_2" class="bg-red-500">Hủy Đơn</option>`}
												</select >
											</td >
											<td class="px-6 py-4 whitespace-nowrap"><a href="/admin/${infoOrder.id}/detailBill">View</a></td>
											<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<button data-id=${infoOrder.id}
													class="btn-remove btn text-red-600 hover:text-red-900">Delete</button>
											</td>
										</tr >
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
		// $(document).ready(function () {
		// 	$('#table_id').DataTable();
		// });

		const selectStatus = document.querySelectorAll(".selectStatus");
		const { data } = await getAll();
		const detail = await getAllDetailOrder();
		const dataDetailOrder = detail.data;


		selectStatus.forEach((item) => {
			item.addEventListener("change", (e) => {
				const idOrder = +item.value.slice(0, -2);
				const lengthValue = item.value.length - 1;
				const valueStatus = item.value.slice(lengthValue);
				data.forEach((item, index) => {
					if (item.id == idOrder) {
						update({
							id: idOrder,
							fullname: item.fullname,
							email: item.email,
							address: item.address,
							phone: item.phone,
							status: +valueStatus,
							total: item.total,
						}).then(() => {
							reRender(indexBill, "#app");
						})
					}
				})

			})
		})

		selectStatus.forEach((item, index) => {
			const lengthValue = item.value.length - 1;
			const valueStatus = item.value.slice(lengthValue);
			if (valueStatus == 1) {
				selectStatus[index].style.backgroundColor = "#0bc40b"
				selectStatus[index].style.color = "white"
			} else if (valueStatus == 2) {
				selectStatus[index].style.backgroundColor = "red"
				selectStatus[index].style.color = "white"
			}

		})

		const buttons = document.querySelectorAll('.btn');
		buttons.forEach(button => {
			const id = button.dataset.id;
			button.addEventListener("click", () => {
				const confirm = window.confirm("Bạn có chắc muốn xóa không ?")
				if (confirm) {
					dataDetailOrder.forEach((item) => {
						if (item.infoOrderId == id) {
							removeDetailOrder(item.id);
						}
					});
					remove(id).then(() => {
						reRender(indexBill, "#app");
					})
				}
			})
		})


	}
};

export default indexBill;
