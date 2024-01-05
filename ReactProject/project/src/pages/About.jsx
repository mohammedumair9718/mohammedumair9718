
import style from "../CSS/About.module.css"
export const About = () => {
    return (
        <div className={style.aboutmain}>

            <div className={style.abouttext}>
                <h1>About Bollywood Style</h1>
                <p style={{ marginTop: "2rem" }}>
                    Welcome to Bollywood Style, your ultimate destination for all things glamorous, trendy, and inspired by the heart of Indian cinema. We are passionate about bringing you the magic and allure of Bollywood right to your doorstep
                </p>
                <ul >
                    <li>web Design</li>
                    <li>Photoshope</li>
                    <li>Coding</li>
                </ul>
            </div>

        </div>
    )


}