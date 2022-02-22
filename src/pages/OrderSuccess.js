import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import { add, getAll } from "../api/infoOrder"
import { add as addDetailOrder } from "../api/detailOrder"

const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const OrderSuccess = {
    print() {
        let info = [];
        if (localStorage.getItem('infoOrder')) {
            info = JSON.parse(localStorage.getItem('infoOrder'))
        }
        return /*html*/`
            <header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
			<div class="" id="banner">${Banner.printf()}</div>
            <main class="grid grid-cols-8 gap-3 my-2 relative">
                    <div class="col-span-8 my-10">
                    ${localStorage.getItem('infoOrder') ? `
                        <div class="my-0 m-auto w-[70%] text-center">
                            <span class="text-2xl font-bold text-green-500">Đặt Hàng Thành Công</span>
                            <span class="text-xl font-bold block">Đơn hàng của bạn sẽ được giao đến địa chỉ <span class="text-red-500">${info[0].address}</span></span>
                            <span class="text-xl font-bold block">Đến người nhận là<span class="text-red-500"> ${info[0].fullname}</span></span>
                            <span class="text-xl font-bold block">Có email là <span class="text-red-500"> ${info[0].email}</span> và số điện thoại <span class="text-red-500"> ${info[0].phone}</span></span>
                            <span class="text-xl font-bold block">Hãy chuẩn bị số tiền <span class="text-red-500 total"></span></span>
                            <div class="text-center my-3">
							<button class="bg-[#338dbc] text-white py-4 px-5 rounded text-xl orderSuccess">Hoàn Tất</button>
						</div>
                        </div>
                    ` : `
                        <span class="text-2xl font-bold text-red-500">Không có thông tin và sản phẩm đơn hàng</span>
                    `}
                        
                    </div>
            </main>
            <footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
        `
    },

    async afterRender() {
        let cart = [];
        let info = [];
        var tongTien = 0;
        const orderSuccess = document.querySelector(".orderSuccess")

        if (localStorage.getItem('infoOrder')) {
            info = JSON.parse(localStorage.getItem('infoOrder'))
        }

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            const renderTongTien = document.querySelector(".total")
            cart.forEach(carts => {
                tongTien = tongTien + (carts.fakePrice * carts.quantity)
            });
            renderTongTien.innerHTML = `${numberFormat.format(tongTien)}`;
        }
        orderSuccess.addEventListener("click", async () => {
            await add({
                fullname: info[0].fullname,
                email: info[0].email,
                address: info[0].address,
                phone: info[0].phone,
                status: 0,
                total: tongTien,
            });
            const { data } = await getAll("_limit=1&_sort=id&_order=desc");
            const idOrder = data[0].id;

            let cartBill = []
            if (localStorage.getItem('cart')) {
                cartBill = JSON.parse(localStorage.getItem('cart'));
                cartBill.forEach((item, index) => {
                    console.log(item);
                    addDetailOrder({
                        infoOrderId: idOrder,
                        categoryId: item.categoryId,
                        title: item.title,
                        img: item.img,
                        desc: item.desc,
                        price: item.fakePrice,
                        quantity: item.quantity,
                        total: item.fakePrice * item.quantity,
                    })
                })
            }

            localStorage.removeItem("infoOrder");
            localStorage.removeItem("cart");
            setTimeout(() => {
                document.location.href = "/";
            }, 2000)

        })


    }
}

export default OrderSuccess;