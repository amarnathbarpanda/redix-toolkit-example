import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from './postSlice';
import { selectAllUsers } from '../users/userSlice';

const AddPost = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState(null);
    
    const handleTitleChange = e => setTitle(e.target.value)
    const handleImgChange = e => setImg(e.target.value)
    const handleContentChange = e => setContent(e.target.value);
    const handleAuthorChange = e => setUserId(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content && userId) {
            dispatch(
                addPost(title, img, content, userId)
            )
            setTitle('');
            setImg('');
            setContent('');
            setUserId(null);
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id} className='p-3 text-black'>
            {user.name}
        </option>
    ))

    const canSubmit = Boolean(title) && Boolean(content) && Boolean(userId);

    return (
        <div className='add__post max-w-96 xs:w-full sm:w-full md:w-96 lg:w-96 my-0 mx-auto mb-4'>
            <h2 className='text-[24px] text-yellow-500 mb-1 font-bold'>Add a New Post</h2>
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-2 border-2 border-purple-600 rounded-md p-4'>
                <input type="text" name="title" id="postTitle" value={title} onChange={(e) => handleTitleChange(e)} className='bg-transparent border-2 border-pink-500 rounded-md text-white outline-none p-3' placeholder='Title' required />
                <input type="text" name="img" id="postImg" placeholder='Cover piture URL (Optional)'
                    value={img} className='bg-transparent border-2 border-pink-500 rounded-md text-white outline-none p-3'
                    onChange={(e) => handleImgChange(e)} />
                <textarea name="content" id="postContent" value={content} onChange={(e) => handleContentChange(e)} className='bg-transparent border-2 rounded-md border-pink-500  resize-none text-white outline-none p-3' placeholder='Content' required></textarea>
                <select name="userId" id="" className='bg-transparent border-2 border-pink-500 rounded-md text-white outline-none p-3' onChange={handleAuthorChange}>
                    <option value="" className='text-black' >Select User</option>
                    {userOptions}
                </select>
                <button type='submit' className='text-[14px] bg-lime-700 p-2 rounded-md font-bold uppercase text-white tracking-wider disabled:bg-gray-500'
                disabled={!canSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default AddPost;