"use client";

import { useRouter } from "next/navigation";

export default function ThirdGrid() {

    const router = useRouter();
    return <div className="flex items-center justify-center py-40 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <div className="text-3xl font-bold">
                    Ready to Improve Your Coding Skills?
                </div>
                <div className="text-l">
                    Our coding challenges are designed to help you practice and improve your problem-solving abilities.
                </div>
            </div>
            <div className="items-end flex justify-end gap-2">
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
    </div>
}