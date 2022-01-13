import data from "../data";

const EditNewsAdmin = {
	printf(id) {
		const result = data.find((post) => post.id === id);
		return /*html*/ `
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="p-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg " >
                <div>Name: ${result.title}</div>
                <div><img src="${result.img}" alt="" /></div>
                <div>Desc: ${result.desc}</div>
      </div>
    </div>
  </div>
</div>
        `;
	},
};

export default EditNewsAdmin;
