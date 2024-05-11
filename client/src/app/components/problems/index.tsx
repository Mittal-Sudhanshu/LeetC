import URLS from "@/constants/urls"
import axios from "axios";
import QuestionCard from "../Home/QuestionCard";

async function getProblems() {
    try {
        const res = await axios.get(URLS.getAllQuestions);
        return res.data;
    }
    catch (e) {
        console.log(e);
    }
}
export default async function ProblemsPage() {
    const problems = await getProblems();

    return <div>
        {
            problems.map((e: any) => {
                return <QuestionCard title={e.title} difficulty={e.difficulty} id={e.id} tag={e.tag} ></QuestionCard>
            })
        }
    </div>
}