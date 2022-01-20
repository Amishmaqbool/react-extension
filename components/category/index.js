import React from 'react'

const Category = ({ checkIcon, categoryIcon, title }) => {
    return (
        <div className='flex items-center mb-4'>
            {checkIcon}
            {categoryIcon}
            <p className="pl-3 text-base font-semibold text-gray-700">{title}</p>
        </div>
    )
}

export default Category
