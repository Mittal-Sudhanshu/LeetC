"use client";

import { useRouter } from "next/navigation";

export default function Button({ id }: { id: string }) {
    const router = useRouter();
    return <div>
        <button className="hover:bg-black border hover:text-white py-2 px-4 rounded-md" onClick={() => { router.push('/question?id=' + id) }}>
            Start
        </button>
    </div>
}