import './topbar.css'

const TopBar = () => {
     return (
         <div className="topbar">
            <span>Home</span>
            <i className="icon ri-arrow-right-s-line ri-lg"></i>
            <span>OC</span>
            <i className="icon ri-arrow-right-s-line ri-lg"></i>
            <span className='text-[#778FAB]'>Items search</span>
         </div>
    );
}
export default TopBar;