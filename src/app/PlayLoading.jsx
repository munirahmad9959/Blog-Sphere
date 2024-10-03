import React from 'react';
import Image from 'next/image';

const PlayLoading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            {/* Logo at the top */}
            <div className="absolute top-8 text-3xl font-semibold font-serif">
                BlogSphere
            </div>

            {/* Centered Spinner */}
            <Image
                src="/spinner.gif"
                alt="Loading..."
                width={100}
                height={100}
                unoptimized={true}
            />
        </div>
    );
};

export default PlayLoading;
