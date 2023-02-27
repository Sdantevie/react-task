import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { showFilterPanelState } from '../../store/filterPanel';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { filteredDataState, headerSearchKeyword } from '../../store/data';

const SearchResultHeader =  () => {
    const filteredData = useRecoilValueLoadable(filteredDataState)
    const setShowFilterPanel = useSetRecoilState(showFilterPanelState)
    const [searchKeyword, setSearchKeyword] = useState('');
    const setKeyword = useSetRecoilState(headerSearchKeyword)

    const doSearch = () => {
        setKeyword(searchKeyword);
    }

    return (
        <div className="mt-4 flex justify-between items-center pb-4">
            <div className="flex flex-col">
                <h2 className="text-3xl">Items Search</h2>
                { filteredData.state == 'hasValue' && <span className="text-slate-500">{filteredData.contents.length} items</span> }
            </div>

            <div className="flex items-center">
                <div className="border-[#D0DAE1] flex items-center  border-solid border-2 p-2 rounded-md">
                    <input value={ searchKeyword } onChange={(e) => { setSearchKeyword(e.target.value) }} className="outline-none w-64" placeholder="Search by item #, Order #"/>
                    <i onClick={() => { doSearch() }} className="ri-search-line cursor-pointer ri-lg ml-2 text-[#2B80B0]"></i>
                </div>

                <div className="border-[#A2B2C5] border-2 rounded-md p-3 ml-3 border-solid flex items-center">
                    <i className="ri-add-line ri-lg"></i>
                </div>

                <i className="ri-bookmark-line mx-5 ri-xl text-[#2B80B0]"></i>
                <i onClick={() => { setShowFilterPanel(true) }} className="ri-filter-3-line cursor-pointer ri-xl text-[#2B80B0]"></i>
            </div>
        </div>
    );
}
export default SearchResultHeader;