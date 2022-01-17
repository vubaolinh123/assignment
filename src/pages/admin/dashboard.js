import ListNewsAdmin from "../../components/ListNewsAdmin";
import NavAdmin from "../../components/navAdmin";

const DashBoard = {
	print() {
		return /*html*/ `
        <div class="min-h-full">
				${NavAdmin.printf()}
  				<header class="bg-white shadow">
    			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      			<h1 class="text-3xl font-bold text-gray-900">Trang Chủ Admin</h1>
    	</div>
  	</header>
  <main>
		<div class="max-w-7xl mx-auto py-6 ">
      <!-- Replace with your content -->
		${ListNewsAdmin.printf()}
      <!-- /End replace -->
    </div>
  </main>
</div>
        `;
	},
};

export default DashBoard;
