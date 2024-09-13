import React, { useContext, useState } from "react";

import { nanoid } from "nanoid";
import { NewsContext } from "../contextApi/NewContext";
import imgNotFound from "../assets/image-not-found.png";
const NewsCard = () => {
    // const [newsData, setNewsData] = useState(data);
    const { news, loading } = useContext(NewsContext);

    if (loading) {
        return (
            <div className="text-3xl font-bold text-violet-950 text-center p-10">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (news.length == 0) {
        return (
            <h1 className="text-3xl font-bold text-violet-950 text-center p-10">
                Item not found ......
            </h1>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-10 gap-6   items-center justify-center m-auto mt-10  mx-4">
            {news.map((item) => {
                const { image, title, description, url } = item;
                const id = nanoid();
                return (
                    <div key={id} className="rounded-md bg-base-100  shadow-lg">
                        <figure className="w-full ">
                            <img
                                src={image || imgNotFound}
                                alt={title}
                                className="w-full h-[15rem] object-cover rounded-tl-lg rounded-tr-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {title.slice(0, 50)}...
                            </h2>
                            <p className="flex items-start">
                                {description.slice(0, 100)}....
                            </p>
                            <div className="card-actions justify-end">
                                <a
                                    href={url}
                                    target="_blank"
                                    className="btn btn-primary"
                                >
                                    Read full news
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NewsCard;
