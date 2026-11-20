import React from 'react'

const Footer = ({address, hours}) => {
    return (
        <footer>
            <p className='address'>{address}</p>
            <p className='hours'>{hours}</p>
        </footer>
    )
}

export default Footer