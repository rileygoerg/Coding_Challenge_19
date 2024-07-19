import React, {useState} from 'react';
import './Tour.css'

export default function Tour({id, name, info, image, price, removeTour}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour">
      <img src={image}/>
      <div>
        <h4>{name}</h4>
        <h4 className="price">${price}</h4>
        <p>
          {readMore ? info : ``}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="not-interested" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}