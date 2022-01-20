
import React, { useState } from 'react';
import CatagoryCard from '../components/catagory-card';
import ExperianceCard from '../components/experiance-card';
import Layout from '../components/Layout';
import { Modal } from 'rsuite';
import Category from '../components/category';
const Page2 = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="modal-container mx-auto">
                <Modal style={{ width: "307px", right: '0', bottom: '0', margin: 'auto', top: '45px' }} className='cusModal' size='xs' open={open} onClose={() => {
                    setOpen(!open)
                }}>
                    <Modal.Header>
                        <Modal.Title>
                            <div className='flex '>
                                <p className="text-base font-semibold text-gray-700 pr-3">Filter </p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#885FFF" />
                                    <path d="M7.7 16.993L7.707 15.691L12.096 11.757C12.4507 11.4443 12.691 11.1457 12.817 10.861C12.9477 10.5763 13.013 10.2917 13.013 10.007C13.013 9.64767 12.9337 9.32567 12.775 9.041C12.6163 8.75167 12.397 8.523 12.117 8.355C11.837 8.187 11.515 8.103 11.151 8.103C10.7777 8.103 10.444 8.19167 10.15 8.369C9.86067 8.54167 9.63433 8.77267 9.471 9.062C9.30767 9.35133 9.22833 9.664 9.233 10H7.735C7.735 9.34667 7.882 8.775 8.176 8.285C8.47467 7.79033 8.883 7.40533 9.401 7.13C9.919 6.85 10.5117 6.71 11.179 6.71C11.8137 6.71 12.383 6.85467 12.887 7.144C13.391 7.42867 13.7877 7.82067 14.077 8.32C14.371 8.81933 14.518 9.38867 14.518 10.028C14.518 10.49 14.4573 10.882 14.336 11.204C14.2147 11.526 14.0327 11.8247 13.79 12.1C13.5473 12.3753 13.244 12.674 12.88 12.996L9.492 16.02L9.331 15.6H14.518V16.993H7.7Z" fill="white" />
                                </svg>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex items-center mb-4'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1667 2.5H5.83333C3.99238 2.5 2.5 3.99238 2.5 5.83333V14.1667C2.5 16.0076 3.99238 17.5 5.83333 17.5H14.1667C16.0076 17.5 17.5 16.0076 17.5 14.1667V5.83333C17.5 3.99238 16.0076 2.5 14.1667 2.5Z" stroke="#6F6E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="pl-4 text-base font-semibold text-gray-700">All Experiences</p>
                        </div>
                        <Category
                            checkIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1667 2.5H5.83333C3.99238 2.5 2.5 3.99238 2.5 5.83333V14.1667C2.5 16.0076 3.99238 17.5 5.83333 17.5H14.1667C16.0076 17.5 17.5 16.0076 17.5 14.1667V5.83333C17.5 3.99238 16.0076 2.5 14.1667 2.5Z" stroke="#6F6E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>}
                            categoryIcon={
                                <svg className='ml-4' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#587BE0" />
                                    <path d="M10 20L14 16L18 20L24 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 14H24V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            }
                            title={
                                "Exchanges"
                            } />
                        <Category
                            checkIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83341 1.66667C4.72835 1.66667 3.66854 2.10565 2.88714 2.88706C2.10573 3.66846 1.66675 4.72827 1.66675 5.83333V14.1667C1.66675 15.2717 2.10573 16.3315 2.88714 17.1129C3.66854 17.8943 4.72835 18.3333 5.83341 18.3333H14.1667C15.2718 18.3333 16.3316 17.8943 17.113 17.1129C17.8944 16.3315 18.3334 15.2717 18.3334 14.1667V5.83333C18.3334 4.72827 17.8944 3.66846 17.113 2.88706C16.3316 2.10565 15.2718 1.66667 14.1667 1.66667H5.83341ZM13.1084 8.90333C13.1833 8.82345 13.2417 8.7296 13.2802 8.62715C13.3188 8.52469 13.3368 8.41565 13.3333 8.30623C13.3297 8.19681 13.3047 8.08916 13.2595 7.98944C13.2143 7.88971 13.15 7.79985 13.0701 7.725C12.9902 7.65015 12.8963 7.59176 12.7939 7.55318C12.6914 7.51459 12.5824 7.49657 12.473 7.50013C12.3636 7.50369 12.2559 7.52876 12.1562 7.57392C12.0565 7.61909 11.9666 7.68345 11.8917 7.76333L9.32258 10.505L8.05341 9.3775C7.88713 9.23927 7.67362 9.17108 7.458 9.18735C7.24237 9.20362 7.04151 9.30307 6.89785 9.46468C6.75419 9.6263 6.67898 9.83744 6.6881 10.0535C6.69722 10.2695 6.78997 10.4736 6.94675 10.6225L8.82175 12.2892C8.98399 12.4333 9.19604 12.5084 9.41282 12.4986C9.62961 12.4888 9.83401 12.3948 9.98258 12.2367L13.1076 8.90333H13.1084Z" fill="#885FFF" />
                            </svg>
                            }
                            categoryIcon={
                                <svg className='ml-4' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#414047" />
                                    <path d="M14.875 20.125L12.278 22.722C11.989 23.011 11.6207 23.2078 11.2199 23.2875C10.819 23.3672 10.4035 23.3263 10.0259 23.1699C9.64827 23.0135 9.32552 22.7486 9.09841 22.4088C8.87131 22.069 8.75006 21.6695 8.75 21.2608V20.125L9.93738 14.189C10.096 13.3956 10.5246 12.6816 11.1502 12.1685C11.7759 11.6555 12.56 11.3751 13.3691 11.375H21.6309C22.44 11.3751 23.2241 11.6555 23.8498 12.1685C24.4754 12.6816 24.904 13.3956 25.0626 14.189L26.25 20.125V21.2599C26.2499 21.6686 26.1287 22.0681 25.9016 22.4079C25.6745 22.7477 25.3517 23.0126 24.9741 23.169C24.5965 23.3254 24.181 23.3663 23.7801 23.2866C23.3793 23.2069 23.011 23.0101 22.722 22.7211L20.125 20.125H14.875Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.875 11.375L15.75 13.125H19.25L20.125 11.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            }
                            title={"Games"} />
                        <Category
                            checkIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1667 2.5H5.83333C3.99238 2.5 2.5 3.99238 2.5 5.83333V14.1667C2.5 16.0076 3.99238 17.5 5.83333 17.5H14.1667C16.0076 17.5 17.5 16.0076 17.5 14.1667V5.83333C17.5 3.99238 16.0076 2.5 14.1667 2.5Z" stroke="#6F6E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            }
                            categoryIcon={
                                <svg className='ml-4' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#34AE91" />
                                    <path d="M10.48 15.61C10.5152 15.1715 10.7142 14.7623 11.0376 14.4639C11.3609 14.1655 11.7848 13.9999 12.2247 14H22.7755C23.2154 13.9999 23.6393 14.1655 23.9626 14.4639C24.2859 14.7623 24.485 15.1715 24.5202 15.61L25.2228 24.36C25.2422 24.6008 25.2114 24.843 25.1326 25.0713C25.0537 25.2996 24.9284 25.5092 24.7646 25.6867C24.6008 25.8643 24.402 26.006 24.1807 26.1029C23.9595 26.1998 23.7205 26.2499 23.479 26.25H11.5212C11.2796 26.2499 11.0407 26.1998 10.8194 26.1029C10.5982 26.006 10.3994 25.8643 10.2356 25.6867C10.0718 25.5092 9.94648 25.2996 9.86761 25.0713C9.78875 24.843 9.75801 24.6008 9.77734 24.36L10.48 15.61V15.61Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 16.625V12.25C21 11.3217 20.6313 10.4315 19.9749 9.77513C19.3185 9.11875 18.4283 8.75 17.5 8.75C16.5717 8.75 15.6815 9.11875 15.0251 9.77513C14.3687 10.4315 14 11.3217 14 12.25V16.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            }
                            title={"Marketplace"} />
                        <Category
                            checkIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83341 1.66667C4.72835 1.66667 3.66854 2.10565 2.88714 2.88706C2.10573 3.66846 1.66675 4.72827 1.66675 5.83333V14.1667C1.66675 15.2717 2.10573 16.3315 2.88714 17.1129C3.66854 17.8943 4.72835 18.3333 5.83341 18.3333H14.1667C15.2718 18.3333 16.3316 17.8943 17.113 17.1129C17.8944 16.3315 18.3334 15.2717 18.3334 14.1667V5.83333C18.3334 4.72827 17.8944 3.66846 17.113 2.88706C16.3316 2.10565 15.2718 1.66667 14.1667 1.66667H5.83341ZM13.1084 8.90333C13.1833 8.82345 13.2417 8.7296 13.2802 8.62715C13.3188 8.52469 13.3368 8.41565 13.3333 8.30623C13.3297 8.19681 13.3047 8.08916 13.2595 7.98944C13.2143 7.88971 13.15 7.79985 13.0701 7.725C12.9902 7.65015 12.8963 7.59176 12.7939 7.55318C12.6914 7.51459 12.5824 7.49657 12.473 7.50013C12.3636 7.50369 12.2559 7.52876 12.1562 7.57392C12.0565 7.61909 11.9666 7.68345 11.8917 7.76333L9.32258 10.505L8.05341 9.3775C7.88713 9.23927 7.67362 9.17108 7.458 9.18735C7.24237 9.20362 7.04151 9.30307 6.89785 9.46468C6.75419 9.6263 6.67898 9.83744 6.6881 10.0535C6.69722 10.2695 6.78997 10.4736 6.94675 10.6225L8.82175 12.2892C8.98399 12.4333 9.19604 12.5084 9.41282 12.4986C9.62961 12.4888 9.83401 12.3948 9.98258 12.2367L13.1076 8.90333H13.1084Z" fill="#885FFF" />
                            </svg>
                            }
                            categoryIcon={
                                <svg className='ml-4' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#F98F54" />
                                    <path d="M25.375 21V14C25.3747 13.6931 25.2937 13.3917 25.1401 13.126C24.9865 12.8603 24.7658 12.6397 24.5 12.4862L18.375 8.98624C18.109 8.83265 17.8072 8.75179 17.5 8.75179C17.1928 8.75179 16.891 8.83265 16.625 8.98624L10.5 12.4862C10.2342 12.6397 10.0135 12.8603 9.8599 13.126C9.70632 13.3917 9.62531 13.6931 9.625 14V21C9.62531 21.3069 9.70632 21.6083 9.8599 21.874C10.0135 22.1397 10.2342 22.3603 10.5 22.5137L16.625 26.0137C16.891 26.1673 17.1928 26.2482 17.5 26.2482C17.8072 26.2482 18.109 26.1673 18.375 26.0137L24.5 22.5137C24.7658 22.3603 24.9865 22.1397 25.1401 21.874C25.2937 21.6083 25.3747 21.3069 25.375 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.86133 13.09L17.5001 17.5087L25.1388 13.09" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.5 26.32V17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            }
                            title={"DeFi"} />

                        <Category
                            checkIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1667 2.5H5.83333C3.99238 2.5 2.5 3.99238 2.5 5.83333V14.1667C2.5 16.0076 3.99238 17.5 5.83333 17.5H14.1667C16.0076 17.5 17.5 16.0076 17.5 14.1667V5.83333C17.5 3.99238 16.0076 2.5 14.1667 2.5Z" stroke="#6F6E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                            categoryIcon={
                                <svg className='ml-4' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5Z" fill="#54AAF9" />
                                    <path d="M8.75 14L9.891 14.9126C10.2885 15.2306 10.7506 15.458 11.245 15.579C11.7394 15.7 12.2542 15.7117 12.7536 15.6134C13.253 15.515 13.725 15.3089 14.1366 15.0094C14.5481 14.7099 14.8894 14.3242 15.1366 13.8792L17.5 9.625L19.8634 13.8792C20.1107 14.3241 20.452 14.7097 20.8636 15.0091C21.2752 15.3085 21.7472 15.5146 22.2466 15.6129C22.746 15.7112 23.2608 15.6994 23.7552 15.5783C24.2495 15.4572 24.7116 15.2297 25.109 14.9117L26.25 14L24.7153 21.6738C24.6482 22.0086 24.5057 22.3238 24.2984 22.5952C24.0911 22.8667 23.8246 23.0872 23.5191 23.24V23.24C21.6503 24.1745 19.5895 24.661 17.5 24.661C15.4105 24.661 13.3497 24.1745 11.4809 23.24V23.24C11.1754 23.0872 10.9089 22.8667 10.7016 22.5952C10.4943 22.3238 10.3518 22.0086 10.2847 21.6738L8.75 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14 20.125C16.2715 21.2914 18.7285 21.2914 21 20.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            }
                            title={"Collectibles"} />
                        <Category
                            checkIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1667 2.5H5.83333C3.99238 2.5 2.5 3.99238 2.5 5.83333V14.1667C2.5 16.0076 3.99238 17.5 5.83333 17.5H14.1667C16.0076 17.5 17.5 16.0076 17.5 14.1667V5.83333C17.5 3.99238 16.0076 2.5 14.1667 2.5Z" stroke="#6F6E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                            categoryIcon={
                                <svg className='ml-4' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#885FFF" />
                                    <g clip-path="url(#clip0_16_934)">
                                        <path d="M11.7547 16.1132C14.1619 16.1132 16.1132 14.1618 16.1132 11.7547C16.1132 9.34759 14.1619 7.39622 11.7547 7.39622C9.3476 7.39622 7.39624 9.34759 7.39624 11.7547C7.39624 14.1618 9.3476 16.1132 11.7547 16.1132Z" fill="white" />
                                    </g>
                                    <path d="M22.5657 8.52864C22.8735 8.01592 23.6169 8.01592 23.9247 8.52864L27.28 14.1206C27.5969 14.6488 27.2166 15.3208 26.6004 15.3208H19.8899C19.2742 15.3208 18.8938 14.6488 19.2104 14.1206L22.5657 8.52864V8.52864Z" fill="white" />
                                    <g clip-path="url(#clip1_16_934)">
                                        <path d="M26.415 19.283H20.0754C19.6378 19.283 19.283 19.6378 19.283 20.0755V26.4151C19.283 26.8528 19.6378 27.2075 20.0754 27.2075H26.415C26.8527 27.2075 27.2075 26.8528 27.2075 26.4151V20.0755C27.2075 19.6378 26.8527 19.283 26.415 19.283Z" fill="white" />
                                        <path d="M22.6943 19.5112C22.8404 19.3652 23.0385 19.2831 23.2451 19.2831C23.4517 19.2831 23.6498 19.3652 23.7958 19.5112L26.9791 22.6945C27.1252 22.8406 27.2072 23.0387 27.2072 23.2453C27.2072 23.4518 27.1252 23.6499 26.9791 23.796L23.7958 26.9793C23.6498 27.1254 23.4517 27.2074 23.2451 27.2074C23.0385 27.2074 22.8404 27.1254 22.6943 26.9793L19.511 23.796C19.365 23.6499 19.283 23.4518 19.283 23.2453C19.283 23.0387 19.365 22.8406 19.511 22.6945L22.6943 19.5112V19.5112Z" fill="white" />
                                    </g>
                                    <path d="M11.2039 19.5112C11.3499 19.3652 11.548 19.2831 11.7546 19.2831C11.9612 19.2831 12.1593 19.3652 12.3054 19.5112L15.4886 22.6945C15.6347 22.8406 15.7167 23.0387 15.7167 23.2453C15.7167 23.4518 15.6347 23.6499 15.4886 23.796L12.3054 26.9793C12.1593 27.1254 11.9612 27.2074 11.7546 27.2074C11.548 27.2074 11.3499 27.1254 11.2039 26.9793L8.02057 23.796C7.87453 23.6499 7.79248 23.4518 7.79248 23.2453C7.79248 23.0387 7.87453 22.8406 8.02057 22.6945L11.2039 19.5112V19.5112Z" fill="white" />
                                    <defs>
                                        <clipPath id="clip0_16_934">
                                            <rect width="9.50943" height="9.50943" fill="white" transform="translate(7 7)" />
                                        </clipPath>
                                        <clipPath id="clip1_16_934">
                                            <rect width="9.50943" height="9.50943" fill="white" transform="translate(18.4905 18.4906)" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            }
                            title={"Others"} />

                    </Modal.Body>

                </Modal>
            </div>

            <Layout>
                <div className="mt-3 px-6  flex items-center justify-between">
                    <div className="relative w-64 h-10 bg-gray-100 rounded-lg overflow-hidden">
                        <svg className="absolute inset-0 ml-2 m-auto" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4998 17.5L13.7615 13.755L17.4998 17.5ZM15.8332 8.75C15.8332 10.6286 15.0869 12.4303 13.7585 13.7587C12.4301 15.0871 10.6285 15.8333 8.74984 15.8333C6.87122 15.8333 5.06955 15.0871 3.74116 13.7587C2.41278 12.4303 1.6665 10.6286 1.6665 8.75C1.6665 6.87139 2.41278 5.06971 3.74116 3.74133C5.06955 2.41295 6.87122 1.66667 8.74984 1.66667C10.6285 1.66667 12.4301 2.41295 13.7585 3.74133C15.0869 5.06971 15.8332 6.87139 15.8332 8.75V8.75Z" stroke="#6F6E73" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input className="px-10 border-0 rounded-sm w-full h-full bg-gray-100" placeholder="Search experience" />
                    </div>
                    <div onClick={() =>
                        setOpen(!open)}>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7C16.9706 7 21 6.10457 21 5C21 3.89543 16.9706 3 12 3C7.02944 3 3 3.89543 3 5C3 6.10457 7.02944 7 12 7Z" stroke="#6F6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 5C3 7.23 6.871 11.674 8.856 13.805C9.58416 14.5769 9.99291 15.5959 10 16.657V22L14 20V16.657C14 15.596 14.421 14.582 15.144 13.805C17.13 11.674 21 7.231 21 5" stroke="#6F6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                </div>
                <div className="mb-4 mt-4 px-5 w-80 h-8">
                    <p className="text-base font-semibold text-gray-700">Popular Categories</p>
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

                <div className=" flex px-5 items-center justify-between mb-4 mt-4 pt-1  h-8">
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
                <div className="grid px-5 grid-cols-2 gap-3">
                    <CatagoryCard
                        icon={<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#587BE0" />
                            <path d="M10 20L14 16L18 20L24 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 14H24V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>}
                        bgColor={"bg-indigo-50"}
                        title={"Exchanges"}
                    />
                    <CatagoryCard
                        icon={<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#414047" />
                            <path d="M14.875 20.125L12.278 22.722C11.989 23.011 11.6207 23.2078 11.2199 23.2875C10.819 23.3672 10.4035 23.3263 10.0259 23.1699C9.64827 23.0135 9.32552 22.7486 9.09841 22.4088C8.87131 22.069 8.75006 21.6695 8.75 21.2608V20.125L9.93738 14.189C10.096 13.3956 10.5246 12.6816 11.1502 12.1685C11.7759 11.6555 12.56 11.3751 13.3691 11.375H21.6309C22.44 11.3751 23.2241 11.6555 23.8498 12.1685C24.4754 12.6816 24.904 13.3956 25.0626 14.189L26.25 20.125V21.2599C26.2499 21.6686 26.1287 22.0681 25.9016 22.4079C25.6745 22.7477 25.3517 23.0126 24.9741 23.169C24.5965 23.3254 24.181 23.3663 23.7801 23.2866C23.3793 23.2069 23.011 23.0101 22.722 22.7211L20.125 20.125H14.875Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.875 11.375L15.75 13.125H19.25L20.125 11.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        }
                        bgColor={"bg-gray-100"}
                        title={"Games"} />

                    <CatagoryCard
                        icon={<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#34AE91" />
                            <path d="M10.4799 15.61C10.5151 15.1715 10.7142 14.7623 11.0375 14.4639C11.3608 14.1655 11.7847 13.9999 12.2246 14H22.7754C23.2153 13.9999 23.6392 14.1655 23.9625 14.4639C24.2858 14.7623 24.4849 15.1715 24.5201 15.61L25.2228 24.36C25.2421 24.6008 25.2113 24.843 25.1325 25.0713C25.0536 25.2996 24.9283 25.5092 24.7645 25.6867C24.6007 25.8643 24.4019 26.006 24.1806 26.1029C23.9594 26.1998 23.7204 26.2499 23.4789 26.25H11.5211C11.2796 26.2499 11.0406 26.1998 10.8194 26.1029C10.5981 26.006 10.3993 25.8643 10.2355 25.6867C10.0717 25.5092 9.94639 25.2996 9.86753 25.0713C9.78866 24.843 9.75793 24.6008 9.77725 24.36L10.4799 15.61V15.61Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 16.625V12.25C21 11.3217 20.6312 10.4315 19.9749 9.77513C19.3185 9.11875 18.4282 8.75 17.5 8.75C16.5717 8.75 15.6815 9.11875 15.0251 9.77513C14.3687 10.4315 14 11.3217 14 12.25V16.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        }
                        bgColor={"bg-purple-100"}
                        title={"Utilities"} />
                    <CatagoryCard
                        icon={<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#F98F54" />
                            <path d="M25.375 21V14C25.3747 13.6931 25.2937 13.3917 25.1401 13.126C24.9865 12.8603 24.7658 12.6397 24.5 12.4863L18.375 8.98626C18.109 8.83266 17.8072 8.7518 17.5 8.7518C17.1928 8.7518 16.891 8.83266 16.625 8.98626L10.5 12.4863C10.2342 12.6397 10.0135 12.8603 9.8599 13.126C9.70632 13.3917 9.62531 13.6931 9.625 14V21C9.62531 21.3069 9.70632 21.6083 9.8599 21.874C10.0135 22.1397 10.2342 22.3603 10.5 22.5138L16.625 26.0138C16.891 26.1674 17.1928 26.2482 17.5 26.2482C17.8072 26.2482 18.109 26.1674 18.375 26.0138L24.5 22.5138C24.7658 22.3603 24.9865 22.1397 25.1401 21.874C25.2937 21.6083 25.3747 21.3069 25.375 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.86125 13.09L17.5 17.5087L25.1387 13.09" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.5 26.32V17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        }
                        bgColor={"bg-red-50"}
                        title={"Defi"} />
                </div>
            </Layout>
        </>

    )
};

export default Page2;