'use client'

import Map from '@/assets/Map.png';
import Cart from '@/assets/Cart.png';
import Logo  from '@/assets/Logo.png';
import { roboto } from '../app/fonts/fonts';
import { useContext } from 'react';
import { UserContext } from '@/contexts/Contexts';
import Link from 'next/link';


const Header = () => {

    const { value } = useContext(UserContext);
    const { list } = useContext(UserContext);


    return (
        <div className='flex justify-between pl-[140px] pr-[140px] mt-6'>
            <img src={Logo.src} alt="" className='h-7 w-15'/>

            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2 bg-[#EBE5F9] rounded-md p-2'>
                    <img src={Map.src} alt="" />
                    <span className={`text-xs ${roboto.className} text-[#4B2995]`}>Rio Grande, RS</span>
                </div>

            {list.length > 0 ? 
              <Link href='/checkout'>
                <div className='relative cursor-pointer'>
                    <img src={Cart.src} alt="" />
                    {value > 0 ? 
                    <span className='flex justify-center items-center absolute top-[-0.75rem] right-[-0.75rem] bg-red-600 text-white rounded-[50%] text-xs w-[25px] h-[25px]'>{value}</span>
                    : ''}
                </div>
              </Link>
            : 
                <div className='relative cursor-pointer'>
                    <img src={Cart.src} alt="" />
                    {value > 0? 
                    <span className='flex justify-center items-center absolute top-[-0.75rem] right-[-0.75rem] bg-red-600 text-white rounded-[50%] text-xs w-[25px] h-[25px]'>{value}</span>
                    : ''}
                </div>
            }
            </div>
        </div>
    )
}

export default Header;