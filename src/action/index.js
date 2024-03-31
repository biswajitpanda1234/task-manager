export const create = (data)=>{
    return {
        type: "NEW",
        payload: data
    }
}
export const update = (data)=>{
    return {
        type : "UPDATE",
        payload: data
    }
}