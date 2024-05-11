"use client";
import { redirect } from "next/navigation"

export default function AppBar() {
    return <div className="p-2 flex justify-between  select-none ">
        <div className="font-bold hover:cursor-pointer text-xl" onClick={() => { redirect('/') }}>
            {"< >"}
        </div>
        <div className="flex gap-2 font-semibold hover:cursor-pointer">
            <div className="" onClick={() => { redirect('/user') }}>
                
            </div>
            <div className="" onClick={() => { redirect('/login') }}>
                Login?Logout
            </div>
        </div>

    </div>
}