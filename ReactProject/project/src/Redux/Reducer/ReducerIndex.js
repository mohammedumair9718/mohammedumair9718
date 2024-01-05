


const cart = []

export const Handelreducer = (state = cart, action) => {
    

    const Product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === Product.id);
            if (exist) {
                return (state.map((x) => {
                    x.id === Product.id ? { ...x, qty: x.qty + 1 } : x
                }))
            }
            else{
                const Product =action.payload
                return[
                    ...state,
                    {
                        ...Product,
                        qty :1  
                    }
                ]
            }
            break;
            case "DELETEITEM":
            return state.filter((data)=>{data.id !==action.payload});
            break;

            default:
            return state
    
    }
    
}

