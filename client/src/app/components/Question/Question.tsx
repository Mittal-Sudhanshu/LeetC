"use client";
import URLS from "@/constants/urls"
import axios from "axios"
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import QuestionDetail from "./Questiondetails";
import Dropdown from "./DropDown";
import { Editor } from "@monaco-editor/react";
import Loader from "@/app/(pages)/question/loading";
import runCode from "@/app/submit";

interface CodeState {
    [key: string]: string;
}

export default function Question() {
    const params = useSearchParams();
    const [question, setQuestion] = useState<any>({});
    const [code, setCode] = useState<CodeState>({
        javascript: '',
        cpp: '',
        python: '',
        java: '',
        c: '',
        typescript: ''
    });
    const [loading, setLoading] = useState(true);
    const id = params.get("id");
    const [selectedItem, setSelectedItem] = useState<string>("cpp");
    async function getQuestion(id: string) {
        try {
            const res = await axios.get(URLS.getQuestionById + id);
            return res.data;
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (id) {
            getQuestion(id).then((data) => {
                setQuestion(data);
            })
            console.log(question);
        }
    }, [])
    // console.log(question);
    if (loading)
        return <Loader></Loader>
    return <div>
        <div className="flex gap-2 justify-center pb-1">
            <button className="rounded-lg bg-green-200 px-4 py-1" onClick={() => {
                runCode(code[selectedItem], selectedItem, question.testCase)
            }}>
                Run
            </button>
            <button className="rounded-lg bg-black text-white px-4 py-1">
                Submit
            </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <QuestionDetail question={question} ></QuestionDetail  >
            <div className="h-screen bg-gray hidden lg:block">
                <div>
                    <Dropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem} code={code} setCode={setCode}></Dropdown>
                    <Editor height="100vh" defaultLanguage={selectedItem} defaultValue={code[selectedItem]} theme="vs-dark" language={selectedItem} value={code[selectedItem]} onChange={(value) => {
                        setCode({ ...code, [selectedItem]: value! })

                    }}>
                    </Editor>

                </div>
            </div>
        </div>
    </div>

}

