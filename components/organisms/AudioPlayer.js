import { useEffect, memo } from 'react';
import useSound from 'use-sound'
//import sounds from '../../public/sounds.json'

function AudioPlayer({ playing, id, url,options }) {
    const [play, { stop }] = useSound(url, options);

    useEffect(() => {
        // console.log("AudioPlayer useEffect", playing);

        //stop
        if (!playing) {
            console.log("stop", id);
            stop();
        }
        //start
        else {
            console.log("play", id);
            play();
        }

    },[playing])

    return (
        <>
            <span>
               {/* <button onClick={() => play()}>
                    Play {id}
                </button>
                <button onClick={() => stop()}>
                    Stop {id}
                </button>*/}
            </span>
        </>
    )
}

function playStateEqual(oldProps, newProps) {
  return ( oldProps.playing === newProps.playing );
}

export default memo(AudioPlayer, playStateEqual);
