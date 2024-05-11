"use client";
import { Editor } from "@monaco-editor/react";
import Dropdown from "./DropDown";
import { useState } from "react";

export default function CodeEditor({question}:{question:any}) {3
    const [selectedItem, setSelectedItem] = useState("cpp");
    return <div>
        <Dropdown props={[selectedItem,setSelectedItem]}></Dropdown>
        <Editor height="80vh" defaultLanguage="java" defaultValue="//write your code here" theme="vs-dark">
        </Editor>
        <div>
            TestCases 
            {question.testCase.mforap((testCase:any)=>{
                return <div>
                    <div>
                        Input
                    </div>
                    <div>
                        {testCase.input}
                    </div>
                    <div>
                        Output
                    </div>
                    <div>
                        {testCase.output}
                    </div>
                </div>
            })}
        </div>
    </div>
}

