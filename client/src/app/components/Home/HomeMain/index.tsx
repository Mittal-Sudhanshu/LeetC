// "use client";

import axios from "axios";
import QuestionCard from "../QuestionCard";
import URLS from "@/constants/urls";
// import { useRouter } from "next/navigation";


async function getRandomQuestions() {
    try {
        const res = await axios.get(URLS.getRandomQuestions);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}


export default async function HomeMain() {
    // const router = useRouter();
    const questions = await getRandomQuestions();
    return <div className="p-4 m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {
            questions.map((q:any)=>{
                return QuestionCard({title:q.title,difficulty:q.difficulty,id:q.id,tag:q.tags[0]?.name});
            })
        }
    </div>
}