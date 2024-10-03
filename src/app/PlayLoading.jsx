import React from 'react'
import Image from 'next/image'

const PlayLoading = () => {
    return (
        <>
           
            <Image
                src="/spinner.gif"
                alt="Loading..."
                width={100}
                height={100}
                unoptimized={true}
            />
        </>
    )
}

export default PlayLoading
