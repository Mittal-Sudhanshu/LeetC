"use client";
import { useState } from "react";
import InputBox from "./InputBox";
import { loginuser, signupuser } from "@/app/submit/Auth";
import { useRouter } from "next/navigation";

export default function Auth({ signup }: { signup: boolean }) {
    const router = useRouter();
    const [passwordType, setPasswordType] = useState('password');
    const [confirmPasswordType, setConfirmPasswordType] = useState('password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return <div className="h-screen flex justify-center items-center">
        <div className="w-80 h-max-80 shadow-md rounded-md flex justify-center items-center p-2 px-4 flex-col">
            <div className="font-bold text-2xl">
                {signup ? "Sign Up" : "Login"}
            </div>
            {signup ? <InputBox label="Name" placeholderText="Name" type={"Text"} setValue={setName} /> : null}
            <InputBox label={signup ? "Email" : "Email or Username"} setValue={setEmail} placeholderText={signup ? "Email" : "Email or Username"} type={"Email"} />
            {signup ? <InputBox label="Username" placeholderText="username" type={"Text"} setValue={setUsername} /> : null}

            <InputBox label="Password" placeholderText="password" type={passwordType} setValue={setPassword} setType={setPasswordType} />
            {signup ? <InputBox label="Confirm Password" placeholderText="password" type={confirmPasswordType} setValue={setConfirmPassword} setType={setConfirmPasswordType} />
                : null}
            <div className="p-2">
                <button onClick={async () => {
                    if (signup) {
                        const res = await signupuser({ name, email, username, password, confirm_password: confirmPassword });
                        if (res == 'success') {
                            alert('User created successfully')
                            router.replace('/home')
                        } else {
                            alert(res)

                        }
                    } else {
                        const res = await loginuser({ email, password });
                        if (res === 'success') {
                            alert('User logged in successfully')
                            router.replace('/home')
                        }
                        else {
                            alert(res)
                        }
                    }
                }} className="bg-black text-white w-full p-2 rounded-md">{signup ? "Sign up" : "Login"}</button>

            </div>
        </div>
    </div>
}