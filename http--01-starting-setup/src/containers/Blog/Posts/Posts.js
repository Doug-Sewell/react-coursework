import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                //console.log(response);
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
            })
            .catch(response => {
                console.log(response);
                //this.setState({ error: true })
            });
    }

    postSelectedHandler = id => {
        this.setState({ selectedPost: id });
    }


    render() {

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => <Post
                title={post.title}
                key={post.id}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />);
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts; 