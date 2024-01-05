import style from "../CSS/img.module.css"
import { Product } from "../pages/Product"
import {Typewriter} from 'react-simple-typewriter'


export const Backgoundimg = () => {

    return (
        <>

            <div className={style.img}>
                <div className={style.imgtext}>
                    <h1>NEW SESSION ARRIVALS</h1>
                    <h2>CHECK OUT ALL TARENDS 
                           <  span style={{ color: 'red', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={[  ' MENS ', ' WOMENS ', ' JEWELERY ',  ' ELECTRONICS']}
                                onLoop={(loopCount) =>
                                    console.log(`Just completed loop ${loopCount}`)
                                }
                            />
                        </span>
                        {/* <span style={{color:"red"}}>MENS_</span> */}
                    </h2>

                </div>

            </div>

            <div>
                <Product />
            </div>
        </>
    )
}