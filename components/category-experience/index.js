import CatagoryCard from "../catagory-card";
import ExperianceCard from "../experiance-card";

export default function CategoryExperience() {
    return (
        <>
            <div className="">
                <div className="mt-3 flex items-center justify-between">
                    <div className="relative w-64 h-10 bg-gray-100 rounded-lg overflow-hidden">
                        <svg className="absolute inset-0 ml-2 m-auto" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4998 17.5L13.7615 13.755L17.4998 17.5ZM15.8332 8.75C15.8332 10.6286 15.0869 12.4303 13.7585 13.7587C12.4301 15.0871 10.6285 15.8333 8.74984 15.8333C6.87122 15.8333 5.06955 15.0871 3.74116 13.7587C2.41278 12.4303 1.6665 10.6286 1.6665 8.75C1.6665 6.87139 2.41278 5.06971 3.74116 3.74133C5.06955 2.41295 6.87122 1.66667 8.74984 1.66667C10.6285 1.66667 12.4301 2.41295 13.7585 3.74133C15.0869 5.06971 15.8332 6.87139 15.8332 8.75V8.75Z" stroke="#6F6E73" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input className="px-10 border-0 rounded-sm w-full h-full bg-gray-100" placeholder="Search experience" />
                    </div>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7C16.9706 7 21 6.10457 21 5C21 3.89543 16.9706 3 12 3C7.02944 3 3 3.89543 3 5C3 6.10457 7.02944 7 12 7Z" stroke="#6F6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 5C3 7.23 6.871 11.674 8.856 13.805C9.58416 14.5769 9.99291 15.5959 10 16.657V22L14 20V16.657C14 15.596 14.421 14.582 15.144 13.805C17.13 11.674 21 7.231 21 5" stroke="#6F6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex items-center justify-between mb-4 mt-4 h-8">
                    <p className="text-base font-semibold text-center text-gray-700">Popular Categories</p>
                    <div className="flex   items-center justify-start h-full  rounded-full">
                        <div className="inline-flex flex-col items-start justify-start">
                            <div className="w-1 h-2.5" />
                            <p className="text-sm font-semibold leading-snug text-purple-500">See All</p>
                            <div className="w-1 h-3" />
                        </div>
                        {/* <img className="w-4 h-6 rounded-lg" src="https://via.placeholder.com/16x24" /> */}
                        <div className="pl-3">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.705781 2.70578C0.315994 2.31599 0.318119 1.68189 0.706085 1.29393L0.793931 1.20608C1.18389 0.816125 1.81352 0.813511 2.208 1.20799L7.29202 6.29202C7.68303 6.68303 7.6865 7.31351 7.29202 7.70799L2.208 12.792C1.81698 13.183 1.1819 13.1819 0.793931 12.7939L0.706085 12.7061C0.31613 12.3161 0.312781 11.6872 0.705781 11.2942L5.00001 7L0.705781 2.70578Z" fill="#885FFF" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <CatagoryCard
                        icon={
                            <svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="#587BE0" />
                                <path d="M10 20L14 16L18 20L24 14" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 14H24V17" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        bgColor={"bg-indigo-50"}
                        title={"Exchanges"}
                    />
                    <CatagoryCard
                        icon={<svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#414047" />
                            <path d="M14.875 20.125L12.278 22.722C11.989 23.011 11.6207 23.2078 11.2199 23.2875C10.819 23.3672 10.4035 23.3263 10.0259 23.1699C9.64827 23.0135 9.32552 22.7486 9.09841 22.4088C8.87131 22.069 8.75006 21.6695 8.75 21.2608V20.125L9.93738 14.189C10.096 13.3956 10.5246 12.6816 11.1502 12.1685C11.7759 11.6555 12.56 11.3751 13.3691 11.375H21.6309C22.44 11.3751 23.2241 11.6555 23.8498 12.1685C24.4754 12.6816 24.904 13.3956 25.0626 14.189L26.25 20.125V21.2599C26.2499 21.6686 26.1287 22.0681 25.9016 22.4079C25.6745 22.7477 25.3517 23.0126 24.9741 23.169C24.5965 23.3254 24.181 23.3663 23.7801 23.2866C23.3793 23.2069 23.011 23.0101 22.722 22.7211L20.125 20.125H14.875Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.875 11.375L15.75 13.125H19.25L20.125 11.375" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        }
                        bgColor={"bg-gray-100"}
                        title={"Games"} />
                    <CatagoryCard
                        icon={<svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#34AE91" />
                            <path d="M10.4799 15.61C10.5151 15.1715 10.7142 14.7623 11.0375 14.4639C11.3608 14.1655 11.7847 13.9999 12.2246 14H22.7754C23.2153 13.9999 23.6392 14.1655 23.9625 14.4639C24.2858 14.7623 24.4849 15.1715 24.5201 15.61L25.2228 24.36C25.2421 24.6008 25.2113 24.843 25.1325 25.0713C25.0536 25.2996 24.9283 25.5092 24.7645 25.6867C24.6007 25.8643 24.4019 26.006 24.1806 26.1029C23.9594 26.1998 23.7204 26.2499 23.4789 26.25H11.5211C11.2796 26.2499 11.0406 26.1998 10.8194 26.1029C10.5981 26.006 10.3993 25.8643 10.2355 25.6867C10.0717 25.5092 9.94639 25.2996 9.86753 25.0713C9.78866 24.843 9.75793 24.6008 9.77725 24.36L10.4799 15.61V15.61Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 16.625V12.25C21 11.3217 20.6312 10.4315 19.9749 9.77513C19.3185 9.11875 18.4282 8.75 17.5 8.75C16.5717 8.75 15.6815 9.11875 15.0251 9.77513C14.3687 10.4315 14 11.3217 14 12.25V16.625" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        }
                        bgColor={"bg-purple-100"}
                        title={"Utilities"} />
                    <CatagoryCard
                        icon={<svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#F98F54" />
                            <path d="M25.375 21V14C25.3747 13.6931 25.2937 13.3917 25.1401 13.126C24.9865 12.8603 24.7658 12.6397 24.5 12.4863L18.375 8.98626C18.109 8.83266 17.8072 8.7518 17.5 8.7518C17.1928 8.7518 16.891 8.83266 16.625 8.98626L10.5 12.4863C10.2342 12.6397 10.0135 12.8603 9.8599 13.126C9.70632 13.3917 9.62531 13.6931 9.625 14V21C9.62531 21.3069 9.70632 21.6083 9.8599 21.874C10.0135 22.1397 10.2342 22.3603 10.5 22.5138L16.625 26.0138C16.891 26.1674 17.1928 26.2482 17.5 26.2482C17.8072 26.2482 18.109 26.1674 18.375 26.0138L24.5 22.5138C24.7658 22.3603 24.9865 22.1397 25.1401 21.874C25.2937 21.6083 25.3747 21.3069 25.375 21Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.86125 13.09L17.5 17.5087L25.1387 13.09" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.5 26.32V17.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        }
                        bgColor={"bg-red-50"}
                        title={"Defi"} />
                    <CatagoryCard
                        icon={<svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#54AAF9" />
                            <path d="M8.75 14L9.891 14.9126C10.2885 15.2306 10.7506 15.458 11.245 15.579C11.7394 15.7 12.2542 15.7117 12.7536 15.6134C13.253 15.515 13.725 15.3089 14.1366 15.0094C14.5481 14.7099 14.8894 14.3242 15.1366 13.8792L17.5 9.625L19.8634 13.8792C20.1107 14.3241 20.452 14.7097 20.8636 15.0091C21.2752 15.3085 21.7472 15.5146 22.2466 15.6129C22.746 15.7112 23.2608 15.6994 23.7552 15.5783C24.2495 15.4572 24.7116 15.2297 25.109 14.9117L26.25 14L24.7153 21.6738C24.6482 22.0086 24.5057 22.3238 24.2984 22.5952C24.0911 22.8667 23.8246 23.0872 23.5191 23.24V23.24C21.6503 24.1745 19.5895 24.661 17.5 24.661C15.4105 24.661 13.3497 24.1745 11.4809 23.24V23.24C11.1754 23.0872 10.9089 22.8667 10.7016 22.5952C10.4943 22.3238 10.3518 22.0086 10.2847 21.6738L8.75 14Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 20.125C16.2715 21.2914 18.7285 21.2914 21 20.125" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        }
                        bgColor={"bg-green-50"}
                        title={"Marketplaces"} />

                    <CatagoryCard
                        icon={<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#885FFF" />
                            <g clipPath="url(#clip0_1_178)">
                                <path d="M11.7547 16.1132C14.1618 16.1132 16.1132 14.1619 16.1132 11.7547C16.1132 9.3476 14.1618 7.39624 11.7547 7.39624C9.34759 7.39624 7.39622 9.3476 7.39622 11.7547C7.39622 14.1619 9.34759 16.1132 11.7547 16.1132Z" fill="white" />
                            </g>
                            <path d="M22.5658 8.52864C22.8737 8.01592 23.617 8.01592 23.9248 8.52864L27.2801 14.1206C27.5971 14.6488 27.2167 15.3208 26.6006 15.3208H19.8901C19.2743 15.3208 18.894 14.6488 19.2105 14.1206L22.5658 8.52864V8.52864Z" fill="white" />
                            <g clipPath="url(#clip1_1_178)">
                                <path d="M26.4151 19.283H20.0755C19.6378 19.283 19.283 19.6378 19.283 20.0755V26.4151C19.283 26.8528 19.6378 27.2075 20.0755 27.2075H26.4151C26.8528 27.2075 27.2075 26.8528 27.2075 26.4151V20.0755C27.2075 19.6378 26.8528 19.283 26.4151 19.283Z" fill="white" />
                                <path d="M22.6944 19.5112C22.8405 19.3652 23.0386 19.2831 23.2452 19.2831C23.4518 19.2831 23.6499 19.3652 23.7959 19.5112L26.9792 22.6945C27.1253 22.8406 27.2073 23.0387 27.2073 23.2453C27.2073 23.4518 27.1253 23.6499 26.9792 23.796L23.7959 26.9793C23.6499 27.1254 23.4518 27.2074 23.2452 27.2074C23.0386 27.2074 22.8405 27.1254 22.6944 26.9793L19.5112 23.796C19.3651 23.6499 19.2831 23.4518 19.2831 23.2453C19.2831 23.0387 19.3651 22.8406 19.5112 22.6945L22.6944 19.5112V19.5112Z" fill="white" />
                            </g>
                            <path d="M11.2039 19.5112C11.35 19.3652 11.5481 19.2831 11.7546 19.2831C11.9612 19.2831 12.1593 19.3652 12.3054 19.5112L15.4887 22.6945C15.6347 22.8406 15.7168 23.0387 15.7168 23.2453C15.7168 23.4518 15.6347 23.6499 15.4887 23.796L12.3054 26.9793C12.1593 27.1254 11.9612 27.2074 11.7546 27.2074C11.5481 27.2074 11.35 27.1254 11.2039 26.9793L8.02059 23.796C7.87454 23.6499 7.7925 23.4518 7.7925 23.2453C7.7925 23.0387 7.87454 22.8406 8.02059 22.6945L11.2039 19.5112V19.5112Z" fill="white" />
                            <defs>
                                <clipPath id="clip0_1_178">
                                    <rect width="9.50943" height="9.50943" fill="white" transform="translate(7 7)" />
                                </clipPath>
                                <clipPath id="clip1_1_178">
                                    <rect width="9.50943" height="9.50943" fill="white" transform="translate(18.4906 18.4906)" />
                                </clipPath>
                            </defs>
                        </svg>
                        }
                        bgColor={"bg-purple-100"}
                        title={"Utilities"} />
                </div>
                <div className="flex items-center justify-between mb-4 mt-4 h-8">
                    <p className="text-base font-semibold text-center text-gray-700">Trending Experiences</p>
                    <div className="flex   items-center justify-start h-full  rounded-full">
                        <div className="inline-flex flex-col items-start justify-start">
                            <div className="w-1 h-2.5" />
                            <p className="text-sm font-semibold leading-snug text-purple-500">See All</p>
                            <div className="w-1 h-3" />
                        </div>
                        {/* <img className="w-4 h-6 rounded-lg" src="https://via.placeholder.com/16x24" /> */}
                        <div className="pl-3">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.705781 2.70578C0.315994 2.31599 0.318119 1.68189 0.706085 1.29393L0.793931 1.20608C1.18389 0.816125 1.81352 0.813511 2.208 1.20799L7.29202 6.29202C7.68303 6.68303 7.6865 7.31351 7.29202 7.70799L2.208 12.792C1.81698 13.183 1.1819 13.1819 0.793931 12.7939L0.706085 12.7061C0.31613 12.3161 0.312781 11.6872 0.705781 11.2942L5.00001 7L0.705781 2.70578Z" fill="#885FFF" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <ExperianceCard
                icon={
                    <svg width={70} height={69} viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_6_727" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={70} height={69}>
                            <rect x="0.019043" width={69} height={69} rx={10} fill="#C4C4C4" />
                        </mask>
                        <g mask="url(#mask0_6_727)">
                            <g filter="url(#filter0_d_6_727)">
                                <g filter="url(#filter1_d_6_727)">
                                    <rect x="-2.98096" y={-3} width={75} height={75} fill="#BB85FF" />
                                    <rect x="-3.48096" y="-3.5" width={76} height={76} stroke="#CCCCCC" />
                                </g>
                                <path d="M20.7291 41.0173C19.9317 44.8389 19.0735 48.7984 16.9742 52.3187C16.5977 52.9501 16.1306 53.6477 16.3162 52.5953C16.4854 51.6354 16.799 50.8883 17.7348 50.1536C22.442 46.4578 27.8556 43.0816 31.4658 38.8728C31.8103 38.4711 34.6999 35.0722 31.4278 35.8192C27.2682 36.7688 24.0139 39.3119 21.3823 41.2353C17.6561 43.9589 14.0516 46.8671 11.8251 50.2332C11.3607 50.9353 12.2162 51.1987 13.4605 51.3253C15.6852 51.5518 17.4859 50.7848 19.3639 50.4409C20.091 50.3077 20.5455 50.2919 20.8333 50.7C21.2341 51.2682 23.9489 50.6601 24.3855 50.5412C25.3457 50.2798 26.0259 49.8584 27.2669 50.0772C28.7401 50.337 29.9526 49.9551 31.1897 49.6848C33.6894 49.1385 35.9537 48.3737 38.5738 47.9679C39.2532 47.8626 38.8982 48.2676 39.3356 48.5041" stroke="#414047" strokeWidth={3} strokeLinecap="round" />
                                <path d="M40.8662 44.956L42.5363 49.5443L47.1246 47.8743L55.7317 29.4163L49.4733 26.498L40.8662 44.956ZM57.9885 24.5765C58.292 23.9256 58.0115 23.1548 57.3606 22.8513L53.4554 21.0302C52.8045 20.7267 52.0337 21.0073 51.7302 21.6582L50.306 24.7123L56.5644 27.6306L57.9885 24.5765Z" fill="#414047" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_6_727" x="-7.98096" y={-4} width={85} height={85} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy={4} />
                                <feGaussianBlur stdDeviation={2} />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_727" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_727" result="shape" />
                            </filter>
                            <filter id="filter1_d_6_727" x="-7.98096" y={-4} width={85} height={85} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy={4} />
                                <feGaussianBlur stdDeviation={2} />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_727" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_727" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                }
                title={"Docu sign"}
                detail={"sign smart contracts seamlessly"}
                users={"+1K users"}
            />
        </>

    )
}