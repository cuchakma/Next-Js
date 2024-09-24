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
                <TypeAnimation wrapper="p" className="bio-name" sequence={[
                    "Hello, I'm Cupid Chakma",
                    500,
                    (data) => {
                        if (data != null) {
                            data.className = 'bio-name';
                        }
                        setFirstSequence(true);
                    }
                ]} cursor={true} />
                {firstSquence && <TypeAnimation wrapper="h2" className="bio-designation-group-1" sequence={[
                    'Wordpress',
                    500,
                    (data) => {
                        if (data != null) {
                            data.className = 'bio-designation-group-1';
                        }
                        setSecondSequence(true);
                    }
                ]} cursor={true} />}
                {secondSequence && <TypeAnimation wrapper="h2" className="bio-designation-group-2" sequence={[
                    'Engineer',
                    500,
                    (data) => {
                        if (data != null) {
                            data.className = 'bio-designation-group-2';
                        }
                        setThirdSequence(true);
                    }
                ]} cursor={true} />}
                {thirdSequence && <TypeAnimation wrapper="p" className="bio-country" sequence={[
                    'Based In Dhaka, Bangladesh',
                    500,
                    (data) => {
                        if (data != null) {
                            data.className = 'bio-country';
                        }
                        setFourthSequence(true);
                    }
                ]} cursor={true} />}
                {fourthSequence && <>
                        <div className="resume-border"></div>
                        <TypeAnimation wrapper="p" className="resume-content" sequence={[
                            'Resume',
                            500,
                            (data) => {
                                if (data != null) {
                                    data.className = 'resume-content';
                                }
                            }
                        ]}/>
                    </>
                }
            </div>
            <div className="section-group-2">
                <Image src={profilePic} alt="profile-picture" />
            </div>
        </section>
    </>
}

export default Content;