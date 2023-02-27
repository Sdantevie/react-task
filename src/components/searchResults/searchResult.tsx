import { useRecoilValueLoadable } from "recoil";
import { filteredDataState, orderData } from "../../store/data";
import Loader from "../loader/loader";
import EmptyResult from "./emptyResult";
import SearchResultHeader from "./header";
import './searchResult.css'

const ResultTable = ({ tableData }: { tableData: orderData[] }) => {
    return (
        <div>
            <table className="mt-3 table-fixed border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-600 w-1/6">Order #</th>
                        <th className="border border-slate-600 px-3">Type</th>
                        <th className="border border-slate-600 w-1/6">Item</th>
                        <th className="border border-slate-600 w-1/6">Category</th>
                        <th className="border border-slate-600 w-2/6">Description</th>
                        <th className="border border-slate-600 w-1/6">Created On</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((data: any) => {
                            return (
                                <tr key={data.order}>
                                    <td className="border border-slate-600">{data.order}</td>
                                    <td className="border border-slate-600">{data.type}</td>
                                    <td className="border border-slate-600">{data.item}</td>
                                    <td className="border border-slate-600">{data.category}</td>
                                    <td className="border border-slate-600">{data.description}</td>
                                    <td className="border border-slate-600">{data.created}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const SearchResult = () => {
    const filteredData = useRecoilValueLoadable(filteredDataState)
    const getOrderUI = () => {
        switch (filteredData.state) {
            case 'loading':
                console.log(filteredData.contents)
                return <Loader />
            case 'hasValue':
                const tableData = filteredData.contents;
                return tableData.length > 0 ? <ResultTable tableData={tableData} /> : <EmptyResult />
            case 'hasError':
                return <EmptyResult />
        }
    }


    return (
        <div className="h-screen pt-10 flex flex-col">
            <div className="px-10">
                <SearchResultHeader />
            </div>
            <div className="border-2 border-solid border-[#E0E9F7]"></div>
            <div className="px-4 table-content">
                {getOrderUI()}
            </div>
        </div>
    );
}



export default SearchResult;