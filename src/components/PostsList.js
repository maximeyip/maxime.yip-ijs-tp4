import React, { useEffect, useState, useRef } from 'react';
import Post from './Post';

const PostsList = ({ posts = [] }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        response.json().then(data => {
          setData(data);
        })
      })
    }, []);

    let nameRef = useRef();
    let bodyRef = useRef();

    

  return (
  <ul style={{ listStyle: 'none', width: '800px' }}>
    {data.map(p => (
      <Post data={p} />
    ))}
  </ul>
)};

export default PostsList;
