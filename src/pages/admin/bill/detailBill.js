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
       
                        <div class="max-w-screen-lg mx-auto py-6 ">
                                        <div class="flex flex-col">
                                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                    <div class="mx-auto p-16" >
                                <div class="flex items-center justify-between mb-8 px-3">
                                    <div>
                                        <span class="text-2xl">ID Invoice # ${data.id} </span><br />
                                    </div>
                                    <div class="text-right">
                                        <img src="https://www.stenvdb.be/assets/img/email-signature.png" />
                                    </div>
                                </div>

                                <div class="flex justify-between mb-8 px-3">
                                    <div>
                                        Name: ${data.fullname}<br />
                                        Email: ${data.email}<br />
                                        Address: ${data.address}<br />
                                       Phone: ${data.phone}<br />
                                    </div>
                                    <div class="text-right">
                                        Company Name<br />
                                        Street 12<br />
                                        10000 City<br />
                                        hello@yoursite.com
                                    </div>
                                </div>

                                <div class="border border-t-2 border-gray-200 px-3"></div>
                                <table  class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Img</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                     ${data.detailOrder.map((infoDetail, index) => {
            return /*html*/ `
                                          <tr>
                                            <td  scope="col" class="text-center px-6 py-4 whitespace-nowrap">
                                                ${infoDetail.title}
                                            </td>
                                            <td  scope="col" class="text-center px-6 py-4 whitespace-nowrap">
                                                <img class="inline-block" src="${infoDetail.img}" width="100" alt="" />
                                            </td>
                                            <td  scope="col" class="text-center px-6 py-4 whitespace-nowrap">
                                                ${numberFormat.format(infoDetail.price)}
                                            </td>
                                            <td  scope="col" class="text-center px-6 py-4 whitespace-nowrap">
                                                ${infoDetail.quantity}
                                            </td>
                                            <td  scope="col" class="text-center px-6 py-4 whitespace-nowrap">
                                                ${numberFormat.format(infoDetail.total)}
                                            </td>
                                        </tr>
                                                    ` }).join('')}
                                       
                                    </tbody>
                                </table>
                                   
                                <div class="flex justify-between items-center mb-2 px-3 border-t py-2">
                                    <div class="text-2xl leading-none"><span class="">Total</span>:</div>
                                    <div class="text-2xl text-right font-medium">${numberFormat.format(data.total)}</div>
                                </div>

                                <div class="flex mb-8 justify-end px-3">
                                    <div class="text-right w-1/2 px-0 leading-tight">
                                        <small class="text-xs">Nullam auctor, tellus sit amet eleifend interdum, quam nisl luctus quam, a
                                            tincidunt
                                            nisi eros ac dui. Curabitur leo ipsum, bibendum sit amet suscipit sed, gravida non lectus. Nunc
                                            porttitor lacus sapien </small>
                                    </div>
                                </div>
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
