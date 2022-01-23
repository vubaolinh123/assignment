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

const render = async (content, id) => {
	document.querySelector("#app").innerHTML = await content.print(id);
	if(content.afterRender()) content.afterRender(id);
};

router.on({
	"/": () => {
		render(HomePage);
	},

	"/contact": () => {
		render(contactPage);
	},

	"/signup": () => {
		render(SignUp);
	},

	"/signin": () => {
		render(SignIn);
	},

	"/products/:id": (value) => {
		console.log(value.data.id);
		render(detailProduct, value.data.id);
	},

	"/admin/dashboard": () => {
		render(DashBoard);
	},

	"/admin/news/add": () => {
		render(addNews);
	},

	"/admin/news/:id/edit": (value) => {
		var id = value.data.id;
		render(EditNews, id);
	},

	"/cart": () => {
		render(CartPage);
	},
	"/checkout": () => {
		render(CheckOut);
	},
});

router.notFound(() => {
	console.log("Not Found Page");
});
router.resolve();
