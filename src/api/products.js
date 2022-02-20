import instance from "./config"

export const getAll = (param) => {
    const url = `/products?${param}`;
    return instance.get(url)
}

export const Search = (keyword) => {
    const url = `/products?title_like=${keyword}`;
    return instance.get(url)
}

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url)
}

export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product)
}

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}

export const getPage = (page) => {
    const url = `/products?_page=${page}&_limit=6&_sort=id&_order=desc`;
    return instance.get(url);
}

