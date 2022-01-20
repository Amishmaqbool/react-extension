import React from 'react';

const ExperianceCard = ({icon, title, detail, users}) => {
    return (
        <>
            <div className='flex w-full'>
                <div>
                  {icon}
                </div>
                <div className='flex justify-between w-full items-center'>
                    <div className='flex flex-col ml-3'>
                        <p className="text-base font-semibold text-gray-700 pb-1 ">{title}</p>
                        <p className="text-xs font-medium leading-none text-gray-500 pb-1">{detail}</p>
                        <p className="text-xs font-medium leading-snug text-indigo-500 pb-1">{users}</p>
                    </div>
                    <div>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.35229 2.66666L10.6856 7.99999L5.35229 13.3333" stroke="#6F6E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ExperianceCard;
