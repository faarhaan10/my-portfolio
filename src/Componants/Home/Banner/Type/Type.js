import React from 'react';
import Typewriter from "typewriter-effect";


const Type = () => {
    return (
        <Typewriter style={{ color: 'white' }}
            options={{
                strings: [
                    "Enthuistic Developer 😎",
                    "Full Stack Developer 💻",
                    "MERN Stack Dev 📱",
                    "Open Source Contributor 🌍",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
            }}
        />
    );
};

export default Type;