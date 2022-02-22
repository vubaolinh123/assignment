import instance from "./config"

export const getAll = (param) => {
    const url = `/detailOrder?${param || ""}`;
    return instance.get(url)
}

export const get = (id) => {
    const url = `/detailOrder/${id}`;
    return instance.get(url)
}

export const add = (detailOrder) => {
    const url = `/detailOrder`;
    return instance.post(url, detailOrder)
}

export const remove = (id) => {
    const url = `/detailOrder/${id}`;
    return instance.delete(url);
}
export const update = (detailOrder) => {
    const url = `/detailOrder/${detailOrder.id}`;
    return instance.put(url, detailOrder);
}

export const Relationships = (id) => {
    const url = `/detailOrder/${id}?_embed=products`;
    return instance.get(url);
}