import Head from "next/head";
import Home from "./home.js";

export default function Main() {
    return (
        <>
            <Head>
                <title>Eatsu</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="author" content="Michał Biernacki"></meta>
                <meta name="keywords" content="sushi, website, proposition"></meta>
                <meta name="description" content="Sushi website proposition made by Aquila TS"></meta>
            </Head>
            <Home></Home>
        </>
    );
}
