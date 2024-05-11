export default function SecondGrid() {
    return <div>
        <div className="h-screen flex items-center justify-center bg-gray w-screen     ">
            <div>
                <div>
                    <div className="flex flex-col text-center p-4">
                        <div >
                            Coding Challenges
                        </div>
                        <div className="font-extrabold text-5xl">
                            Improve Your Coding Skills
                        </div>
                        <div className="text-xl">
                            Our collection of coding challenges covers a wide range of topics, from algorithms to data structures, to help you become a better programmer.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 px-4">
                        <div className="order-1 lg:order-2">
                            Image here
                        </div>
                        <div className="py-4 order-2 lg:order-1">
                            <div className="font-bold text-xl">Algorithms</div>
                            <div className="text-lg py-2">
                                Practice solving classic algorithmic problems.
                            </div>
                            <div className="font-bold text-xl">
                                Data Structures
                            </div>
                            <div className="text-lg py-2">
                                Understand and implement various data structures.
                            </div >
                            <div className="font-bold text-xl">
                                Problem Solving
                            </div>
                            <div className="text-lg py-2">
                                Develop your problem-solving skills with challenging problems.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}