

import HomeMain from "@/app/components/Home/HomeMain";
import HomeDefaultSideBar from "@/app/components/Home/HomeSideBar";

export default function HomePage() {
    return <div>
        <div className="lg:grid grid-cols-1 lg:grid-cols-5">
            <div className="bg-gray h-screen lg:col-span-1 hidden  lg:block">
                <HomeDefaultSideBar></HomeDefaultSideBar>
            </div>
            <div className="h-screen lg:col-span-4">
                <HomeMain></HomeMain>
            </div>
        </div>
    </div>
}