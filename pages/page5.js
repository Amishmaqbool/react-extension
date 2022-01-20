import React, { useState } from 'react';
import { Modal } from 'rsuite';
import Layout from '../components/Layout';

const page5 = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className="modal-container mx-auto">
                <Modal style={{ width: "307px", right: '0', bottom: '0', margin: 'auto', top: '45px' }} className='cusModal' size='xs' open={open} onClose={() => {
                    setOpen(!open)
                }}>
                    <Modal.Header>
                        <Modal.Title>
                            <div className='flex '>
                                <p className="text-base font-semibold text-gray-700">Make Counter Offer</p>

                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='m-0'>
                        <p className="text-base text-purple-600 font-medium">#72873 </p>
                        <div className='flex items-center py-5'>
                            <p className="text-sm font-semibold leading-none">To</p>
                            <svg className='ml-3' width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="#C4C4C4" />
                                <mask id="mask0_19_1053" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={35} height={35}>
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#C4C4C4" />
                                </mask>
                                <g mask="url(#mask0_19_1053)">
                                    <rect x="-26.2441" y="10.3508" width="33.1429" height={32} rx={6} transform="rotate(-34 -26.2441 10.3508)" fill="#FFAC30" />
                                    <rect x="5.1936" y="20.1713" width="33.1429" height={32} rx={6} transform="rotate(-79 5.1936 20.1713)" fill="#20D7FF" />
                                    <rect x="25.863" y="48.7714" width="33.1429" height={32} rx={6} transform="rotate(-112 25.863 48.7714)" fill="#FFA0C2" />
                                    <rect x="16.7222" y="53.9514" width="33.1429" height={32} rx={6} transform="rotate(-154 16.7222 53.9514)" fill="#2189F0" />
                                </g>
                            </svg>
                            <p className="text-base ml-3 font-medium text-purple-500">CryptoKing.near</p>
                        </div>
                        <div className=' mb-6'>
                            <p className="text-sm font-semibold mb-3 leading-none">Amount</p>
                            <div className='bg-gray-50  flex justify-between items-center border rounded-md px-4 py-3 border-gray-200'>
                                <p className=" text-lg font-medium leading-none text-gray-500">0.0000</p>
                                <div className='flex items-cennter'>
                                    <div className='h-6 mr-4 border-l-2 border-gray-200'></div>
                                    <p className="text-base m-0 font-semibold text-gray-700">NEAR</p>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer inline-flex space-x-2.5 items-center justify-start w-full h-10 px-2.5 bg-purple-500 rounded-lg">
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.90009 0.0999756L19.7991 1.51498L21.2131 11.415L12.0211 20.607C11.8336 20.7944 11.5793 20.8998 11.3141 20.8998C11.0489 20.8998 10.7946 20.7944 10.6071 20.607L0.707093 10.707C0.519622 10.5194 0.414307 10.2651 0.414307 9.99998C0.414307 9.73481 0.519622 9.4805 0.707093 9.29298L9.90009 0.0999756ZM12.7281 8.58598C12.9138 8.77166 13.1344 8.91895 13.377 9.01942C13.6197 9.11989 13.8798 9.17157 14.1424 9.17153C14.4051 9.17148 14.6652 9.1197 14.9078 9.01915C15.1504 8.91859 15.3709 8.77123 15.5566 8.58548C15.7423 8.39972 15.8896 8.17921 15.99 7.93654C16.0905 7.69386 16.1422 7.43377 16.1421 7.17112C16.1421 6.90847 16.0903 6.6484 15.9898 6.40576C15.8892 6.16312 15.7418 5.94266 15.5561 5.75698C15.3703 5.57129 15.1498 5.424 14.9072 5.32353C14.6645 5.22306 14.4044 5.17138 14.1417 5.17142C13.6113 5.17152 13.1026 5.38233 12.7276 5.75748C12.3526 6.13262 12.1419 6.64138 12.142 7.17183C12.1421 7.70228 12.3529 8.21096 12.7281 8.58598Z" fill="white" />
                            </svg>
                            <div className="inline-flex flex-col items-start justify-center flex-1">
                                <div className="w-1 h-2.5" />
                                <p className="w-full text-base font-semibold leading-snug text-center text-white">Make  Offer</p>
                                <div className="w-1 h-3" />
                            </div>
                            <div className="flex items-center justify-center w-4 h-6 py-0.5 pl-0.5" />
                        </div>

                    </Modal.Body>

                </Modal>
            </div>

        </>

    )
};

export default page5;
