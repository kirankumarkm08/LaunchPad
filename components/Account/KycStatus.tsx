import React from 'react';
import { Badge } from '../ui/badge';

function KycStatus() {
    return (
        
        <div className='hidden md:flex justify-between mb-3 bg-dark-100 rounded-4xl px-5 py-7'>
            <div className='h3-bold text-light700_dark-700'>
                <p>KYC Status</p>
                <p className='text-dark-text-500 small-regular'>Last Verified 23 Jan 2024</p>
            </div>
            <Badge variant="green" className='rounded-lg self-center'>Verified</Badge>
        </div>
        
    );
}

export default KycStatus;