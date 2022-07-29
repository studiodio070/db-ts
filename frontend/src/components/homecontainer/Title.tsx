import React from 'react'

function Title({ title, description }) {
    return (
        <div className='text-xl justify-start w-100'>
            <h1 className="font-ptmono">
                {title}
            </h1>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Title