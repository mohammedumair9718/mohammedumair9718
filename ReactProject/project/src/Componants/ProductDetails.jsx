
import { Button, Card } from "react-bootstrap"
import styleProduct from "../CSS/ProductDetails.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {useDispatch} from "react-redux";
import {addCart} from "../Redux/Action/Index";

export const ProductsDetails = () => {
    const [item, setitem] = useState([])
    // console.log(item);
    const { id } = useParams()

    const dispatch=useDispatch()

const addProduct=(item)=>{
    dispatch(addCart(item))
    // console.log(item.id);
    
}

    
    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                // console.log(res.data);
                setitem(res.data)

            })
            .catch((error) => {
                alert(error)
            })

    }, [])


    return (
        <>

            <div key={item.id} className={styleProduct.cardcontainer}>

                <div className="col-md-5">

                    <img src={item.image} style={{ height: "50%", marginLeft: "70px" }} />

                </div>

                <div className="col-md-4">
                    <h4 className="text-uppercase text-black-50">
                        {item.category}
                    </h4>
                    <h1 className="display-5"> {item.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {item.rating && item.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my4">
                        $ {item.price}
                    </h3>

                    <p className="lead">
                        {item.description}
                    </p>
                    <button className="btn btn-outline-dark px-4 py-2 me-2 bg-dark text-white" onClick={() => addProduct(item)}> Add to Cart</button>
                    

                    {/* <Link to={/cart/${item.id}} className="btn btn-outline-dark px-4 py-2 "> Go To Cart</Link> */}
                </div>

            </div >

        </>
    )
}