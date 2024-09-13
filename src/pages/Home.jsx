import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NewsCard from "./NewsCard";
import Dashboard from "../components/Dashboard";
import { NewsContext } from "../contextApi/NewContext";
import { toast } from "react-toastify";

const Home = () => {
    const { error } = useContext(NewsContext);
    if (error) {
        toast(error);
    }
    return (
        <section className="relative w-[100%] ">
            <Navbar />
            <div className="flex w-[100%] ">
                <Sidebar />
                <Dashboard />
            </div>
        </section>
    );
};

export default Home;
