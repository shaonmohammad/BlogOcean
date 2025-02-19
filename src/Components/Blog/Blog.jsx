// import { BookmarkIcon } from '@heroicons/react/24/outline'; // Heroicons v2 import
import { Bookmark } from "lucide-react";
import { useState } from "react";
const Blog = ({ blog ,handleBookmarks,handleReadTime}) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;

   
    return (
        <div className="border-b-2 mb-12">
            <img className="w-full object-cover mb-8 rounded-lg" src={cover} alt={title} />
            <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                    <div><img className="w-10" src={author_img} alt={author} /></div>
                    <div>
                        <h3 className="text-2xl font-bold text-left">{author}</h3>
                        <p className="text-left">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p>{reading_time} min read</p>
                    <Bookmark onClick={() => { handleBookmarks(blog)}} size={24} />
                    
                </div>
            </div>
            <h2 className="text-4xl text-left font-bold">{title}</h2>
            <br />
            <p className="text-left mb-2">
                {hashtags.map((hash, idx) => (
                    <span key={idx}><a href="#">#{hash}</a> </span>
                ))}
            </p>
            <div className="text-left"> 
                <button onClick={() => handleReadTime(blog)} className='text-purple-800 font-bold underline'>
                    Mark As Read
                </button> 
            </div>
            <br />
        </div>
    );
};

export default Blog;
