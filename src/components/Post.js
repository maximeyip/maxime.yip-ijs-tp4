import React, { useState, useReducer } from 'react';
import FavouriteToggle from './FavouriteToggle';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Post = ({ data }) => {

  const [dataMode, setData] = useState(data.title);
  const [ScoreCounter, setCounter] = useReducer(counterReducer);

  const IncrementCounter = () => {
    setCounter({type: 'INCREMENT'});
  }

  const DecrementCounter = () => {
    setCounter({type: "DECREMENT"});
  }
  
  return (
    <div>
    <li
    style={{
      backgroundColor: 'white',
      color: '#333',
      margin: '5px',
      padding: '10px',
      fontSize: '11pt',
      cursor: 'pointer'
    }}
  >
    <span style={{ fontWeight: '900' }}
      onClick={() => {setData((dataMode === data.title) ? data.body : data.title) }}>
        {dataMode}
      </span>
    <FavouriteToggle style={{ float: 'right' }} />
    <div>
      <button onClick={IncrementCounter}>+</button>
      <button onClick={DecrementCounter}>-</button>
      {ScoreCounter}
      </div>
  </li>
  </div>
  );
};

export default Post;
