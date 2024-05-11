import Button from "../../Button";

export default function QuestionCard({ title, difficulty, id, tag }: { title: string, difficulty: string, id: string, tag: string }) {

    return <div>
        <div className="bg-white border outline-black rounded-lg p-4 max-w-100 m-2">
            <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">{title}</span>
                <span className="text-gray-600">{difficulty}</span>
            </div>
            <div className="flex mt-4">
                <Button id={id}></Button>

            </div>
        </div>
    </div>
}