import useSound from 'use-sound'
import AudioPlayer from './AudioPlayer';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { MirrorContext } from '../../contexts/MirrorContext';

function AudioManager() {
    const context = useContext(MirrorContext);
    const { audioMessages } = useContext(MirrorContext);

    const url = "http://localhost:3000";
    const sounds = {
        "backgroundMusicPhase1": {
            "url": `${url}/bgm1.mp3`,
            options: { "volume": 0.7 },
        },
        "backgroundMusicPhase2": {
            "url": `${url}/bgm2.mp3`,
            options: { "volume": 0.7 },
        },
        "backgroundMusicPhase3": {
            "url": `${url}/bgm3.mp3`,
            options: { "volume": 0.7 },
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
        }
    };

    const [bgm1Playing, setBgm1Playing] = useState(0);
    const [bgm2Playing, setBgm2Playing] = useState(0);
    const [bgm3Playing, setBgm3Playing] = useState(0);
    const [hintPlaying, setHintPlaying] = useState(0);
    const [thunderPlaying, setThunderplaying] = useState(0);
    const [witchPlaying, setWitchPlaying] = useState(0);
    const [runePlaying, setRunePlaying] = useState(0);
    const [runeSuccessPlaying, setRuneSuccessPlaying] = useState(0);
    const [alchemyPlaying, setAlchemyPlaying] = useState(0);
    const [alchemySuccessPlaying, setAlchemySuccessPlaying] = useState(0);
    const [flowerPlaying, setFlowerPlaying] = useState(0);
    const [finishedPlaying, setFinishedPlaying] = useState(0);

    console.log("hintPlaying: ", hintPlaying);

    // update the states for the received messages
    useEffect(() => {
        if(audioMessages) {
            const message = audioMessages[audioMessages.length-1];
            if(message) {
                console.log("select audio", message);
                selectAudio(message.payload);
            } 
        }

    }, [audioMessages]);

    // update the state for the requested audio so the Audioplayer's useffect can get triggered. setting 0 for stop and anything higher than 0 to play
    const selectAudio = ({ type, action }) => {
        switch (type) {
            case 'bgm1': { setBgm1Playing(update(bgm1Playing, action === 'play')) };
            break;
            case 'bgm2': { setBgm2Playing(update(bgm2Playing, action === 'play')) };
            break;
            case 'bgm3': { setBgm3Playing(update(bgm3Playing, action === 'play')) };
            break;
            case 'hint': { setHintPlaying(update(hintPlaying, action === 'play')) };
            break;
            case 'witch': { setWitchPlaying(update(witchPlaying, action === 'play')) };
            break;
            case 'thunder': { setThunderplaying(update(thunderPlaying, action === 'play')) };
            break;
            case 'rune': { setRunePlaying(update(runePlaying, action === 'play')) };
            break;
            case 'runeSuccess': { setRuneSuccessPlaying(update(runeSuccessPlaying, action === 'play')) };
            break;
            case 'alchemy': { setAlchemyPlaying(update(alchemyPlaying, action === 'play')) };
            break;
            case 'alchemySuccess': { setAlchemySuccessPlaying(update(alchemySuccessPlaying, action === 'play')) };
            break;
            case 'flower': { setFlowerPlaying(update(flowerPlaying, action === 'play')) };
            break;
            case 'finished': { setFinishedPlaying(update(finishedPlaying, action === 'play')) };
            break;
        }
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
            <AudioPlayer id="bmg1" playing={bgm1Playing} url={sounds.backgroundMusicPhase1.url} options={sounds.backgroundMusicPhase1.options} />
            <AudioPlayer id="bmg2" playing={bgm2Playing} url={sounds.backgroundMusicPhase2.url} options={sounds.backgroundMusicPhase2.options} />
            <AudioPlayer id="bmg3" playing={bgm3Playing} url={sounds.backgroundMusicPhase3.url} options={sounds.backgroundMusicPhase3.options} />
            <AudioPlayer id="hint" playing={hintPlaying} url={sounds.hint.url} options={sounds.hint.options} />
            <AudioPlayer id="thunder" playing={thunderPlaying} url={sounds.thunder.url} options={sounds.thunder.options} />
            <AudioPlayer id="witch" playing={witchPlaying} url={sounds.witch.url} options={sounds.witch.options} />
            <AudioPlayer id="rune" playing={runePlaying} url={sounds.rune.url} options={sounds.rune.options} />
            <AudioPlayer id="runeSuccess" playing={runeSuccessPlaying} url={sounds.runeSuccess.url} options={sounds.runeSuccess.options} />
            <AudioPlayer id="alchemy" playing={alchemyPlaying} url={sounds.alchemy.url} options={sounds.alchemy.options} />
            <AudioPlayer id="alchemySuccess" playing={alchemySuccessPlaying} url={sounds.alchemySuccess.url} options={sounds.alchemySuccess.options} />
            <AudioPlayer id="flower" playing={flowerPlaying} url={sounds.flower.url} options={sounds.flower.options} />
            <AudioPlayer id="finished" playing={finishedPlaying} url={sounds.finished.url} options={sounds.finished.options} />
        </>
    )
}

export default AudioManager;
