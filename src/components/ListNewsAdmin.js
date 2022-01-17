import data from "../data";

const numberFormat = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});



const ListNewsAdmin = {
	printf() {
		return /*html*/ `
            <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STT
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Desc
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price Discount
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                 <a href="/admin/news/add"class="text-green-600 hover:text-green-900">ADD</a>
						</td>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          ${data
				.map((post, index) => {
          if(post.status == 1){
								post.status = "Còn Hàng"
							}else{
								post.status = "Hết Hàng"
							}
					return /*html*/ `
              <tr>
						      <td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
						      <td class="px-6 py-4 whitespace-nowrap">${post.title}</td>
						      <td class="px-6 py-4 whitespace-nowrap"><img src="${post.img}" alt="" width="100"/></td>
						      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span class="">${post.desc.substr(0, 30)}....</span></td>
                  <td class="px-6 py-4 whitespace-nowrap">${numberFormat.format(post.fakePrice)}</td>
                  <td class="px-6 py-4 whitespace-nowrap">${post.discount}%</td>
                  <td class="px-6 py-4 whitespace-nowrap">${numberFormat.format(post.price)}</td>
                  <td class="px-6 py-4 whitespace-nowrap">${post.status}</td>
						      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							        <a href="/admin/news/${post.id}/edit"class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      <a href="/admin/news/${post.id}/delete"class="text-red-600 hover:text-red-900">Delete</a>
						      </td>
					    </tr>
                    `;
				})
				.join("")}
            

            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        `;
	},
};

export default ListNewsAdmin;
