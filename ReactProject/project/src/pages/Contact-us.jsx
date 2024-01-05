import contact from "../CSS/contact.module.css"

export const Contact=()=>{
return(
    <div className={contact.bgimg}>
        <div className={contact.contactustext}>
            <h1>Contact Us</h1>
            <p style={{fontSize:"20px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam veritatis recusandae laboriosam labore. <br /> Qui possimus aut nostrum unde quibusdam maiores?</p>
        </div>
        <div className={contact.maincon}>
            <div className={contact.Addrestext}>
                <h1>Addres</h1>
                <p>4671 suger camp Road <br /> Owatanna,Minnesota, <br /> 55060</p>
                <h1>Phone</h1>
                <p>507-457-60945-6094</p>
                <h1>Email</h1>
                <p>Wrub7d8i0e@temporay-mail.net</p>
            </div>
            <div className={contact.sendmessage}>
                <p>Send Message</p>
                <input type="text" placeholder="Enter your name" />
                <br />  
                <input type="text"  placeholder="Email"/>
                <br />
                <input type="text" placeholder="Type your message..."/>
                <br />
                <button>Send</button>
            </div>
        </div>
    </div>
)
}