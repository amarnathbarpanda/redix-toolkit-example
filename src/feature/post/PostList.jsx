import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import Timestamp from './Timestamp';

const PostList = () => {

    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    console.log('posts.slice() -> ', posts.slice());

    const renderPosts = orderedPosts?.map(post => (
        <article key={post.id} className='border-2 border-blue-400 rounded-md p-4 flex flex-col gap-2 hover:bg-slate-800 cursor-pointer'>
            <h3 className='text-[18px] text-lime-600 mb-1 font-bold'>{post.title}</h3>
            {post.img && <div className="cover-pic w-full rounded-md">
                <img src={post.img} alt="" className='w-full rounded-md' />
            </div>}
            <p className='text-[14px]'>{post.content.substring(0, 100)}...</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId} />
                <Timestamp timestamp={post.date} />
            </p>
        </article>
    ))

    return (
        <div className="container w-full h-auto text-white my-0 mx-auto">
            <div className='w-full'>
                <h2 className='text-[24px] text-yellow-500 font-bold'>Posts</h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                 gap-3 w-full mx-auto my-0'>
                    {renderPosts}
                </div>
            </div>
        </div>
    )
}

export default PostList;