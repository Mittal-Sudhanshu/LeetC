"use client";

import URLS, { BackendHeaders } from "@/constants/urls";
import axios from "axios";
import { useState, useEffect } from "react";

async function getTags() {
    try {
        const res = await axios.get(URLS.getTags, { headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        } });
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

async function getQuestionsByDifficulty() {
    try {
        const res = await axios.get(URLS.getDiffCount);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }

}

export default async function HomeDefaultSideBar() {
    const [tags,setTags ] = useState([]);
    const [diffQuestions,setDiffQuestions] = useState([]);
    useEffect(() => {
        getTags().then((data) => {
            setTags(data);
        })
        getQuestionsByDifficulty().then((data) => {
            setDiffQuestions(data);
        })
    }, [])
    return <div >
        <div className="pt-2 px-2 font-bold text-xl hidden md:block">
            Categories
        </div>
        {tags.map((e: any, index: number) => {

            return index < 5 ? (
                <div className="flex justify-between items-center p-2 hover:cursor-pointer mx-2 shadow-sm rounded-md">
                    <div className="text-lg ">{e.name}</div>
                    <div className="text-sm text-gray-500 bg-white font-bold w-12 h-6 rounded-full justify-center items-center flex
                "><div>
                            {e.questions.length}</div> </div>
                </div>
            ) : null
        })}
        <div className="pt-2 px-2 font-bold text-xl">
            Difficulty
        </div>
        {diffQuestions.map((e: any, index: number) => {
            return index < 5 ? (
                <div className="flex justify-between items-center p-2 hover:cursor-pointer mx-2 shadow-sm rounded-md">
                    <div className="text-lg ">{e.difficulty}</div>
                    <div className="text-sm text-gray-500 bg-white font-bold w-12 h-6 rounded-full justify-center items-center flex
                "><div>
                            {e._count.title}</div> </div>
                </div>
            ) : null
        })}
    </div>
}