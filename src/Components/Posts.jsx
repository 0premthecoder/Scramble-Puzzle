import React, { useEffect, useState } from 'react'
import Para from './Para';

const Posts = () => {
    const [posts, setPosts] = useState()
    async function getData() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          console.log(json)
          setPosts(json)
        } catch (error) {
          console.error(error.message);
        }
      }


useEffect(() => {
  getData()
}, [])

  return (
    <div>
        
        <h1>Posts</h1>
        {
          posts &&  posts.map((item, key)=>
                <div key={key}>
                <h2 >{item.title}</h2>
                <Para>{item.body}</Para>
                </div>
            )
        }
    </div>
  )
}

export default Posts