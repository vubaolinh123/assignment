const Header = {
	printf() {
		return /*html*/ `
            <div class="col-span-1">
				<img src="https://i.imgur.com/KG5GDXw.png" alt="">
			</div>
			<div class="col-span-5 ">
				<ul class="menu">
					<li class="inline-block mx-3"><a href="" class="block py-4"><i class="fas fa-house-damage"></i>
							Trang Chủ</a></li>
					<li class="inline-block mx-3"><a href="/contact" class="block py-4"><i class="far fa-address-book"></i> Liên
							Hệ</a></li>
					<li class="inline-block mx-3"><a href="/signup" class="block py-4"><i class="far fa-user"></i>
							Đăng Ký</a></li>
					<li class="inline-block mx-3"><a href="/signin" class="block py-4"><i class="fas fa-user"></i> Đăng
							Nhập</a>
					</li>
					<li class="inline-block mx-3"><a href="/cart" class="block py-4">
							<i class="fas fa-shopping-cart"></i> Giỏ Hàng 
							<span class="bg-red-500 text-white rounded-2xl  inline-block px-2">2</span>
						</a>
					</li>
					<li class="inline-block mx-3"><a href="/admin/dashboard" class="block py-4"><i class="fas fa-user"></i> Admin</a>
					</li>
				</ul>
			</div>
			<div class="col-span-2 py-3">
				<form action="">
					<input type="text" class="border border-black">
					<button type="submit" class="text-white bg-black px-1">Tìm kiếm</button>
				</form>
			</div>
        `;
	},
};

export default Header;
