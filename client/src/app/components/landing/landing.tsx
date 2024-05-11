import Footer from "@/app/Footer";
import SecondGrid from "./SecondGrid";
import ThirdGrid from "./ThirdGrid";
import FirstGrid from "./firstGrid";

export default function LandingPage() {
    return <div>
        <div className="h-screen items-center flex flex-col overscroll-auto">
        
                <FirstGrid></FirstGrid>
                <SecondGrid></SecondGrid>
                <ThirdGrid></ThirdGrid>
                <Footer></Footer>
        </div>
    </div>
}