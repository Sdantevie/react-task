const EmptyResult = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="font-bold text-3xl mb-2">What are you looking for?</h2>
            <span className="text-[#778FAB]">Get started by searching & filtering a few</span>
            <button className="px-12 py-2 bg-[#0C67A0] my-3 text-white"> Fetch data</button>
            <span className="text-[#0C67A0]"> <span className="text-[#778FAB]">or</span> search for an item</span>
        </div>
    );
}
export default EmptyResult;