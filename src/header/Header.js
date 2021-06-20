import React from "react";
import Dropdown from "./Dropdown"

function Header(){
    return(
        <React.Fragment>
            <header className="absolute left-0 top-0 h-auto w-full bg-black text-white flex justify-between flex-wrap">
                <div className="p-2 px-4 text-lg font-bold">Bartosz Jaworski</div>
                <Dropdown />
            </header>
        </React.Fragment>
    )
}
export default Header