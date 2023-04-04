import React from "react";
import "./PortfolioList.css";
import ListItem from "../ListItem/ListItem";

export default function PortfolioList({ data, handleShowFundDetails }) {
    return (
        <ul className="portfolio-list">
            {!data.length ? <div className="loading-state">...Fetching Data</div> : (
                data.map((item, index) => <ListItem handleShowFundDetails={handleShowFundDetails} key={index} index={index + 1} schemeCode={item.schemeCode} schemeName={item.schemeName} />)
            )}
        </ul>
    )
}