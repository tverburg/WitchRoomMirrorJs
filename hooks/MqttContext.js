//import React, { useState, useEffect } from 'react';
//import useMqtt from '../hooks/useMqtt';
//import { merge, set } from 'lodash';
//import isJsonString from '../pages/utilities/IsJsonString';

//var mqtt = require("mqtt");
//var options = {
//    protocol: "websockets",
//    //username: "xxxxxxxxx",
//    //password: "xxxxxxxx",
//    keepalive: 20,
//    // clientId uniquely identifies client
//    // choose any string you wish
//    clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
//};

// var client = mqtt.connect("ws://localhost:8883", options);
//    client.on("connect", () => {
//        console.log("mqtt connected");
//        client.subscribe(`witchroom/#`);
//        client.publish(`controller/status`, `online`);
//        //setConnectionStatus(true);
//    });

//    client.on("offline", () => {
//        console.log("mqtt offline");
//        //setConnectionStatus(false);
//    });


//export const MqttContext = React.createContext();

//export const MqttProvider = (props) => {
//    console.log("MqttProvider");
//    const [messages, setMessages] = useState();
//    const [mqttConfig, setMqttConfig] = useState({
//        nameSpace: 'witchroom',
//    });



//    client.on("message", (topic, payload) => {
//        //console.log(topic, payload);
//        console.log(topic);
//        //const topicArr = topic.split("/");
//        //const DID = topicArr[1];
//        //console.log({ topicArr });
//        //console.log({ DID });

//        const payloadString = payload.toString();
//        //console.log(payloadString);
//        if (isJsonString(payload)) {
//            const pl = JSON.parse(payloadString);
//            console.log(pl);
//            //setMessages(payload);
//            const relativetopic = topic.substr(topic.indexOf("/") + 1);
//            console.log(relativetopic);
//            addReceivedMessage(pl, relativetopic);
//        } else {
//            //just log it for now
//            console.warn("A message was received in a non-json format:")
//            console.warn(payloadString);
//        }

//    });

//    const addReceivedMessage = (message, topic) => {
//        const topicToPath = topic.replace(/\//g, '.');
//        const data = set({}, topicToPath, message);
//        console.log(data);
//        const m = merge(messages, data);
//        console.log(m);
//        setMessages({ ...m});

//        //setMessages({ a: 2, b: 3 })
//    };

//    const value = {
//        mqttConfig,
//        messages,
//        setMessages,
//        addReceivedMessage
//    };

//    return <MqttContext.Provider value={value}>{props.children}</MqttContext.Provider>;
//};
