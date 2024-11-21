import React from 'react'
import LinkButton from '../ui/nextLink';

const BuyStakeZee = () => {
  return (
        <div className='flex flex-col xl:flex-row gap-4 xl:justify-between px-5 py-7 bg-dark-100 rounded-4xl xl:items-center' >
            <div className='h3-bold text-light700_dark-700 flex-1'>
                <p>Tokens</p>
                <p className='text-dark-text-500 small-regular'>Buy/Stake $ZEE tokens</p>
            </div>
            <div className="flex flex-1">
                <LinkButton href='' variant='primary' className='mr-2.5 flex-1'>Buy $ZEE</LinkButton>
                <LinkButton href='' variant='primary' className='flex-1'>Stake</LinkButton>
            </div>
        </div>
    )
}

export default BuyStakeZee;