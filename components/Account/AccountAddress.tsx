import React from 'react';
import Image from 'next/image';

function AccountAddress() {
    return (
        <div className="flex flex-col mb-9 xl:mb-0">
            <p className='text-light-text-500 text-bold capitalize'>your account</p>
            <div className="flex gap-4">
                <p className='text-dark-text-950 h3-bold xl:h1-bold capitalize'>0x11...2409</p>
                <Image
                    src="/assets/icons/copy-icon.svg"
                    alt="copy_icon"
                    className="rounded-md"
                    width={32}
                    height={32}
                />
                <Image
                    src="/assets/icons/link-icon.svg"
                    alt="link_icon"
                    className="rounded-md"
                    width={32}
                    height={32}
                />
            </div>
        </div>
    );
}

export default AccountAddress;