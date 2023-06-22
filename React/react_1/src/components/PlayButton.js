import './PlayButton.css';
import { useState } from 'react';

function PlayButton({children,onPlay,onPause}){               //here we are using props to pass the function , onplay and onpause are two function and  childern are the {video.title} means button name;

    const [playing, setPlaying] = useState(false);                                      

    function handleClick(e){
        e.stopPropagation();                                 // it is used to stop propagation means when we click on button then other parent Click function don't called;
        if(playing) onPause();
        else onPlay();
        setPlaying(!playing);
    }

    return (
        <button onClick  = {handleClick}> {children} : {playing?'⏸️':'⏯️'} </button>
    )

}

export default PlayButton;