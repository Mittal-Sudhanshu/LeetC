
export default function InputBox({ label, type, placeholderText, setType, setValue }: { label: string, type: string, placeholderText: string, setType?: React.Dispatch<React.SetStateAction<string>>, setValue: React.Dispatch<React.SetStateAction<string>> }) {
    return <div className="flex flex-col w-full">
        <label className="text-sm font-semibold py-1">{label}</label>
        <div className="border rounded-md p-2 flex justify-between focus-within:border-black focus-within:border-2" >
            <input type={type} placeholder={placeholderText} className=" focus:outline-none" onChange={(event) => {
                setValue(event.target.value)
            }} />
            {(label === 'Password' || label === "Confirm Password") ? <button onClick={() => {
                setType!(type === 'password' ? 'text' : 'password')
            }}>{type == 'password' ? 'View' : 'Hide'}</button> : null}
        </div>
    </div>

}