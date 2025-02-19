import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blogs = ({handleBookmarks,handleReadTime}) => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch('blogs.json')
            .then(re => re.json())
            .then(data => setBlogs(data))


    }, [])
    return (

        <div className="md:w-2/3">
            {blogs.map((blog) => (
                   <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleReadTime={handleReadTime} ></Blog>
            ))}
        
        </div>
    );
};

export default Blogs;