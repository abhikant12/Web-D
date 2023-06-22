import Video from "./Video";
import PlayButton from "./PlayButton";
import { useContext } from "react";
import VideosContext from "../context/VideosContext";
import VideoDispatchContext from "../context/VideoDispatchContext";

function VideoList({editVideo}){

    const videos = useContext(VideosContext);                     //we passed videos globally using context in App.js;
    const dispatch = useContext(VideoDispatchContext);

    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              editVideo={editVideo}
            >
              <PlayButton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          </>
    )
}

export default VideoList