import { useContext, useReducer, useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';


function App() {
   
  const [editableVideo,setEditableVideo] = useState(null);
  const [mode , setMode] = useState('darkMode')                             // using useState we set darkMode in mode;

  function videoReducer(videos,action){                                     //reducer function;
    switch(action.type){
        case 'ADD':
          return [
            ...videos,
            {...action.payload, id: videos.length+1}
          ]

      case 'DELETE':
         return videos.filter(video=>video.id!==action.payload)  

      case 'UPDATE':
          const index = videos.findIndex(v=>v.id===action.payload.id)
          const newVideos = [...videos]
          newVideos.splice(index,1,action.payload)
          setEditableVideo(null);
          return newVideos;

      default:
         return videos  
    }
  }

  const [videos,dispatch] = useReducer(videoReducer , videoDB)                    // initialise a hook usereducer

  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }

  return (
    <ThemeContext.Provider value = {mode}>                                            {/* we pass mode globally useing context; */}
      <VideosContext.Provider value = {videos}>                                       {/* we pass videos globally useing context; */}
        <VideoDispatchContext.Provider value = {dispatch}>  

            <div className = {`App ${mode}`} onClick={()=>console.log('App')}>              {/* we use mode here to change background color of body */}
              <button onClick={() => setMode(mode === 'darkMode'? 'lightMode':'darkMode')}  style = {{marginBottom:"15px", marginTop:"15px"}} > Mode </button>
              <AddVideo editableVideo = {editableVideo}></AddVideo>
              <VideoList editVideo = {editVideo} ></VideoList>
            </div>

        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;









/* 
here initially return was like this ->
          <div className = {`App ${mode}`} onClick={()=>console.log('App')}>             
              <button onClick={() => setMode(mode === 'darkMode'? 'lightMode':'darkMode')}> Mode </button>
              <AddVideo dispatch = {dispatch} editableVideo = {editableVideo}></AddVideo>
              <VideoList dispatch = {dispatch} editVideo = {editVideo} ></VideoList>
          </div>
 
But we use context Api to pass value globally such as "ThemeContext" which pass mode (help to change color of hole UI) , "VideosContext" which
pass Videos and "VideoDispatchContext" which pass dispactch so we erase all props of dispatch like "dispatch = {dispatch}"
*/