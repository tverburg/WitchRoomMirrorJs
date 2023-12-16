import React, { useState } from 'react';
import { merge, set } from 'lodash';

export const MirrorContext = React.createContext();


export const MirrorProvider = (props) => {
    console.log("MirrorProvider");
    const [messages, setMessages] = useState([]);
    const [audioMessages, setAudioMessages] = useState([]);
    const [mqttConnected, setMqttConnected] = useState(false);
    const [targetDate, setTargetDate] = useState();
    const [showTimer, setShowTimer] = useState(true);

    const addReceivedMessage = (message, topic) => {
        console.log("addReceivedMessage");
        console.log(message, topic);
        if (topic.startsWith('audio')) {
            console.log("Received Audio Message");
            console.log(topic, message);
            const [prefix, action, type] = topic.split("/"); // topics have the "audio/[play/stop]/[sound id]" format
            const m = {
                payload: {
                    type,
                    action
                }
            };
            console.log(m)
            const msgs = [...audioMessages];
            msgs.push(m);
            console.log(msgs);
            setAudioMessages(msgs);
        } else if (topic.startsWith('game')) {
            console.log("Received Game Message");
            console.log(topic, message);
            const [prefix, action, type] = topic.split("/"); // topics have the "game/[start/stop]" format

            switch(action) {
                case  'start': {
                    const gameState = {...message};
                    if(gameState.targetDate) {
                        setTargetDate(gameState.targetDate);
                    }
                }
                break;
                case  'stop': {

                }
                break;
                case  'update': {
                    const update = {...message};
                    if(update.type = 'showTime') {
                        setShowTimer(update.value)
                    }
                }
                break;
            }
        } else {
            console.log("Received Message");
            const m = [...messages];
            m.push(message.msg);
            console.log(m);
            setMessages(m);
        }
    };

    const value = {
        messages,
        setMessages,
        addReceivedMessage,
        mqttConnected,
        setMqttConnected,
        audioMessages,
        targetDate,
        showTimer,
    };

    return <MirrorContext.Provider value={value}>{props.children}</MirrorContext.Provider>;
};
