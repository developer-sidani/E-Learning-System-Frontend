import React from 'react';
import  Head from "next/Head";

const Home = () => {
    return (
        <div>
        <Head>
            <title>
                Hello World!
            </title>
        </Head>
        <h1 className="text-3xl font-bold underline text-fuchsia-50">
            Hello world!
        </h1>
        </div>
    );
};

export default Home;
