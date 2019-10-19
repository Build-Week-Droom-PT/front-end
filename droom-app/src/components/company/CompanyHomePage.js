import React from "react";
import LogOut from "../Forms/LogOut"

export default function SeekerHomePage() {
    return (
        <div>
            <a href="#" onClick={LogOut()}>Log Out</a>
            <h1>You are a company!</h1>
        </div>
    )
}