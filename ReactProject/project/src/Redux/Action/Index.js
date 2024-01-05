

// for add item to cart
export const addCart = (item) => {
    return {
        type: "ADDITEM",
        payload: item
    }
}


export const deleteCart=(item)=>{
return{
    type:"DELETEITEM",
    payload:item
}
}