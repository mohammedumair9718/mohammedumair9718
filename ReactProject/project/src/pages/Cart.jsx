import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody } from "react-bootstrap"
import { deleteCart } from "../Redux/Action/Index"

import stylecart from '../CSS/cart.module.css'

export const Cart = () => {
    const item = useSelector((state) => state.Handelreducer)
    const [qyt, setqty] = useState(1)
    // console.log(qyt);
    const [price, setprice] = useState([])


    const ondecrement = (item) => {
        if (qyt > 1) {
            setqty(qyt - 1)
            setprice(item.price * (qyt - 1));
            // setprice(item.price -= item.price)
        }
    }

    const onincremnet = (item) => {
        setqty(qyt + 1)
        setprice(item.price * (qyt + 1));


        // setprice(item.price += item.price)

    }

    // const pricetotal = (item) => {
    //     if (qyt === 1) {
    //         setprice(item.price)

    //     } else {
    //         setprice(item += item)

    //     }
    // }


    const getvalue = (e) => {
        let x = e.target.value
        setprice(x * item.price);
        // setqty(x)
    }

    const dispatch = useDispatch();


    const Deleteitemcart = (item) => {
        if (item) {
            dispatch(deleteCart(item.id))

        } else {


        }
    }


    // console.log(item);
    return (
        <>

            <div style={{ backgroundColor: "lightgray", display: "flex", marginLeft: "20rem", width: "70%", justifyContent: "space-around", marginBottom: "50px" }}>
                <div><h3>Bollywood Style </h3></div>
                <div><h3> jelary</h3></div>

            </div>

            <div style={{ backgroundColor: "#f2f3f7", height: "100vh", }} key={item.id}>
                {item.map((item) => {

                    return (
                        <Card key={item.id} >

                            <CardBody className={stylecart.maincart} style={{ display: "flex", justifyContent: "center", marginLeft: "50px", marginTop: "20px", paddingLeft: "80px", backgroundColor: "white", width: "70%" }}>
                                <div>
                                    <img style={{ width: "30%", height: "80%", }} src={item.image} />
                                    <div >
                                        <Button onClick={() => ondecrement(item)}>-</Button>{" "}
                                        <input onChange={getvalue} style={{ height: "20px", width: "50px" }} type="number" value={qyt} placeholder="" />{"   "}
                                        <Button onClick={() => onincremnet(item)}>+</Button>{" "}

                                    </div>


                                </div>

                                <div style={{ marginRight: "50%" }}>

                                    <p>{item.title}</p>
                                    <p>$ {item.price}</p>
                                    <h3>Total<br /><span>$ {price}</span></h3>

                                </div>
                                {/* 
                                <div style={{ display: "" }}>
                                    <button  style={{ height: "30px", width: "100px" }} onClick={()=>Deleteitemcart(item)}>Remove</button>

                                </div> */}

                            </CardBody>

                        </Card>


                    )
                })}
            </div>


        </>
    )
}