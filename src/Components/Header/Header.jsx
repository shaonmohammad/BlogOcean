import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
                <h2 className="text-4xl font-bold">BlogOcean</h2>
                <img src={profile} alt="" />
            </header>
            <br /><br />
            
        </div>
    );
};

export default Header;