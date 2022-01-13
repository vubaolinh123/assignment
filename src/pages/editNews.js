import AddNewsAdmin from "../components/addNewsAdmin";
import EditNewsAdmin from "../components/editNewsAdmin";
import ListNewsAdmin from "../components/ListNewsAdmin";
import NavAdmin from "../components/navAdmin";

const EditNews = {
	printf(id) {
		return /*html*/ `
        <div class="min-h-full">
				${NavAdmin.printf()}
  				<header class="bg-white shadow">
    			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      			<h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
    	</div>
  	</header>
  <main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
            ${EditNewsAdmin.printf(id)}
      <!-- /End replace -->
    </div>
  </main>
</div>
        `;
	},
};

export default EditNews;
