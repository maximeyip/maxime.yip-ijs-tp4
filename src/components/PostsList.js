import React, { useEffect, useState, useRef } from 'react';
import Post from './Post';

const PostsList = () => {

    const [posts, setPosts] = useState([]);

    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
        res.json().then(data => {
          setPosts(data);
        })
      });
    }, [])

    const addPosts = (title, body) => {
      let data = posts;
      data.unshift({
        title: title,
        body: body,
      });
      setPosts(data);
    }
  
    const handleSendClick = () => {
      addPosts(titleRef.current.value, bodyRef.current.value);
      titleRef.current.value = "";
      bodyRef.current.value = "";
    }

    return (
      <div>
        <center>
          <input ref={titleRef} placeholder="Title" />
          <input ref={bodyRef} placeholder="Body" />
          <button onClick={handleSendClick}>send</button>
        </center>
        <ul style={{ listStyle: 'none', width: '800px' }}>
          {posts.map(p => (
            <Post data={p} />
          ))}
        </ul>
      </div>
    )
  }

export default PostsList;
