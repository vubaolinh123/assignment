import Navigo from "navigo";
import contactPage from "./pages/contact";
import DashBoard from "./pages/admin/dashboard";
import detailProduct from "./pages/detailProduct";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import addNews from "./pages/admin/news/addNews";
import EditNews from "./pages/admin/news/editNews";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
	document.querySelector("#app").innerHTML = content;
};

router.on({
	"/": () => {
		render(HomePage.print());
	},

	"/contact": () => {
		render(contactPage.print());
	},

	"/signup": () => {
		render(SignUp.print());
	},

	"/signin": () => {
		render(SignIn.print());
	},

	"/news/:id": (value) => {
		console.log(value.data.id);
		render(detailProduct.print(value.data.id));
	},

	"/admin/dashboard": () => {
		render(DashBoard.print());
	},

	"/admin/news/add": () => {
		render(addNews.printf());
	},

	"/admin/news/:id/edit": (value) => {
		var id = value.data.id;
		render(EditNews.printf(id));
	},

	"/cart": () => {
		render(CartPage.printf());
	},
	"/checkout": () => {
		render(CheckOut.printf());
	},
});

router.notFound(() => {
	console.log("Not Found Page");
});
router.resolve();
