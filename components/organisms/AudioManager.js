import useSound from 'use-sound'
import AudioPlayer from './AudioPlayer';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { MirrorContext } from '../../contexts/MirrorContext';

function AudioManager() {
    const { audioMessages } = useContext(MirrorContext);
    const [audioPlaying, setAudioPlaying] = useState({});
    const url = "http://localhost:3000";
    const [sounds] = useState({
        "bgm1": {
            "url": `${url}/bgm1.mp3`,
            options: {
                "volume": 0.7 ,
                html5: true,
                loop: true,
            },
        },
        "bgm2": {
            "url": `${url}/bgm2.mp3`,
            options: {
                "volume": 0.7 ,
                html5: true,
                loop: true,
            },
        },
        "bgm3": {
            "url": `${url}/bgm3.mp3`,
            options: {
                "volume": 0.7,
                html5: true,
                loop: true,
            },
        },
        "hint": {
            "url": `${url}/hint.mp3`,
            options: { "volume": 1 },
        },
        "thunder": {
            "url": `${url}/thunder.mp3`,
            options: { "volume": 1 },
        },
        "witch": {
            "url": `${url}/witch.mp3`,
            options: { "volume": 1 },
        },
        "rune": {
            "url": `${url}/rune.mp3`,
            options: { "volume": 1 },
        },
        "runeSuccess": {
            "url": `${url}/rune-success.mp3`,
            options: { "volume": 0.7 },
        },
        "alchemy": {
            "url": `${url}/alchemy.mp3`,
            options: { "volume": 1 },
        },
        "alchemySuccess": {
            "url": `${url}/alchemy-success.mp3`,
            options: { "volume": 1 },
        },
        "flower": {
            "url": `${url}/flower.mp3`,
            options: { "volume": 1 },
        },
        "finished": {
            "url": `${url}/finished.mp3`,
            options: { "volume": 1 },
        },
        "ghost": {
            "url": `${url}/ghost.mp3`,
            options: { "volume": 1 },
        },
        "children": {
            "url": `${url}/children.mp3`,
            options: { "volume": 1 },
        },
        "knockknock": {
            "url": `${url}/knockknock.mp3`,
            options: { "volume": 1 },
        }
    });

    useEffect(() => {
        const a = {};
        Object.entries(sounds).map(([soundId]) => {
            a[soundId] = 0;
        });
        setAudioPlaying(a);
    }, [sounds]);

    // update the states for the received messages
    useEffect(() => {
        console.log("new audio message?");
        if(audioMessages) {
            console.log(audioMessages);
            const message = audioMessages[audioMessages.length-1];
            if(message) {
                console.log("select audio", message);
                selectAudio(message.payload);
            }
        }

    }, [audioMessages]);

    // update the state for the requested audio so the Audioplayer's useffect can get triggered. setting 0 for stop and anything higher than 0 to play
    const selectAudio = ({ type, action }) => {
        const a = {...audioPlaying};
        a[type] = update(a[type], action === 'play');
        setAudioPlaying(a);
    };

    // increment if a play action is requested. return 0 if not, which means 'stop'
    const update = (index, play) => {
        let i = index+0;
        if (play) {
            i++;
            return i;
        } else {
            return 0;
        }
    };

    return (
        <>
            {Object.entries(sounds).map(([soundId, settings]) => (
                <AudioPlayer id={soundId} playing={audioPlaying[soundId]} url={settings.url} options={settings.options} />
            ))}
        </>
    )
}

export default AudioManager;
