import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Footer } from "./Footer";
import Image from "next/image";

export default function ContactSection() {
    const languageContext = useContext(LanguageContext);

    return (
        <section className="main-section" id="contact-section">
            <div className="cover-fadeOpacity-dark"></div>
            <Image src="/assets/contact-background.webp" objectFit="cover" layout="fill" priority />
            <section id="logo-section">
                <div id="contact-logo-container">
                    <img id="contact-logo" src="assets/logo.webp" />
                </div>
            </section>
            <section id="contact-informations-container">
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["call-us"]}</h1>
                    <h3>{languageContext.languageData["maarif"]}: 
                        <a 
                            href="tel:+212522399110" 
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            +212 522 399 110
                        </a>
                    </h3>
                    <h3>{languageContext.languageData["bouskoura"]}:  
                        <a 
                            href="tel:+2127727271212" 
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            +212 772 727 212
                        </a>
                    </h3>
                </div>
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["write-to-us"]}</h1>
                    <h3>contact@eatsu.ma</h3>
                </div>
                <div className="contact-element-container">
                    <h1>{languageContext.languageData["stay-on-top"]}</h1>
                    <div className="social-media-wrapper">
                        <img className="social-media-logo" src="/assets/facebook-logo.webp" alt="Facebook Logo" />
                        <img className="social-media-logo" src="/assets/instagram-logo.webp" alt="Instagram Logo" />
                        <img className="social-media-logo" src="/assets/tripadvisor-logo.webp" alt="Tripadvisor Logo" />
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
}
