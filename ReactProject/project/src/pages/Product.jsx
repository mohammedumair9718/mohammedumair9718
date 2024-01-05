import style from "../CSS/Product.module.css"

import { useEffect, useState } from "react"

import axios from "axios"
import { Button, Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

export const Product = () => {
    const [data, setdata] = useState([])
    const [filterdata, setfilterdata] = useState(data)
    // const [compnantmounted, setCompnantMounted] = useState(true); // Use state hook

    // const  getproduct=useNavigate()


    const navegate = useNavigate()

    const compnantmounted = true
    useEffect(() => {

        const getproduct=()=>{
            axios.get("https://fakestoreapi.com/products")
            .then((res) => {

                if (compnantmounted) {
                    setdata(res.data)
                    setfilterdata(res.data)
                }
                return ()=>{
                    // compnantmounted =false   
               }
            })   
        }
        getproduct();
    }, [])


    const onproducdetails = (id) => {
        navegate(`/Product-details/${id}`)

    }


    const filterdataonclick = (cat) => {

        const updatelist = data.filter((x) => x.category === cat)
        setfilterdata(updatelist)
    }



    return (
        <>

            <div className={style.btnAllcat}>

                <Button onClick={() => setfilterdata(data)}>All</Button>
                <Button onClick={() => filterdataonclick("men's clothing")}>Means Clothing</Button>
                <Button onClick={() => filterdataonclick("women's clothing")}>women Clothing</Button>
                <Button onClick={() => filterdataonclick("jewelery")}>jewelery</Button>
                <Button onClick={() => filterdataonclick("electronics")}>Electronics</Button>

            </div>


            <div className={style.cardcontainer}>
                {filterdata.map((data ,value) => {
                    // console.log(data);
                    const { id, title, image, price,} = data
                    return (
                        <div key={id} >
                            <Card style={{ width: "80%", height: "100%" }} >
                                <Card.Img style={{ height: "50%", width: "60%", margin: "0 auto", }} variant="top" src={image} />
                                <Card.Body >
                                    <Card.Title>{title.substring(0, 24)}</Card.Title>
                                    <Card.Text>$  {price} </Card.Text>

                                    <div className={style.btncards}>
                                        <Button  variant="primary">Add to Cart</Button>
                                        {/* <a href={id} target="__blank">{""} */}
                                        <Button onClick={() => onproducdetails(id)} variant="primary">By Now</Button>
                                        {/* </a> */}
                                        
                                    </div>

                                </Card.Body>
                            </Card>

                        </div>
                    )
                })}

            </div>


        </>
    )
}