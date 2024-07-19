import React, {useState, useEffect} from 'react';
import Tour from './Tour';
import './Gallery.css'

export default function Gallery(){
  const [tours, setTours] = useState([]);
  const [currentTour, setCurrentTour] = useState(0);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
    .then((response) => {
    if (!response.ok) {
        throw new Error(`Something's not right. Make sure CORS is unblocked.`);
        }
        return response.json();
      })
    .then((data) => {
        setTours(data);
      })
  }, []);

  function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
    if (currentTour >= newTours.length) {
      setCurrentTour(newTours.length - 1);
    }
  };

  function nextTour(){
    setCurrentTour((prevIndex) => (prevIndex + 1) % tours.length);
  };

  function previousTour(){
    setCurrentTour((prevIndex) => (prevIndex - 1 + tours.length) % tours.length);
  };

  if (tours.length === 0) {
    return <div>Out of tours to display.</div>;
  }

  return (
    <div>
      <div className="tours">
        <Tour {...tours[currentTour]} removeTour={removeTour} />
        <div className="tourbuttons">
          <button onClick={previousTour}>Previous</button>
          <button onClick={nextTour}>Next</button>
        </div>
      </div>
    </div>
  );
}