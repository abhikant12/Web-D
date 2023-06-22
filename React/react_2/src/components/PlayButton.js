import './PlayButton.css';
import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';


function PlayButton({children,onPlay,onPause}){               //here we are using props to pass the function , onplay and onpause are two function and  childern are the {video.title} means button name;
    
    const theme = useContext(ThemeContext)
    const [playing, setPlaying] = useState(false);                                      

    function handleClick(e){
        e.stopPropagation();                                 // it is used to stop propagation means when we click on button then other parent Click function don't called;
        if(playing) onPause();
        else onPlay();
        setPlaying(!playing);
    }

    return (
        <button className = {theme} onClick  = {handleClick}> {children} : {playing?'⏸️':'⏯️'} </button>
    )

}

export default PlayButton;