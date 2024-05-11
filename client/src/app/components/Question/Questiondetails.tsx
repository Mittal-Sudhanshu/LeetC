export default function QuestionDetail({ question }: { question: any }) {
    return <div className="p-4">
        <div className="flex justify-between  items-center">
            <div className="font-bold text-2xl">
                {question.id + "." + question.title}
            </div>
            <div className=
                {question.difficulty == "Easy" ? "text-green-600" : "text-red-800"}>
                {question.difficulty}
            </div>
        </div>
        <div className="text-l">
            {question.description}
        </div>
        <div className="font-bold text-xl">
            Input Format:
        </div>
        <div>

            {question.inputFormat}
        </div>
        <div className="font-bold text-xl">
            Output Format:
        </div>
        <div>
            {question.outputFormat}
        </div>
        <div className="font-bold text-xl">
            Constraints:
        </div>
        <div>
            {question.constraints}
        </div>

        <div className="bg-gray p-2 ">
            <div className="flex justify-between items-center">
                <div className="font-bold text-xl">
                    Sample Input:
                </div>
                <div className=" hover:cursor-pointer" onClick={() => {
                    navigator.clipboard.writeText(question.testCase?.map((element: any) => {
                        if(element.type==='Example')
                        return element.input;
                    }));
                }}>
                    Copy Icon
                </div>
            </div>
            {question.testCase?.map((testCase: any) => {
                if(testCase.type==='Example')
                return <div key={testCase?.id}>

                    <div>
                        {testCase.input}
                    </div>
                </div>
            })}
        </div>
        <div className="p-2">

        </div>
        <div className="bg-gray p-2 ">
            <div className="flex items-center justify-between">
                <div className="font-bold text-xl">
                    Sample Output:
                </div>
                <div className="items-end flex justify-end hover:cursor-pointer" onClick={() => {
                    navigator.clipboard.writeText(question.testCase?.map((element: any) => {
                        if(element.type==='Example')
                        return element.output;
                    }));

                }}>
                    Copy Icon
                </div>
            </div>
            {question.testCase?.map((testCase: any) => {
                if(testCase.type==='Example')
                return <div key={testCase?.id}>

                    <div>
                        {testCase?.output}
                    </div>
                </div>
            })}
        </div>
    </div>
}