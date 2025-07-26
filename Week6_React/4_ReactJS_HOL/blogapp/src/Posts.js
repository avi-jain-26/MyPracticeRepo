// src/Posts.js
import React, { Component } from 'react';
import './post.css'
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = () => {
    fetch(' https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch posts');
        return response.json();
      })
      .then(data => this.setState({ posts: data }))
      .catch(error => this.setState({ error }));
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Error: " + error.message);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p>Failed to load posts.</p>;
    }

    return (
      <div className="container">
        <h2>Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h4 class='tit'>{post.title}</h4>
            <p class='body'>{post.body}</p>
            <hr/>
          </div>
          
        ))}
      </div>
    );
  }
}

export default Posts;
