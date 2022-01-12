import Navigo from "navigo";
import AboutPage from "./pages/about";
import detailNewPage from "./pages/detailNewPage";
import HomePage from "./pages/home";

const router = new Navigo("/", { linkSelector: "a" });
const render = (content) => {
	document.getElementById("app").innerHTML = content;
};

router.on({
	"/": () => {
		render(HomePage.print());
	},

	"/about": () => {
		render(AboutPage.print());
	},

	"/news/:id": (value) => {
		render(detailNewPage.print(value.data.id));
	},
});

router.notFound(() => {
	console.log("Not Found Page");
});
router.resolve();
