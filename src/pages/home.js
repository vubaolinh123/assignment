import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newList";

const HomePage = {
	print() {
		return /*html*/ ` 
            <div class="max-w-5xl m-auto ">
                    <header>
                        ${Header.printf()}
                    </header>
                <div class="banner my-3">
                        ${Banner.printf()}
                </div>
                <main class="my-2">
                        ${NewList.printf()}
                </main>
                <footer class="bg-[#272f54] text-center ">
                        ${Footer.printf()}
                </footer>
            </div>
        `;
	},
};

export default HomePage;
