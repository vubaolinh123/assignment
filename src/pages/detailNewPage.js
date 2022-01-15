import data from "../data";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newList";

const detailNewPage = {
	print(id) {
		const result = data.find((post) => post.id === id);
		return /*html*/ `
            <header id="header">${Header.printf()}</header>
			<div class="my-3" id="banner">${Banner.printf()}</div>
            <div class="border border-black p-4">
                <a href="news/${result.id}"><img src="${result.img}" alt="" class="w-max"></a>
                <span class="text-orange-400 font-bold my-2 block">${result.title}</span>
                <p class="">${result.desc}</p>
            </div>
            <footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
          `;
	},
};

export default detailNewPage;
