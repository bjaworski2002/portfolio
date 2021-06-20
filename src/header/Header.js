import React from "react";
import Dropdown from "./Dropdown"

function Header(){
    return(
        <React.Fragment>
            <header className="h-auto w-screen bg-black text-white flex justify-between flex-wrap">
                <div className="p-2 px-4 text-lg font-bold">Bartosz Jaworski</div>
                <div>
                    <a href={"https://www.linkedin.com/in/jaworskib/"} className={"px-2"}>LinkedIn</a>
                    <a href={"https://github.com/bjaworski2002"} className={"px-2"}>GitHub</a>
                    <Dropdown />
                </div>
            </header>
        </React.Fragment>
    )
}
export default Header