import React from 'react'

function HeaderOption({Icon, title,selected,onClick}) {
    return (
        <div className={`flex hover:text-blue-500
         hover:border-blue-500 border-b-4 border-transparent pb-3 cursor-pointer ${selected &&'border-blue-500 text-blue-500'}`}>
            {Icon && <Icon  className='h-4'/>}
            <p className='hidden sm:inline-flex'>{title}</p>      
        </div>
    )
}

export default HeaderOption
