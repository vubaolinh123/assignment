import instance from "./config"

export const getAll = (param) => {
    const url = `/infoOrder?${param || ""}`;
    return instance.get(url)
}



export const get = (id) => {
    const url = `/infoOrder/${id}`;
    return instance.get(url)
}

export const add = (infoOrder) => {
    const url = `/infoOrder`;
    return instance.post(url, infoOrder)
}

export const remove = (id) => {
    const url = `/infoOrder/${id}`;
    return instance.delete(url);
}
export const update = (category) => {
    const url = `/infoOrder/${category.id}`;
    return instance.put(url, category);
}

export const Relationships = (id) => {
    const url = `/infoOrder/${id}?_embed=detailOrder`;
    return instance.get(url);
}