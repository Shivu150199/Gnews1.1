import React, { useContext } from "react";
import NewsCard from "../pages/NewsCard";
import { FaFilter } from "react-icons/fa";
import { NewsContext } from "../contextApi/NewContext";
import FilterDrawer from "./FilterDrawer";

const Dashboard = () => {
    const {
        page,
        totalPages,
        handleSort,
        setPage,
        nextPage,
        prevPage,
        loading,
    } = useContext(NewsContext);
    return (
        <div className="flex-1 h-[91vh] w-[100%] overflow-auto relative ">
            <div className="flex items-center md:justify-between justify-end p-4 border-b-[1px] sticky top-0 bg-white">
                <h3 className="font-medium text-violet-950 hidden md:block">
                    Showing {page} out of {totalPages} pages
                </h3>

                <div>
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <div className="flex items-center justify-center gap-3">
                            <label
                                htmlFor=""
                                className="text-[18px] font-bold text-violet-950 text-nowrap"
                            >
                                {" "}
                                Sort by :
                            </label>
                            <select
                                className="select select-bordered"
                                onChange={(e) => handleSort(e.target.value)}
                            >
                                <option disabled>Select sort</option>
                                <option value="publishedAt">
                                    Sort by Date
                                </option>
                                <option value="relevance">
                                    Sort by Relevance
                                </option>
                            </select>
                        </div>

                        <div className="drawer w-full">
                            <input
                                id="my-drawer"
                                type="checkbox"
                                className="drawer-toggle"
                            />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label
                                    htmlFor="my-drawer"
                                    className="drawer-button flex md:hidden items-center gap-2 btn btn-primary text-sm font-md"
                                >
                                    <FaFilter />
                                    Filter
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                <FilterDrawer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NewsCard />
            {!loading && (
                <div className="hidden md:flex items-center sticky bottom-0 bg-white p-2 shadow-md justify-end">
                    <div className="join grid grid-cols-2">
                        <button
                            className="join-item btn btn-outline"
                            onClick={prevPage}
                        >
                            Previous page
                        </button>
                        <button
                            className="join-item btn btn-primary"
                            onClick={nextPage}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
