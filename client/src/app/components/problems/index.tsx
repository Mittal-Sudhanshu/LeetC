"use client";
import URLS, { BackendHeaders } from "@/constants/urls"
import axios from "axios";
import QuestionCard from "../Home/QuestionCard";
import { useEffect, useState } from "react";

async function getProblems() {
    try {
        const res = await axios.get(URLS.getAllQuestions,{ headers:{
            ...BackendHeaders,
            'Authorization':'Bearer '+localStorage.getItem('token'),
        }});
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
}
export default function ProblemsPage() {
    // const problems = await getProblems();
    const [problems, setProblems] = useState([]);
    useEffect(() => {
        getProblems().then((data) => {
            setProblems(data);
        })
    }, [])
    return <div>
        {
            problems.map((e: any) => {
                return <QuestionCard key= {e.id} title={e.title} difficulty={e.difficulty} id={e.id} tag={e.tag} ></QuestionCard>
            })
        }
    </div>
}