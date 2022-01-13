import Navigo from "navigo";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DashBoard from "./pages/dashboard";
import detailNewPage from "./pages/detailNewPage";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
	document.querySelector("#app").innerHTML = content;
};

router.on({
	"/": () => {
		render(HomePage.print());
	},

	"/about": () => {
		render(AboutPage.print());
	},

	"/signup": () => {
		render(SignUp.print());
	},

	"/signin": () => {
		render(SignIn.print());
	},

	"/news/:id": (value) => {
		console.log(value);
		render(detailNewPage.print(value.data.id));
	},

	"/admin/dashboard": () => {
		render(DashBoard.print());
	},
});

router.notFound(() => {
	console.log("Not Found Page");
});
router.resolve();
