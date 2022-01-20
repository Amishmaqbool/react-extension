import React from 'react';

const Activity = ({activityDetail, time, icon}) => {
    return (
        <div className="flex items-start px-5 pb-6">
            <div>
               {icon}
            </div>
            <div className="pl-4">
                {activityDetail}
                <p className="text-xs font-medium text-gray-500">{time}</p>
            </div>
        </div>
    )
};

export default Activity;
