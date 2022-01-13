import data from "../data";

const EditNewsAdmin = {
	printf(id) {
		const result = data.find((post) => post.id === id);
		return /*html*/ `
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="p-5 shadow overflow-hidden  border-gray-200 sm:rounded-lg " >
                <form action="">
                      <div>Name: <input type="text" value="${result.title} " class="border"/></div>
                      <div class="py-2"><img src="${result.img}" alt="" width="200" /></div>
                      <div>Desc: <input type="text" value="${result.desc}"  class="border"></div>
                      <button type="submit" class="bg-blue-500 text-white px-1 py-1 my-3" >UPDATE</button>
                </form>
      </div>
    </div>
  </div>
</div>
        `;
	},
};

export default EditNewsAdmin;
