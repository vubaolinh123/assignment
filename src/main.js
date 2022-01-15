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
import addNews from "./pages/admin/news/addNews";
import EditNews from "./pages/admin/news/editNews";

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

	"admin/news/add": () => {
		render(addNews.printf());
	},

	"/admin/news/:id/edit": (value) => {
		var id = value.data.id;
		render(EditNews.printf(id));
	},
});

router.notFound(() => {
	console.log("Not Found Page");
});
router.resolve();
