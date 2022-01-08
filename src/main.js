import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

const router = new Navigo("/");
const render = (content) => {
	document.getElementById("app").innerHTML = content.print();
};

router.on({
	"/": () => {
		render(HomePage);
	},

	"/about": () => {
		render(AboutPage);
	},

	"/lab1": () => {
		render();
	},
});

router.resolve();
