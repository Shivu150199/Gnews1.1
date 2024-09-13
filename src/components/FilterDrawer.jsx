import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../contextApi/NewContext";

const FilterDrawer = () => {
    const { setSearchQuery, setLanguage, setCountry } = useContext(NewsContext);
    const [search, setSearch] = useState("");
    const [lang, setLang] = useState("");
    const [countryName, setCountryName] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = () => {
        setSearchQuery(search);
        setLanguage(lang);
        setCountry(countryName);
        setSearch("");
        setLang("");
        setCountryName("");
    };
    useEffect(() => {
        if (search && (lang || countryName)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [search, lang, countryName]);
    return (
        <aside className="flex flex-col relative  overflow-auto bg-slate-50 h-screen">
            <h2 className="text-2xl font-bold sticky top-0 p-4">Filter</h2>
            <div className="flex flex-col gap-2 p-4">
                <p className="text-[18px] font-medium text-violet-950">
                    Search your favorite news{" "}
                    <span className="text-red-500">*</span>
                </p>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        id="q"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <label className="text-[18px] font-medium text-violet-950">
                    Choose a language
                </label>
                <select
                    name="language"
                    id="language-select"
                    className="select select-bordered "
                    onChange={(e) => setLang(e.target.value)}
                    value={lang}
                >
                    <option value="" disabled>
                        Choose a language
                    </option>
                    <option value="ar">Arabic</option>
                    <option value="zh">Chinese</option>
                    <option value="nl">Dutch</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="el">Greek</option>
                    <option value="he">Hebrew</option>
                    <option value="hi">Hindi</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="ml">Malayalam</option>
                    <option value="mr">Marathi</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portuguese</option>
                    <option value="ro">Romanian</option>
                    <option value="ru">Russian</option>
                    <option value="es">Spanish</option>
                    <option value="sv">Swedish</option>
                    <option value="ta">Tamil</option>
                    <option value="te">Telugu</option>
                    <option value="uk">Ukrainian</option>
                </select>
            </div>
            {/*  */}

            <div className="flex flex-col gap-2 p-4">
                <label className="text-[18px] font-medium text-violet-950">
                    Choose a country
                </label>
                <select
                    name="country"
                    id="country-select"
                    className="select select-bordered"
                    onChange={(e) => setCountryName(e.target.value)}
                    value={countryName}
                >
                    <option value="" disabled>
                        Choose a country
                    </option>
                    <option value="au">Australia</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="cn">China</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="gr">Greece</option>
                    <option value="hk">Hong Kong</option>
                    <option value="in">India</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="nl">Netherlands</option>
                    <option value="no">Norway</option>
                    <option value="pk">Pakistan</option>
                    <option value="pe">Peru</option>
                    <option value="ph">Philippines</option>
                    <option value="pt">Portugal</option>
                    <option value="ro">Romania</option>
                    <option value="ru">Russian Federation</option>
                    <option value="sg">Singapore</option>
                    <option value="es">Spain</option>
                    <option value="se">Sweden</option>
                    <option value="ch">Switzerland</option>
                    <option value="tw">Taiwan</option>
                    <option value="ua">Ukraine</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                </select>
            </div>

            <div className="flex items-center justify-end p-4 sticky bottom-0 w-[100%] ">
                <button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    disabled={disabled}
                >
                    Submit
                </button>
            </div>
        </aside>
    );
};

export default FilterDrawer;
