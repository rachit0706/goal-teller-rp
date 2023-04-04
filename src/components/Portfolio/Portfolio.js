import React, { useEffect, useMemo, useState } from "react";
import "./Portfolio.css";
import axios from "axios";
import PortfolioList from "../PortfolioList/PortfolioList";
import PopUp from "../PopUp/PopUp";

const SEARCH_API = "https://api.mfapi.in/mf/search?q=";
const FUND_DETAILS = "https://api.mfapi.in/mf/";

export default function Portfolio({data}) {
    const [showPopup, setShowPopup] = useState(false);
    const [fundDetails, setFundDetails] = useState(null);
    const [fundCode, setFundCode] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchFundDetails = async (schemeCode) => {
        if(!schemeCode) {
            return;
        }

        try {
            const response = await axios.get(FUND_DETAILS + schemeCode);
            
            setFundDetails(response.data);
        } catch (e) {
            alert(e);
        }
    }

    useMemo(() => fetchFundDetails(fundCode), [fundCode]);

    const showFundDetails = (code) => {
        setFundCode(code);
        fetchFundDetails(code);
        setShowPopup(true);
    }

    const handlePopUpClose = () => {
        setShowPopup(false)
    }

    return (
        <div className="portfolio">
            <input className="search-bar"  />
            {showPopup ? <PopUp handlePopUpClose={handlePopUpClose} details={fundDetails} /> : null}
            <PortfolioList handleShowFundDetails={showFundDetails} data={data} />
        </div>
    );
}