import EmptyResult from "./emptyResult";
import SearchResultHeader from "./header";

type SearchResultProps = {
    openFilterPanel: () => void
}
const SearchResult = ({ openFilterPanel }: SearchResultProps) => {
    return (
        <div className="h-screen pt-10 flex flex-col">
            <div className="px-10">
                <SearchResultHeader openFilterPanel={openFilterPanel} />
            </div>
            <div className="border-2 border-solid border-[#E0E9F7]"></div>
            <div className="h-full">
                <EmptyResult />
            </div>
        </div>
    );
}
export default SearchResult;