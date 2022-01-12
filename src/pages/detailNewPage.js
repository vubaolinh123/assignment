import data from "../data";

const detailNewPage = {
	print(id) {
		const result = data.find((post) => post.id === id);
		return /*html*/ `
            <div class="border border-black p-4">
                <a href="news/${result.id}"><img src="${result.img}" alt="" class="w-max"></a>
                <span class="text-orange-400 font-bold my-2 block">${result.title}</span>
                <p class="">${result.desc}</p>
            </div>
          `;
	},
};

export default detailNewPage;
