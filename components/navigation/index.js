import Link from "next/link";

export const NavBar = ({setIsDrawerOpen, isDrawerOpen}) => {
    return (
        <div className={"bg-gray-900"}>
            <div className={"mx-14"}>
                <div className={"flex h-16 items-center justify-between"}>
                    <div className={"flex items-center"}>
                        <div className={"flex-shrink-0"}>
                            <p className={"text-indigo-400 text-2xl font-bold font-sans"}>ps.dev</p>
                        </div>
                        <div className={"hidden lg:block"}>
                            <div className={"ml-10 flex items-baseline space-x-4"}>
                                <Link href={"#home"}
                                      className={"bg-gray-900 text-white px-3 py-2 rounded-md font-medium"}>Home</Link>
                                <Link href={"#about"}
                                      className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"}>About</Link>
                                <Link href={"#skills"}
                                      className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"}>Skills</Link>
                                <Link href={"#qualifications"}
                                      className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"}>Qualifications</Link>
                                <Link href={"#projects"}
                                      className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"}>Projects</Link>
                                <Link href={"#blog"}
                                      className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"}>Blog</Link>
                                <Link href={"#contact"}
                                      className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"}>Contact
                                    Me</Link>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {
                        setIsDrawerOpen(!isDrawerOpen)
                    }} className={"block lg:hidden"}>
                        <svg data-v-09c808ab="" xmlns="http://www.w3.org/2000/svg" width="31" height="15"
                             className="stroke-current text-white">
                            <g data-v-09c808ab="" fill="none" stroke="#fff" stroke-width="3">
                                <path data-v-09c808ab="" d="M0 1.5h31M0 13.5h31"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}