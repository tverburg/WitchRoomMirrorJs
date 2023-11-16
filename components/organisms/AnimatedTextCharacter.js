import { useEffect } from "react";
import { motion } from "framer-motion";


const AnimatedTextCharacter = ({ text }) => {

    // splitting text into words
    const words = text.split(" ");

    // Variants for Container
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    // Variants for each letter
    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };



    return (
        <motion.div
            style={{
                //overflow: "hidden",
                //display: "flex",
                fontSize: "10rem",
                textAlign: "center",
            }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word) => {
                const letters = Array.from(word);
                letters.push(" ");

                return (
                    <span
                  
                        style={{
                            display: "inline-block",
                        }}
                    >
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={child}
                                style={{
                                    display: "inline-block",
                                }}>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </span>
                )
            })}
        </motion.div>
    );
};

export default AnimatedTextCharacter;
