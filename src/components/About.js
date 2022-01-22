import React from 'react';
import Common from './Common';
// import web from '/public/img/himayt.jpg'
const About = () => {
    const img = `https://source.unsplash.com/400x300?`
    return (
        <>
            <Common
                name='Welcome to About page'
                imgsrc={img}
                visit='/contact'
                btname="Contact Now"
            />
        </>
    )
};

export default About;
