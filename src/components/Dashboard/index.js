import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../Reusables/SideBar/SideBar";
import MainContent from "./MainContent/MainContent";

function index() {
    return (
        <div>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
}

export default index;