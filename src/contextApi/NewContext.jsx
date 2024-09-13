import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("javascript");
    const [language, setLanguage] = useState("");
    const [country, setCountry] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortOrder, setSortOrder] = useState("publishedAt");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const maxLimit = 10;

    useEffect(() => {
        fetchNews();
    }, [searchQuery, language, country, page, sortOrder]);

    // Fetch news data based on filters
    const fetchNews = async () => {
        const apiUrl = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=${language}&country=${country}&max=${maxLimit}&page=${page}&sortby=${sortOrder}&apikey=${
            import.meta.env.VITE_API_URL
        }`;

        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(apiUrl);
            if (response.status === 200) {
                setNews(response.data.articles);
                setTotalPages(
                    Math.ceil(response.data.totalArticles / maxLimit)
                );
                setLoading(false);
                setError(null);
            } else {
                handleError(response.status);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching news:", error);

            if (error.response) {
                // Server responded with a status other than 200 range
                handleError(error.response.status);
            } else if (error.request) {
                // Request was made but no response received
                setError("Network error. Please check your connection.");
            } else {
                // Something happened in setting up the request
                setError("An unexpected error occurred.");
            }
            setLoading(false);
        }
    };

    const handleError = (status) => {
        switch (status) {
            case 400:
                setError("Bad Request -- Your request is invalid.");
                break;
            case 401:
                setError("Unauthorized -- Your API key is wrong.");
                break;
            case 403:
                setError("Forbidden -- You have reached your daily quota.");
                break;
            case 429:
                setError(
                    "Too Many Requests -- You have made more requests per second than allowed."
                );
                break;
            case 500:
                setError(
                    "Internal Server Error -- There was a problem with the server. Please try again later."
                );
                break;
            case 503:
                setError(
                    "Service Unavailable -- We're temporarily offline for maintenance. Please try again later."
                );
                break;
            default:
                setError("An unexpected error occurred.");
                break;
        }
    };

    // Function to handle sorting by date
    const handleSort = (order) => {
        setSortOrder(order);
    };

    // Function to go to the next page
    const nextPage = () => {
        if (page < totalPages) setPage((prevPage) => prevPage + 1);
    };

    // Function to go to the previous page
    const prevPage = () => {
        if (page > 1) setPage((prevPage) => prevPage - 1);
    };

    return (
        <NewsContext.Provider
            value={{
                news,
                searchQuery,
                setSearchQuery,
                language,
                setLanguage,
                country,
                setCountry,
                sortOrder,
                handleSort,
                page,
                nextPage,
                prevPage,
                totalPages,
                setPage,
                loading,
                error,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};
