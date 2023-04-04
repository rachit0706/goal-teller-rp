import React from "react";
import "./ListItem.css";

export default function ListItem({index, schemeCode, schemeName, handleShowFundDetails}) {
    return (
        <li className="list-item" onClick={() => handleShowFundDetails(schemeCode)}>
            <div>
                <p>{index}</p>
                <p className="scheme-code">{schemeCode}</p>
                <p className="scheme-name">{schemeName}</p>
            </div>
        </li>
    );
}