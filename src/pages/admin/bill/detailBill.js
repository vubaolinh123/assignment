import { getAll, Relationships } from "../../../api/infoOrder"

import NavAdmin from "../../../components/navAdmin";

const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});



const DetailBill = {
    async print(id) {
        const { data } = await Relationships(id);
        console.log(data);
        return /*html*/ `
            <div class="min-h-full">
		${NavAdmin.printf()}
		<header class="bg-white shadow">
			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
				<h1 class="text-3xl font-bold text-gray-900">Chi Tiết Đơn Hàng</h1>
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
												Tên Sản Phẩm
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Ảnh
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Mô tả
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Giá
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Số lượng
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Tổng Tiền
											</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										${data.detailOrder.map((infoDetail, index) => {
            return /*html*/ `
										<tr>
                                            <td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
											<td class="px-6 py-4 whitespace-nowrap">${infoDetail.title}</td>
											<td class="px-6 py-4 whitespace-nowrap"><img src="${infoDetail.img}" alt="" width="100"/></td>
											<td class="px-6 py-4 whitespace-nowrap ">${infoDetail.desc}</td>
											<td class="px-6 py-4 whitespace-nowrap">${infoDetail.price}</td>
											<td class="px-6 py-4 whitespace-nowrap">${infoDetail.quantity}</td>
                                            <td class="px-6 py-4 whitespace-nowrap">${infoDetail.total}</td>
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


    }
};

export default DetailBill;
