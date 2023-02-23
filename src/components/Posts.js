import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/state/PostSlice';

const Posts = () => {
    const {isLoading,posts,error}=useSelector((state)=>state.posts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
        <div>    
                {isLoading && <h2>Loading</h2>}
                {error && <h2>{error}</h2>}
                {posts && posts.map((post)=>{
                        return (
                            <div>
                                <h1>{post.title} sdvvvs</h1>
                                <p>{post.body}</p>
                            </div>
                        )
                })}
        </div>
    );
};

export default Posts;