import './Video.css';

function Video({title,id,channel="Coder Dost",views,time,verified , children ,deleteVideo,editVideo}) {           //we can also pass it by creating object and this is jsx
                                                                                                                  // HERE WE Passed PlayButton by name children (see notes for detail explaination )
  return (
      <>
      <div className='container'>

      <button className='close' onClick={()=>deleteVideo(id)}> X </button>  
      <button className='edit' onClick={()=>editVideo(id)}> Edit </button>  

      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
        <div>
          {children}                                                             
        </div>                                                                      
      </div> 
      </>
  );
}

export default Video;


/*

{verified && '✅'}   it is also written like this :-  {verified ? '✅' : null}   both are same if verified is true then tick sign print if not then not print;

*/