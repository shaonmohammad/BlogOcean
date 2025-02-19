import { useState } from 'react'
import './App.css'
import Blog from './Components/Blog/Blog'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readTime, setReadTime] = useState(0)
  
  const handleReadTime = (blog) => {
    setReadTime(readTime + blog.reading_time)
    const newBookmark = bookmarks.filter(bookmark => bookmark.id !== blog.id)
    setBookmarks(newBookmark)
    
  }
      
  const handleBookmarks = (blog) => {
          setBookmarks([...bookmarks,blog])
      }
  return (
    <>
      <Header></Header>
  
      <div className='flex gap-4'>
        <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
