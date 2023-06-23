import React, {useState} from "react";
import data from './data'
import Card from './components/Card'

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}> Refresh </button>
        </div>
    );
  }

  return (
    <div className="container">
            <h2 className = 'title'> Plan With Love </h2>
            <div className = 'cards'>
                    {tours.map( (tour) => (
                            <Card key={tour.id} {...tour} removeTour = {removeTour}></Card>
                    ))}
            </div>
    </div>
  )
};

export default App;




/*
here if we put small bracket after arrow (=>) then there is no need of return the value in map like ....
                                {tours.map( (tour) => (
                                    <Card key={tour.id} {...tour} removeTour = {removeTour}></Card>
                                    ))}

here if we put curly bracket after arrow (=>) then we have to  return the value in map like ....
                               {tours.map( (tour) => {
                                   return  <Card key={tour.id} {...tour} removeTour = {removeTour}></Card>
                               })}

// Both work same;

*/