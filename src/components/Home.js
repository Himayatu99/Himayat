import React from 'react';
import Common from './Common';
// import web from '/public/img/himayt.jpg'
const Home = () => {
    const img = `https://source.unsplash.com/400x300?`
    return (
        <>
            <Common
                name='Grow your business with'
                imgsrc={img}
                visit='/service'
                btname="Get Started"
            />

        </>
    )
};

export default Home;
