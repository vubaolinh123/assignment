const Header = {
	printf() {
		return /*html*/ `
            <div class="bg-[#272f54] py-5">
          <img src="https://i.imgur.com/BPvFtRD.jpg" alt="" class="m-auto">
        </div>
        <div class="bg-[#c87903]">
            <div class="flex justify-between items-center mx-2">
                  <ul class="">
                    <li class="inline-block mx-3 "><a href="/" class="block text-white py-3 hover:underline">HomePage</a></li>
                    <li class="inline-block mx-3"><a href="/about" class="block text-white py-3 hover:underline">About</a></li>
                    <li class="inline-block mx-3"><a href="/signup" class="block text-white py-3 hover:underline">SignUp</a></li>
                    <li class="inline-block mx-3"><a href="/signin" class="block text-white py-3 hover:underline">SignIn</a></li>
                    <li class="inline-block mx-3"><a href="/admin/dashboard/" class="block text-white py-3 hover:underline">Admin</a></li>
                  </ul>
                  <form  class="">
                        <input type="text">
                        <a href="#" class="text-white bg-[#272f54] border border-white px-3">Tìm Kiếm</a>
                  </form>
            </div>
        </div>
        `;
	},
};

export default Header;
