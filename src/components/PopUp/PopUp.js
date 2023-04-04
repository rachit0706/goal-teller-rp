import React from "react";
import "./PopUp.css";

export default function PopUp({details, handlePopUpClose}) {
  
    return (
        <div className="popup-background">
            <div className="popup">
                <div className="pop-up-close" onClick={handlePopUpClose}>
                    <p>X</p>
                </div>
                {!details ? <div className="loading-state">...Please wait</div> : (
                    <div className="fund-details">
                    <p className="fund-name"><b>Name:</b> {details.meta.scheme_name}</p>
                    <div>
                        <p className="scheme-category"><b>Category:</b> {details.meta.scheme_category}</p>
                        <p className="scheme-type"><b>Type:</b> {details.meta.scheme_type}</p>
                    </div>
                    <p className="fund-house"><b>Fund House:</b> {details.meta.fund_house}</p>
                    <p className="latest-nav-date"><b>Latest Nav Date:</b> {details.data[0].date}</p>
                    <p className="latest-nav-date"><b>Latest Nav:</b> {details.data[0].nav}</p>
                    <div>
                        <button>Buy</button>
                        <button>Sell</button>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}