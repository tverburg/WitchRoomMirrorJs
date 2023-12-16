import { MirrorContext } from '../../contexts/MirrorContext';
import isJsonString from '../../pages/utilities/IsJsonString';

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


var mqtt = require("mqtt");
var options = {
    protocol: "websockets",
    username: "shape",
    password: "escape",
    keepalive: 20,
    // clientId uniquely identifies client
    // choose any string you wish
    clientId: "mirrorApp",
};

export class MqttService {
    constructor(context) {
        // console.log("MqttService construct");
        // console.log(context);

        this.client = mqtt.connect("ws://localhost:8883", options);
        this.mirrorContext = context;

        this.client.on("connect", () => {
            this.onConnect();
        });

        this.client.on("offline", () => {
            this.onOffline();
        });

        this.client.on("message", (topic, payload) => {
            console.log("onMessageReceived");
            console.log(topic, payload);
            this.onMessageReceived(topic, payload);
        });
    }

    onConnect = () => {
        console.log("mqtt connected");
        this.client.subscribe(`witchroom/mirror/#`);
        this.client.subscribe(`witchroom/audio/#`);

        if (this.mirrorContext) {
            this.mirrorContext.setMqttConnected(true);
        }
    }

    onOffline = () => {
        console.log("mqtt offline");
        if (this.mirrorContext) {
            this.mirrorContext.setMqttConnected(false);
        }
    }

    handlePayload = (payload) => {
        const payloadString = payload.toString();
        let pl;
        console.log(payloadString);
        if (isJsonString(payloadString)) {
            pl = JSON.parse(payloadString);
        } else {
            //just log it for now
            console.warn("A message was received in a non-json format:")
            console.warn(payloadString);
            pl = { msg: payloadString }
        }
        console.log(pl);
        return pl;
    }

    onMessageReceived = (topic, payload) => {
        console.log(topic, payload);

        //setMessages(payload);
        const relativetopic = topic.substr(topic.indexOf("/") + 1);
        console.log(relativetopic);

        // format the payload if there is one
        const pl = this.handlePayload(payload);
        this.mirrorContext.addReceivedMessage(pl, relativetopic);
    }

    componentDidMount() {
        console.log("MqttService componentDidMount");
    }
}
