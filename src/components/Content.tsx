"use client";

import Image from "next/image";
import profilePic from '../../public/images/cupid-2.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

const Content = () => {
    const [firstSquence, setFirstSequence] = useState(false);
    const [secondSequence, setSecondSequence] = useState(false);
    const [thirdSequence, setThirdSequence] = useState(false);
    const [fourthSequence, setFourthSequence] = useState(false);

    return <>
        <section className="__portfolio-body-section">
            <div className="section-group-1">
                <p className="bio-name">{"Hello, I'm Cupid Chakma"}</p>
                <h2 className="bio-designation-group-1">Wordpress</h2>
                <h2 className="bio-designation-group-2">Engineer</h2>
                <p className="bio-country">Based In Dhaka, Bangladesh</p>
                <div className="resume-border"></div>
                <p className="resume-content">Resume</p>
            </div>
            <div className="section-group-2">
                <Image src={profilePic} alt="profile-picture" />
            </div>
        </section>
    </>
}

export default Content;