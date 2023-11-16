
const useMqtt = () => {
    var mqtt = require("mqtt");
    var options = {
        protocol: "websockets",
        //username: "xxxxxxxxx",
        //password: "xxxxxxxx",
        keepalive: 20,
        // clientId uniquely identifies client
        // choose any string you wish
        clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
    };
    var client = mqtt.connect("ws://localhost:8883", options);


    console.log(mqtt);
    console.log(client);

    client.on("connect", () => {
        console.log("mqtt connected");
        client.subscribe(`#`);
        client.publish(`deivce/user/status`, `online`);
        //setConnectionStatus(true);
    });
    client.on("message", (topic, payload) => {
        console.log(topic, payload);

        const topicArr = topic.split("/");
        const DID = topicArr[1];
        console.log({ topicArr });
        console.log({ DID });
        console.log(payload.toString());
        //setMessages(payload);
    });
    client.on("offline", () => {
        console.log("mqtt offline");
        //setConnectionStatus(false);
    });

    return client;
}

export default useMqtt;
