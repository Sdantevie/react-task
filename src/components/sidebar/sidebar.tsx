import logoImage from '../../assets/logo.svg'
import itemSearch from '../../assets/itemSearch.svg'
import closeMenu from '../../assets/closeMenu.svg'
import mazie from '../../assets/mazie.svg'
import './sidebar.css'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <img src={logoImage} className="p-3 self-start" />

            <div className='flex flex-col justify-between flex-1 pb-3'>
                <div>
                    <div className='mt-3 flex px-5 bg-[#064A71] py-3 border-solid border-[#157CB0] border-l-2'>
                        <img src={itemSearch} />
                        <span className='ml-3 text-sm'>Item Search</span>
                    </div>

                    {
                        Array(9).fill('Item').map((item, index) => {
                            return (
                                <div key={index} className='flex items-center justify-between px-5 py-3'>
                                    <div className='flex'>
                                        <img src={itemSearch} />
                                        <span className='ml-3 text-sm'>{item}</span>
                                    </div>
                                    {index == 1 && <i className='ri-arrow-down-s-line ri-lg cursor-pointer'></i>}
                                </div>
                            );
                        })
                    }
                </div>

                <div className=''>
                    <div className='px-5 flex py-3 items-center'>
                        <img className='' src={closeMenu} />
                        <span className='text-sm ml-5'>Close Menu</span>
                    </div>
                    <div className='px-5 flex py-3 items-center'>
                        <img src={mazie} />
                        <div className='flex flex-col ml-3'>
                            <span className='text-sm'>Mazie johnson</span>
                            <small className='text-xs'>View profile</small>
                        </div>
                    </div>
                    <div className='px-5 flex py-3 items-center'>
                        <i className='ri-question-line ri-lg'></i>
                        <span className='text-sm ml-4'>Help</span>
                    </div>
                    <div className='px-5 flex py-3 items-center'>
                        <i className='ri-notification-line ri-lg'></i>
                        <span className='text-sm ml-4'>Notification</span>
                    </div>
                    <div className='px-5 flex py-3 items-center'>
                        <i className='ri-logout-box-line ri-lg'></i>
                        <span className='text-sm ml-4'>Signout</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideBar;