export const reRender = async (component, domElement, page) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.print();
    }
    if (component && page) {
        document.querySelector(domElement).innerHTML = await component.print(page);
    }
    if (component.afterRender) await component.afterRender();

} 