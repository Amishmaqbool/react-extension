import React from 'react';
import CatagoryCard from '../components/catagory-card';
import ExperianceCard from '../components/experiance-card';
import Layout from '../components/Layout';

const Page4 = () => {
  return (
    <Layout>
            <div className="mt-3 px-6  flex items-center justify-between">
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
            <div className="mb-4 mt-4 px-5 w-80 h-8">
            <p className="text-sm font-semibold  text-gray-500">2 experience found</p>
            </div>
            <div className='px-5'>
                <ExperianceCard
                    icon={
                        <svg width={70} height={69} viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_6_709" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={70} height={69}>
                                <rect x="0.019043" width={69} height={69} rx={10} fill="#C4C4C4" />
                            </mask>
                            <g mask="url(#mask0_6_709)">
                                <path d="M-12.3022 -12.7778H80.1085V83.0556H-12.3022V-12.7778Z" fill="#2F80ED" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M31.6814 14.4774C32.4742 14.0034 33.3732 13.7538 34.2883 13.7538C35.2035 13.7538 36.1025 14.0034 36.8953 14.4774C36.8962 14.4779 36.8972 14.4785 36.8981 14.479L50.3747 22.4651C51.1673 22.9397 51.8257 23.6222 52.2838 24.444C52.7418 25.2657 52.9835 26.198 52.9844 27.1472V43.1223C52.9835 44.0716 52.7418 45.0038 52.2838 45.8256C51.8257 46.6474 51.1673 47.3298 50.3746 47.8044L50.3694 47.8076L36.8981 55.7905C36.8971 55.7911 36.8961 55.7917 36.8952 55.7923C36.1024 56.2662 35.2034 56.5157 34.2883 56.5157C33.3732 56.5157 32.4743 56.2662 31.6815 55.7923C31.6805 55.7917 31.6796 55.7911 31.6786 55.7905L18.2073 47.8076L18.202 47.8044C17.4094 47.3298 16.751 46.6474 16.2929 45.8256C15.8348 45.0038 15.5932 44.0716 15.5923 43.1223V27.1472C15.5932 26.198 15.8348 25.2657 16.2929 24.444C16.751 23.6222 17.4094 22.9397 18.202 22.4651L18.2073 22.462L31.6786 14.479C31.6795 14.4785 31.6804 14.4779 31.6814 14.4774ZM34.2883 16.5934C33.8528 16.5934 33.4249 16.7123 33.0476 16.9381L33.0424 16.9413L19.5711 24.9242C19.5703 24.9247 19.5695 24.9251 19.5688 24.9256C19.1929 25.1512 18.8808 25.4751 18.6635 25.865C18.4458 26.2555 18.3309 26.6984 18.3304 27.1495V43.1201C18.3309 43.5711 18.4458 44.0141 18.6635 44.4046C18.8808 44.7945 19.193 45.1185 19.5689 45.3441C19.5697 45.3445 19.5704 45.3449 19.5711 45.3453L33.0476 53.3314C33.4249 53.5573 33.8528 53.6762 34.2883 53.6762C34.7239 53.6762 35.1518 53.5573 35.529 53.3315L35.5343 53.3283L49.0056 45.3453C49.0063 45.3449 49.007 45.3445 49.0078 45.3441C49.3836 45.1185 49.6959 44.7945 49.9132 44.4046C50.131 44.0139 50.2459 43.5707 50.2463 43.1194V27.1501C50.2459 26.6989 50.131 26.2557 49.9132 25.865C49.6959 25.4751 49.3837 25.1512 49.0079 24.9256C49.0072 24.9252 49.0064 24.9247 49.0056 24.9242L35.529 16.9381C35.1518 16.7123 34.7239 16.5934 34.2883 16.5934Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.4392 18.8716C24.8175 18.1927 25.6549 17.9603 26.3096 18.3526L34.2881 23.1332L42.2668 18.3526C42.9214 17.9603 43.7588 18.1927 44.1371 18.8716C44.5153 19.5505 44.2912 20.4189 43.6366 20.8112L34.9731 26.0022C34.5493 26.2561 34.027 26.2561 33.6032 26.0022L24.9397 20.8112C24.2851 20.4189 24.061 19.5505 24.4392 18.8716Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.7757 34.4245C16.1539 33.7456 16.9913 33.5132 17.646 33.9055L26.3095 39.0965C26.7329 39.3501 26.9936 39.8187 26.9936 40.3258V50.6878C26.9936 51.4719 26.3807 52.1075 25.6246 52.1075C24.8685 52.1075 24.2555 51.4719 24.2555 50.6878V41.1452L16.2762 36.3641C15.6215 35.9718 15.3974 35.1035 15.7757 34.4245Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M52.8005 34.4245C53.1787 35.1035 52.9547 35.9718 52.3 36.3641L44.3206 41.1452V50.6878C44.3206 51.4719 43.7077 52.1075 42.9516 52.1075C42.1955 52.1075 41.5825 51.4719 41.5825 50.6878V40.3258C41.5825 39.8187 41.8433 39.3501 42.2667 39.0965L50.9302 33.9055C51.5849 33.5132 52.4222 33.7456 52.8005 34.4245Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.296 24.3614C16.6746 23.6827 17.5121 23.4508 18.1666 23.8434L34.2883 33.5146L50.41 23.8434C51.0645 23.4508 51.9019 23.6827 52.2805 24.3614C52.6591 25.0402 52.4355 25.9087 51.781 26.3013L34.9738 36.3837C34.5497 36.6382 34.0269 36.6382 33.6028 36.3837L16.7956 26.3013C16.1411 25.9087 15.9174 25.0402 16.296 24.3614Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M34.288 33.7151C35.0441 33.7151 35.657 34.3507 35.657 35.1348V55.2598C35.657 56.0439 35.0441 56.6796 34.288 56.6796C33.5319 56.6796 32.9189 56.0439 32.9189 55.2598V35.1348C32.9189 34.3507 33.5319 33.7151 34.288 33.7151Z" fill="white" />
                            </g>
                        </svg>
                    }
                    title={"DeFi Swap"}
                    detail={"Swap your digital assets"}
                    users="+200 users" />
                <div className='py-2'></div>
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
            </div>
        </Layout>
    )
};

export default Page4;
