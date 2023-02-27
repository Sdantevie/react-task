type SearchResultHeaderProps = {
    openFilterPanel: () => void
}

const SearchResultHeader =  ({ openFilterPanel }: SearchResultHeaderProps) => {
    return (
        <div className="mt-4 flex justify-between items-center pb-4">
            <div className="flex flex-col">
                <h2 className="text-3xl">Items Search</h2>
                <span className="text-slate-500">0 items</span>
            </div>

            <div className="flex items-center">
                <div className="border-[#D0DAE1] flex items-center  border-solid border-2 p-2 rounded-md">
                    <input className="outline-none w-64" placeholder="Search by item #, Order #"/>
                    <i className="ri-search-line ri-lg ml-2 text-[#2B80B0]"></i>
                </div>

                <div className="border-[#A2B2C5] border-2 rounded-md p-3 ml-3 border-solid flex items-center">
                    <i className="ri-add-line ri-lg"></i>
                </div>

                <i className="ri-bookmark-line mx-5 ri-xl text-[#2B80B0]"></i>
                <i onClick={() => {openFilterPanel()}} className="ri-filter-3-line cursor-pointer ri-xl text-[#2B80B0]"></i>
            </div>
        </div>
    );
}
export default SearchResultHeader;