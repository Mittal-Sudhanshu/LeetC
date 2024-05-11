"use client";
import { useRouter } from "next/navigation"

export default function FirstGrid() {

    const router = useRouter();
    return <div>
        <div className="h-screen flex items-center justify-center">
            <div>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
                        <div className="lg:order-1 order-2 text-start ">
                            <div className="text-5xl font-bold">
                                Coding Practice
                            </div>
                            <div className="text-2xl ">
                                Improve your coding skills with our collection of coding challenges.
                            </div>
                            <div className="flex gap-2 py-2 ">
                                <button className="bg-black hover:opacity-90 text-white py-2 px-4 rounded-md" onClick={() => {
                                    router.replace("/home");
                                }}>
                                    Get Started
                                </button>
                                <button className="border-gray-200 hover:opacity-90 border py-2 px-4 rounded-md">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="lg:order-2 order-1">
                            Image here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}