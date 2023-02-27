import React from "react";

const FilterPanel = () => {
    const truncateClickEvent = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    return (
        <div onClick={truncateClickEvent} className="h-screen bg-white fixed right-0 top-0 bottom-0 w-96">
            <div className="flex items-center justify-between bg-[#F5F7F8] p-4">
                <div className="flex items-center">
                    <i className="ri-filter-3-line ri-xl text-[#CACED4]"></i>
                    <div className="flex flex-col ml-3">
                        <h3 className="text-lg text-dark">Set Parameters</h3>
                        <small className="text-xs text-[#778FAB]">9 parameters available</small>
                    </div>
                </div>

                <span className="text-xs font-bold text-[#0C67A0]">Reset all</span>
            </div>

            <div id="filtersParent">
                <div className="px-4 border-b-4 border-solid border-slate-200 pb-4">
                    <div
                        className="flex pt-4 justify-between items-center"
                        data-te-collapse-init
                        data-te-target="#itemFilter">
                        <span>Item</span>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </div>

                    <div data-te-collapse-item data-te-collapse-show
                        data-te-parent="#filtersParent"
                        className="h-48 hidden"
                        id="itemFilter">
                            <textarea className="w-full border h-full"></textarea>
                        </div>
                </div>

                <div className="px-4 border-b-4 border-solid border-slate-200 pb-4">
                    <div
                        className="flex pt-4 justify-between items-center"
                        data-te-collapse-init
                        data-te-target="#orderFilter">
                        <span>Order</span>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </div>

                    <div data-te-collapse-item data-te-collapse-show
                        data-te-parent="#filtersParent"
                        className="h-48 hidden"
                        id="orderFilter">
                            <textarea className="w-full border h-full"></textarea>
                        </div>
                </div>

                <div className="px-4 border-b-4 border-solid border-slate-200 pb-4">
                    <div
                        className="flex pt-4 justify-between items-center"
                        data-te-collapse-init
                        data-te-target="#typeFilter">
                        <span>Type</span>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </div>

                    <div data-te-collapse-item data-te-collapse-show
                        data-te-parent="#filtersParent"
                        className="h-48 bg-yellow-400 hidden"
                        id="typeFilter"></div>
                </div>

            </div>
        </div>
    );
}
export default FilterPanel;