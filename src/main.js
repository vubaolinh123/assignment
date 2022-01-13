import Navigo from "navigo";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DashBoard from "./pages/admin/dashboard";
import detailNewPage from "./pages/detailNewPage";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content, element) => {
	document.querySelector("#header").innerHTML = Header.printf();
	document.querySelector("#banner").innerHTML = Banner.printf();
	document.querySelector(element).innerHTML = content;
	document.querySelector("#footer").innerHTML = Footer.printf();
};

router.on({
	"/": () => {
		render(HomePage.print(), "#app");
	},

	"/about": () => {
		render(AboutPage.print(), "#app");
	},

	"/signup": () => {
		render(SignUp.print(), "#app");
	},

	"/signin": () => {
		render(SignIn.print(), "#app");
	},

	"/news/:id": (value) => {
		console.log(value);
		render(detailNewPage.print(value.data.id), "#app");
	},

	"/admin/dashboard": () => {
		render(DashBoard.print(), "#app");
	},
});

router.notFound(() => {
	console.log("Not Found Page");
});
router.resolve();
