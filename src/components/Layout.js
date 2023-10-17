import React from "react";
import "../styles/global.css";

export default function Layout({children}) {
    return (
        <div className="layout">
            <div className="content">
                {children}
            </div>
        </div>
    )
}