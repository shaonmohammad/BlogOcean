const Bookmarks = ({ bookmarks,readTime}) => {

    return (
        <div className="md:w-1/3 mx-auto text-center ">   
            
            <h1 className="rounded-md text-[#6047EC] bg-[#6047EC1A] text-2xl center font-bold border border-[#6047EC] px-8 py-6">Spend time on read:{readTime}</h1>
            <br />

            <div className="border bg-[#1111110D] rounded-md">
                <h2 className=" p-2 m-4 text-2xl font-bold">Bookmarked Blogs:{bookmarks.length}</h2>
                {bookmarks.map((bookmark) => (
                    <div className="border p-3 my-4 mx-6 text-1xl font-bold bg-white rounded-md">
                        <p>{bookmark.title}</p>
                    </div>
                    
                ))}
            </div>
            
        </div>
    );
};

export default Bookmarks;