import data from "../data";

const NewList = {
	printf() {
		return /*html*/ `
      <h2 class="my-3 text-xl font-bold text-[#272f54]">TIN TỨC HỌC TẬP</h2>
      <div class="grid gap-5 grid-cols-3">
    ${data
		.map(function (post) {
			return /*html*/ `
          <div class="border border-black p-4">
              <a href="#"><img src="${post.img}" alt="" class="w-max"></a>
              <span class="text-orange-400 font-bold my-2 block">${post.tittle}</span>
              <p class="">${post.desc}</p>
          </div>
          `;
		})
		.join("")}
    </div>
        <h2 class="my-3 text-xl font-bold text-[#272f54]">HOẠT ĐỘNG SINH VIÊN</h2>
        <div class="grid gap-5 grid-cols-3">
                ${data
					.map(function (post) {
						return /*html*/ `
          <div class="border border-black p-4">
              <a href="#"><img src="${post.img}" alt="" class="w-max"></a>
              <span class="text-orange-400 font-bold my-2 block">${post.tittle}</span>
              <p class="">${post.desc}</p>
          </div>
          `;
					})
					.join("")}
        </div>
        `;
	},
};

export default NewList;
