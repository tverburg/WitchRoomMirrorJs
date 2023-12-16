"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 1285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ MirrorContext),
/* harmony export */   "f": () => (/* binding */ MirrorProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



const MirrorContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const MirrorProvider = (props)=>{
    console.log("MirrorProvider");
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [audioMessages, setAudioMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [mqttConnected, setMqttConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [targetDate, setTargetDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [showTimer, setShowTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const addReceivedMessage = (message, topic)=>{
        console.log("addReceivedMessage");
        console.log(message, topic);
        if (topic.startsWith("audio")) {
            console.log("Received Audio Message");
            console.log(topic, message);
            const [prefix, action, type] = topic.split("/"); // topics have the "audio/[play/stop]/[sound id]" format
            const m = {
                payload: {
                    type,
                    action
                }
            };
            console.log(m);
            const msgs = [
                ...audioMessages
            ];
            msgs.push(m);
            console.log(msgs);
            setAudioMessages(msgs);
        } else if (topic.startsWith("game")) {
            console.log("Received Game Message");
            console.log(topic, message);
            const [prefix, action, type] = topic.split("/"); // topics have the "game/[start/stop]" format
            switch(action){
                case "start":
                    {
                        const gameState = {
                            ...message
                        };
                        if (gameState.targetDate) {
                            setTargetDate(gameState.targetDate);
                        }
                    }
                    break;
                case "stop":
                    {}
                    break;
                case "update":
                    {
                        const update = {
                            ...message
                        };
                        if (update.type = "showTime") {
                            setShowTimer(update.value);
                        }
                    }
                    break;
            }
        } else {
            console.log("Received Message");
            const m = [
                ...messages
            ];
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
        showTimer
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MirrorContext.Provider, {
        value: value,
        children: props.children
    });
};


/***/ })

};
;