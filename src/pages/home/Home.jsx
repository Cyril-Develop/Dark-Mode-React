import "./home.css";
import Image from "../../images/image.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Home() {

    const { darkMode, toggle } = useContext(DarkModeContext);

    return (
        <div className="home">
            <div>
                <h1>
                    Dark Mode Switch!
                    <span onClick={toggle}>{darkMode ? "☀️" : "🌙"}</span>
                </h1>
                <img src={Image} alt="" />
            </div>
        </div>
    );
}
