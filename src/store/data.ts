import { atom, selector } from "recoil";

export type FilterParams = {
    items?: string,
    order?: string,
    type?: string[]
}

export type orderData = {
    item: string,
    type: string,
    category: string,
    description: string,
    created: string,
    order: string
}

export const headerSearchKeyword = atom({
    key: 'headerSearch',
    default: ''
})

export const itemsFilterPanelSearch = atom({
    key: 'itemFilter',
    default: ''
})

export const orderFilterPanelSearch = atom({
    key: 'orderFilter',
    default: ''
})

export const typeFilterPanelSearch = atom<string[]>({
    key: 'typeFilter',
    default: []
})

export const filteredDataState = selector({
    key: 'filteredData',
    get: async ({ get }) => {
        const typeKeyword = get(typeFilterPanelSearch);
        const parsedHeaderKeyword = parseKeyword(get(headerSearchKeyword))
        const parseOrderItemFilter = parseKeyword(get(orderFilterPanelSearch))
        const parsedItemsKeyword = parseKeyword(get(itemsFilterPanelSearch))

        const mockDataResponse = await fetch('/data/mockData.json');
        const mockData = await mockDataResponse.json()

        console.log(parsedHeaderKeyword);
        if(parsedItemsKeyword.length > 0 || parseOrderItemFilter.length > 0 || parsedHeaderKeyword.length > 0 || typeKeyword.length > 0) {
            return mockData.filter((data: orderData) => {
                return parsedItemsKeyword.includes(data.item) 
                    || typeKeyword.includes(data.type)
                    || parseOrderItemFilter.includes(data.order)
                    || parsedHeaderKeyword.includes(data.item);
            });
        } else {
            return [];
        }
    }
})

//extract the numbers from the comma seepreated string
const parseKeyword = (keywordValue: any) => {
    const individualValues = keywordValue.split(',');
    const parsedValues = individualValues.filter((value: any) => {
        return value.length > 0 && !isNaN(value)
    })

    return parsedValues;
}