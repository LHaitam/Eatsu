import React from "react";
import MenuOption from "./MenuOption";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";

export default function MenuSection() {
    const languageContext = useContext(LanguageContext);
    return (
        <section className="main-section" id="menu-section">
            <div className="cover-fadeOpacity"></div>
            <Image src="/assets/menu-background.webp" objectFit="cover" layout="fill" priority />
            <ScrollAnimation className="animationWrapper" animateIn="animate__fadeIn">
                <section id="menu-options-container">
                    <MenuOption /* name="ENTREES" */ source="/assets/menu-options/entrees.webp" />
                    <MenuOption /* name="ENTREES CHAUDES" */ source="/assets/menu-options/entrees-chaudes.webp" />
                    <MenuOption /* name="JAPAN PERU" */ source="/assets/menu-options/japan-peru.webp" />
                    <MenuOption /* name="SUPO" */ source="/assets/menu-options/supo.webp" />
                    <MenuOption /* name="YAKITORI" */ source="/assets/menu-options/yakitori.webp" />
                    <MenuOption /* name="NIGIRI" */ source="/assets/menu-options/nigiri.webp" />
                    <MenuOption /* name="SPRING ROLLS" */ source="/assets/menu-options/spring-rolls.webp" />
                    <MenuOption /* name="CRISPY ROLLS" */ source="/assets/menu-options/crispi-rolls.webp" />
                    <MenuOption /* name="MAKI" */ source="/assets/menu-options/maki.webp" />
                    <MenuOption /* name="KABURIMAKI" */ source="/assets/menu-options/kaburimaki.webp" />
                    <MenuOption /* name="JAPAN ROLLS" */ source="/assets/menu-options/japan-rolls.webp" />
                    <MenuOption /* name="EATSU ROLLS" */ source="/assets/menu-options/eatsu-rolls.webp" />
                    <MenuOption /* name="YAKISOBA" */ source="/assets/menu-options/yakisoba.webp" />
                    <MenuOption /* name="PLATS CHAUDS" */ source="/assets/menu-options/plats-chauds.webp" />
                    <MenuOption /* name="GRILL & CHILL" */ source="/assets/menu-options/grill-chill.webp" />
                    <MenuOption /* name="DESSERT" */ source="/assets/menu-options/dessert.webp" />
                </section>
            </ScrollAnimation>
            <section id="menu-description-container">
                <h1 id="menu-title">{languageContext.languageData["menu-title"]}</h1>
                <p id="menu-description">{languageContext.languageData["menu-description"]}</p>
                <button className="big-button">{languageContext.languageData["buttons"]["download-menu"]}</button>
            </section>
        </section>
    );
}
