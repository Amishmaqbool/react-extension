import React from 'react';
import Image from 'next/image';

const CatagoryCard = ({bgColor, title, icon}) => {
    return (
        <div>
            <div className={`${bgColor} h-24 flex flex-col justify-between p-3 rounded-md`}>
                {icon}
                <div className="inline-flex space-x-10 items-center justify-between w-32 h-5">
                    <p className="text-base font-semibold text-center text-gray-700 text-opacity-70">{title}</p>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L1 9" stroke="#6F6E73" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

        </div>
    )

};

export default CatagoryCard;
