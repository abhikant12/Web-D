import './AddVideo.css';
import {useEffect , useState} from 'react';

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title:'',
    views:''
  }

function AddVideo({postVideos , updateVideo , editableVideo , setEditableVideo}) {                                       //we passed postVideos function as props from app.js to this file;
  const [video , setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();

    if(editableVideo){                                 // now when click on button and editableVideo != NULL then we call "updateVideo" function which present in App.js we have passed update function
         updateVideo(video)                            // from App.js to ADDVideo.js py props; and then we setEditableVideo(null) so inbox get empty ;
         setEditableVideo(null)                     
         setVideo(initialState)
    }
    else {
       postVideos(video)
       setVideo(initialState)
    }
  }

  function handleChange(e) {
    setVideo({...video,                                        // we spread the video by ...video and get all the object and updating the properties of [e.target.name] : e.target.value
        [e.target.name] : e.target.value
    })
  }

  useEffect(()=>{                                         // The useEffect Hook allows you to perform side effects in your components. useEffect accepts two arguments :- useEffect(<function>, <dependency>)
    if(editableVideo) setVideo(editableVideo)            // this useEffect RUN EVERY TIMES WHEN dependency value is changed; so when editableVideo == null then INBOX get empty by function setVideo(editableVideo)
  } , [editableVideo])                                   // and when editableVideo contain any element then that element is appear in inbox by function setVideo(editableVideo)



  return (
    <form>
      <input type="text"  name="title"  value={video.title}  onChange={handleChange}  placeholder="title" />
      <input type="text"  name="views"  value={video.views}  onChange={handleChange}  placeholder="views" />
      <button  onClick={handleSubmit}>  {editableVideo?'Edit':'Add'} Video </button>                              {/*  when editableVideo == null then ADDBUTTON appear other wise EDITBUTTON appear; */}
    </form>
  );
}

export default AddVideo;


/*

in input tag :-   The name attribute specifies the name of an <input> element.it is used to reference elements in a JavaScript.
e.target.name   give the name of an <input> element and 
e.target.value  give the value of <input> element means element that are typed in input box;

now all thing work fine but when we enter title and view in input box and then submit then setVideo(initialState) get called and input
box does not get initiallise with empty means jo pahle data enter kiye the abhi bhi wahi hai input box me So to link the input box 
with video we use here value = {video.title} and value = {video.view}  so when video.title and video.view get empty then input box also get empty;

*/