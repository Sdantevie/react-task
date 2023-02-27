import SideBar from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topbar";
import SearchResult from "./components/searchResults/searchResult";
import FilterPanel from "./components/filterPanel/filterPanel";
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { showFilterPanelState } from "./store/filterPanel";

const App = () => {
  const [ showFilterPanel, setShowFilterPanel ] = useRecoilState(showFilterPanelState)
  return (
    <div className="relative">
      <SideBar />
      <div className="ml-72">
        <TopBar />
        <SearchResult/>
      </div>
      {
        showFilterPanel && (
          <div onClick={() => { setShowFilterPanel(false) }} className="absolute bg-black/50 left-0 top-0 bottom-0 right-0">
            <FilterPanel />
          </div>
        )
      }
    </div>
  );
}
export default App;