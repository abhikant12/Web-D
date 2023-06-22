import VideoDispatchContext from '../context/VideoDispatchContext';
import './AddVideo.css';
import {useContext, useEffect, useState} from 'react';

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title:'',
    views:''
  }

function AddVideo({editableVideo}){

  const [video, setVideo] = useState(initialState);
  const dispatch = useContext(VideoDispatchContext);

  function handleSubmit(e) {
      e.preventDefault();
      if(editableVideo) dispatch({type:'UPDATE',payload:video})
      else dispatch({type:'ADD', payload:video})
    
      setVideo(initialState)
  }

  function handleChange(e){
    setVideo({...video,
        [e.target.name] : e.target.value
    })
  }

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo)
    }
  },[editableVideo])

  return (
    <form>
    <input type="text"  name="title"  value={video.title}  onChange={handleChange}  placeholder="title" />
    <input type="text"  name="views"  value={video.views}  onChange={handleChange}  placeholder="views" />
    <button  onClick={handleSubmit} style = {{ marginBottom:"15px" , marginTop:"10px"}} >  {editableVideo?'Edit':'Add'} Video </button>                              {/*  when editableVideo == null then ADDBUTTON appear other wise EDITBUTTON appear; */}
  </form>
  );
}

export default AddVideo;
