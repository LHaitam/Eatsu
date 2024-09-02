import React, { useEffect } from "react";
import MenuOption from "./MenuOption";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";
import Head from "next/head";

export default function MenuSection() {
    const languageContext = useContext(LanguageContext);

    return (
        <>
            <Head>
                {/* Load the external script */}
                <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async></script>
            </Head>
            <section className="main-section" id="menu-section">
                <div className="cover-fadeOpacity"></div>
                <Image src="/assets/menu-background.webp" objectFit="cover" layout="fill" priority />
                <ScrollAnimation className="animationWrapper" animateIn="animate__fadeIn">
                    <section id="menu-options-container">
                        <MenuOption source="/assets/menu-options/entrees.webp" />
                        <MenuOption source="/assets/menu-options/entrees-chaudes.webp" />
                        <MenuOption source="/assets/menu-options/japan-peru.webp" />
                        <MenuOption source="/assets/menu-options/supo.webp" />
                        <MenuOption source="/assets/menu-options/yakitori.webp" />
                        <MenuOption source="/assets/menu-options/nigiri.webp" />
                        <MenuOption source="/assets/menu-options/spring-rolls.webp" />
                        <MenuOption source="/assets/menu-options/crispi-rolls.webp" />
                        <MenuOption source="/assets/menu-options/maki.webp" />
                        <MenuOption source="/assets/menu-options/kaburimaki.webp" />
                        <MenuOption source="/assets/menu-options/japan-rolls.webp" />
                        <MenuOption source="/assets/menu-options/eatsu-rolls.webp" />
                        <MenuOption source="/assets/menu-options/yakisoba.webp" />
                        <MenuOption source="/assets/menu-options/plats-chauds.webp" />
                        <MenuOption source="/assets/menu-options/grill-chill.webp" />
                        <MenuOption source="/assets/menu-options/dessert.webp" />
                    </section>
                </ScrollAnimation>
                <section id="menu-description-container">
                    <h1 id="menu-title">{languageContext.languageData["menu-title"]}</h1>
                    <p id="menu-description">{languageContext.languageData["menu-description"]}</p>
                    <div className="big-button-container">
                        <span 
                            className="glf-button " 
                            data-glf-cuid="2add02bc-bad3-480d-ac10-1d8018f02e91" 
                            data-glf-ruid="89b6b4b2-274d-4b1f-97e3-f54299d02f24"
                            style={{
                                fontSize: '1.1em',
                                color: 'white',
                                fontFamily: 'Courgette',
                                backgroundColor: '#d23681',
                                borderRadius: '2em',
                                marginTop: '5em',
                                border: 'none',
                                boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            {languageContext.languageData["buttons"]["download-menu"]}
                        </span>
                    </div>
                </section>
            </section>
        </>
    );
}
