import React, { useState } from "react";
import { useSetRecoilState } from 'recoil';
import { headerSearchKeyword, itemsFilterPanelSearch, orderFilterPanelSearch, typeFilterPanelSearch } from "../../store/data";
import { showFilterPanelState } from '../../store/filterPanel';

const FilterPanel = () => {
    const setShowFilterPanel = useSetRecoilState(showFilterPanelState);

    const [items, setItems] = useState<string>('');
    const [orders, setOrders] = useState<string>('');
    const [types, setTypes] = useState<string[]>([]);

    const setItemsState = useSetRecoilState(itemsFilterPanelSearch)
    const setOrdersState = useSetRecoilState(orderFilterPanelSearch)
    const setTypeState = useSetRecoilState(typeFilterPanelSearch)
    const setHeaderSearch = useSetRecoilState(headerSearchKeyword)

    const truncateClickEvent = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const apply = () => {
        setItemsState(items);
        setOrdersState(orders)
        setTypeState(types)
        setShowFilterPanel(false)
    }

    const isItemsValid = () => {
        const itemParts = items.split(',');
        let isValid = itemParts.length > 0;
        itemParts.forEach((part: any) => {
            isValid = isValid && !isNaN(part)
        })
        return isValid;
    }

    const typeArray = [
        "EDF", "CAO", "SFO"
    ]

    const updateTypes = (type: string) => {
        if(types.includes(type)) {
            const newTypes = types.filter(typ => type !== typ);
            setTypes(newTypes);
        } else {
            const newTypes = [ ...types, type]
            setTypes(newTypes);
        }
    }

    const resetAll = () => {
        setItemsState('');
        setOrdersState('')
        setTypeState([])
        setHeaderSearch('')
        setShowFilterPanel(false)
    }

    return (
        <div onClick={truncateClickEvent} className="h-screen bg-white fixed right-0 top-0 flex flex-col bottom-0 w-96">
            <div className="flex items-center justify-between bg-[#F5F7F8] p-4">
                <div className="flex items-center">
                    <i className="ri-filter-3-line ri-xl text-[#CACED4]"></i>
                    <div className="flex flex-col ml-3">
                        <h3 className="text-lg text-dark">Set Parameters</h3>
                        <small className="text-xs text-[#778FAB]">9 parameters available</small>
                    </div>
                </div>

                <span onClick={() => { resetAll() }} className="text-xs cursor-pointer font-bold text-[#0C67A0]">Reset all</span>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="px-4 border-b-4 border-solid border-slate-200 pb-4">
                    <div
                        className="flex pt-4 justify-between items-center">
                        <span>Item</span>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </div>

                    <textarea value={items} onChange={(e) => setItems(e.target.value)}  className={`w-full border outline-none h-48 ${isItemsValid() ? '' : 'border-red-600 border-2 bg-red-100'}`}></textarea>
                    { !isItemsValid() && <small className="text-red-600">Enter comma-seperated numbers</small> }
                </div>

                <div className="px-4 border-b-4 border-solid border-slate-200 pb-4">
                    <div className="flex pt-4 justify-between items-center">
                        <span>Order</span>
                        <i className="ri-arrow-down-s-line ri-xl"></i>

                    </div>

                    <textarea value={orders} onChange={(e) => setOrders(e.target.value)} className="w-full h-48 border"></textarea>

                </div>

                <div className="px-4 pb-4">
                    <div
                        className="flex pt-4 justify-between items-center">
                        <span>Type</span>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </div>

                    <div
                        className="h-48 flex flex-col">

                            {
                                typeArray.map(type => {
                                    return (
                                        <div>
                                            <input type='checkbox' value={type} checked={types.includes(type)} onChange={(e) => { updateTypes(e.target.value) } }/>
                                            <span className="ml-3">{type}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
            </div>

            <div className="py-4 flex px-4 gap-3 bg-[#E7EDF6]">
                <button onClick={() => { setShowFilterPanel(false) }} className="text-[#0C67A0] flex-1">Cancel</button>
                <button disabled={!isItemsValid()} onClick={() =>  { apply() }} className="text-white bg-[#0C67A0] py-2 flex-1 disabled:bg-[#D9E0E7] disabled:text-[#5D697C]">Apply</button>
            </div>
        </div>
    );
}
export default FilterPanel;