import React from "react";
import MenuOption from "./MenuOption";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";

export default function MenuSection() {
    const languageContext = useContext(LanguageContext);
    return (
        <section className="main-section" id="delivery-section">
            <div className="cover-fadeOpacity"></div>
            <Image src="/assets/delivery-background.webp" objectFit="cover" layout="fill" priority />
            <section id="menu-description-container">
                <h1 id="menu-title">{languageContext.languageData["traiteur-title"]}</h1>
                <p id="menu-description">{languageContext.languageData["traiteur-description"]}</p>
                <button className="big-button">{languageContext.languageData["buttons"]["show-pricing"]}</button>
            </section>
        </section>
    );
}
