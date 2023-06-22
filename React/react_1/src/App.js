import { useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import Counter from './components/Counter';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videoDB from './data/data';

function App() {

  const [videos , setVideos] = useState(videoDB);                //setter function(setVideos) set the value of videos to videoDB initaially;
  const [editableVideo , setEditableVideo] = useState(null);
  
  
  function postVideos(video){                                    //this function is passed to it children (AddVideo.js) by props , and here video is not './components/Video'; this video is get from Addvideo.js
    setVideos([                                                  // we spread the videos by ...videos and get all the object and updating the properties of object by {...video, id: videos.length+1}
          ...videos,
          {...video, id: videos.length+1}
        ]);
  }

  function deleteVideo(id){
    setVideos(videos.filter(video=>video.id !== id))            //filter is the process of looping through an array and including or excluding elements inside that array based on a condition that you provide.
  }                                                             // so we filter all element whose id != function id and then we assign that array to videos by setvideos function NOW the element whose id == function id
                                                                // is not present is array(videos) so we deleted the element whose id = function id;
  
  
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))        //find() returns the element itself that satisfies the condition. but filter() returns an array containing the element that satisfies the condition;
  }                                                            //So here we find that element and assign that element in editableVideo so now editableVideo != null and it contain element which we have to edit;

  function updateVideo(video){
    const index = videos.findIndex(v=>v.id===video.id)
    const newVideos = [...videos]
    newVideos.splice(index,1,video)
    setVideos(newVideos)
  }
  

  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div style = {{color: "white", marginBottom:"10px" , paddingTop:"15px" , fontSize:"20px" }} > Videos </div>
      
      <AddVideo postVideos = {postVideos} updateVideo = {updateVideo} editableVideo= {editableVideo}  setEditableVideo = {setEditableVideo}></AddVideo>
 
      <div style = {{marginBottom:"15px" , marginTop:"15px"}}>                       {/* When we click on button then setter function(setVideos) set the value of videos to object mention in the setVideos{} and App function render again*/}
        <button onClick = {() => {
           setVideos( [...videos , { id:videos.length + 1,
            title: 'Demo JS tutorial',
            views: '1M',
            time: '1 month ago',
            channel: 'Coder Dost',
            verified: true
          }]);
        }}> Add Video </button>
      </div>
      
      {  videos.map((video) => (
         <Video 
          key = {video.id}
          title = {video.title}
          views = {video.views}
          time = {video.time}
          channel = {video.channel}
          verified = {video.verified}
          id = {video.id}
          deleteVideo={deleteVideo}                                     /* passing function by props */
          editVideo={editVideo}
         >

          <PlayButton
              onPlay = {() => console.log('Playing..',video.title)}                       /*when we call this button then above onClick in app also called */
              onPause = {() => console.log('Paused..',video.title)}                       /* To avoid these error we use  e.stopPropagation() in playButton file */
          > {video.title} </PlayButton>

        </Video>
     ))}

     <Counter> </Counter>


    </div>
  );
}

export default App;
 

 

/*
HOW DOES DELETE BUTTON WORK :- (STEP):-
1) first we insert button's image on parent image(overlap) in video.js  (for overlap make parent image relative and overlap image absolute);
   and when we click on the delete button then this function get called "deleteVideo"  (function is passed by props to video.js from app.js);
2)In deletevideo function  we filter all element whose id != function id and then we assign that array to videos by setvideos function 
  NOW the element whose id == function id is not present is array(videos) so we deleted the element whose id = function id;
 

HOW DOES EDIT BUTTON WORK :- (STEP):-
  1)1) first we insert button's image on parent image(overlap) in video.js  and when we click on the EDIT button then this function get 
       called "editVideo"  (function is passed by props to video.js from app.js);
  2)In editVideo funtion , find that element == function id and assign that element in editableVideo so now editableVideo != null and it 
      contain element which we have to edit;

NOW WE HAVE TO DO THAT WHEN WE CLICK ON EDIT BUTTON OF ANY IMAGE THEN "TITLE" AND "VIEW" OF IMAGE APPEARS IN INPUT FORM THEN WE EDIT
"TITLE" AND "VIEW" IN INPOX AND PRESS THE EDIT BUTTON TO SAVE. NOTE THIS EDIT BUTTON IS CONVERTED BY ADD BUTTON MEANS WHEN WE CLICK
ON EDIT BUTTON ON IMAGE THEN ADDBUTTON CONVERTED INTO EDITBUTTON;
  
  3) Now we pass editableVideo into AddVideo.js function by props And in Addvideo.js we use "useEffect" function to set value in inbox
   it RUN EVERY TIMES WHEN dependency value is changed; so when editableVideo == null then INBOX get empty by function setVideo(editableVideo)
   and when editableVideo contain any element then that element is appear in inbox by function setVideo(editableVideo)

  4) {editableVideo?'Edit':'Add'} Video  with help of this line we changed the button when editableVideo == null then ADDBUTTON appear other wise EDITBUTTON appear;

  5)now when click on EDITBUTTON and editableVideo != NULL then we call "updateVideo" function which present in App.js we have passed update function
    from App.js to ADDVideo.js py props; and then we setEditableVideo(null) so inbox get empty ;
*/