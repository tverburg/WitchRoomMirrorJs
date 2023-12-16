import { useContext, useEffect, useState } from 'react';
import AnimatedTextCharacter from '../components/organisms/AnimatedTextCharacter';
import { MirrorContext } from '../contexts/MirrorContext';
import { MqttService } from '../demo/service/MqttService';
import AudioManager from '../components/organisms/AudioManager';
import Hourglass from '../components/organisms/hourglass/Hourglass';
//import localFont from 'next/font/local';

//const myFont = localFont({ src: '../fonts/TheCrowGrunge.otf' })

const Dashboard = () => {
    const context = useContext(MirrorContext);
    const { messages } = useContext(MirrorContext);
    const [message, setMessage] = useState(null);

    const showTime = true;

    useEffect(() => {
        const mqttService = new MqttService(context);
    }, [])

    useEffect(() => {
        setMessage(null);
        const timer = setTimeout(() => {
            setMessage(messages[messages.length - 1]);
        }, 100);
        return () => clearTimeout(timer);

    }, [messages])


    /*useEffect(() => {
        setMessage(null);
        const timer = setTimeout(() => {
            setMessage("Welkom dappere dwazen");
        }, 1000);
        return () => clearTimeout(timer);

    }, [])*/

    return (
        <div className="grid">
            <div className="col-12">
                <div
                    className="container h-screen mx-auto flex flex-col"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {
                        message && (
                            <AnimatedTextCharacter text={message} />
                        )
                    }
                    {/*{*/}
                    {/*    showTime && (*/}
                    {/*        <Hourglass />*/}
                    {/*    )*/}
                    {/*}*/}


                    <div
                        style={{
                            //overflow: "hidden",
                            //display: "flex",
                            textAlign: "center",
                            fontSize: "10rem"
                        }}
                        initial="hidden"
                        animate="visible"
                    >
                        {/*{words.map((word) => {*/}
                        {/*    const letters = Array.from(word);*/}
                        {/*    letters.push(" ");*/}

                        {/*    return (*/}
                        {/*        <span*/}
                        {/*            style={{*/}
                        {/*                display: "inline-block",*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            {letters.map((letter, index) => (*/}
                        {/*                <span*/}
                        {/*                    key={index}*/}
                        {/*                    style={{*/}
                        {/*                        display: "inline-block",*/}
                        {/*                    }}>*/}
                        {/*                    {letter === " " ? "\u00A0" : letter}*/}
                        {/*                </span>*/}
                        {/*            ))}*/}
                        {/*        </span>*/}
                        {/*    )*/}
                        {/*})}*/}
                    </div>
                </div>
            </div>
                        <AudioManager />
        </div>
    );
};

export default Dashboard;
