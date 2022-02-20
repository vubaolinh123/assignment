import NavAdmin from "../../../components/navAdmin";
import { add } from "../../../api/category";
import axios from "axios";
import $ from 'jquery';
import validate from 'jquery-validation';


const AddCategory = {
	print() {
		return /*html*/ `
        <div class="min-h-full">
				${NavAdmin.printf()}
  				<header class="bg-white shadow">
    			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      			<h1 class="text-3xl font-bold text-gray-900">Thêm Mới Danh Mục</h1>
    	</div>
  	</header>
  <main>
		<div class="max-w-7xl mx-auto py-6 ">
      <!-- Replace with your content -->
		<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<form action=""  id="form-add-post">
						<div class="shadow overflow-hidden sm:rounded-md">
							<div class="px-4 py-5 bg-white sm:p-6">
								<div class="grid grid-cols-6 gap-6">

									<div class="col-span-6 sm:col-span-3">
										<label for="category-name" class="block text-sm font-medium text-gray-700">Tên sản Danh Mục</label>
										<input type="text" name="category-name" id="category-name" placeholder="Nhập tên danh mục"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>
	
								</div>
							</div>
							<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button 
									class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Thêm Mới
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
      <!-- /End replace -->
    </div>
  </main>
</div>
        `;
	},
	afterRender() {
		const formAddCate = $("#form-add-post")
		var nameCategory = document.querySelector('#category-name')

		formAddCate.validate({
			rules: {
				"category-name": {
					required: true,
					minlength: 3
				},
			},
			messages: {
				"category-name": {
					required: "Không được để trống tên danh mục!",
					minlength: "Nhập ít nhất 3 ký tự"
				},
			},
			submitHandler: function () {
				async function addCate() {
					add({
						name: nameCategory.value,
					})
						.then(() => document.location.href = "/admin/category")
						.catch((error) => console.log(error))
				}
				addCate();
			}
		});

	}
};

export default AddCategory;
