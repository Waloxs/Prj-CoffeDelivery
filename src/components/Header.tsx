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
        <div className='flex justify-between mt-6 max-[1155px]:pl-[70px] 
        max-[1155px]:pr-[70px] pl-[150px] pr-[150px]
        max-[555px]:pr-[20px] max-[555px]:pl-[20px]'>
            <img src={Logo.src} alt="" className='h-7 w-15'/>

            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2 bg-[#EBE5F9] rounded-md p-2'>
                    <img src={Map.src} alt="" className='w-[10px] max-[550px]:w-[7px]'/>
                    <span className={`text-xs ${roboto.className} text-[#4B2995] max-[550px]:text-[0.5rem]`}>Rio Grande, RS</span>
                </div>

            {list.length > 0 ? 
              <Link href='/checkout'>
                <div className='relative cursor-pointer'>
                    <img src={Cart.src} alt="" className='w-[40px] max-[550px]:w-[25px]'/>
                    {value > 0 ? 
                    <span className='flex justify-center items-center absolute top-[-0.75rem] right-[-0.75rem]
                     bg-red-600 text-white rounded-[50%] text-xs w-[25px] h-[25px] 
                     max-[500px]:w-[15px] max-[500px]:h-[15px]
                     max-[500px]:text-[0.5rem] max-[500px]:top-[-0.5rem]
                     max-[500px]:right-[-0.5rem]'>{value}</span>
                    : ''}
                </div>
              </Link>
            : 
                <div className='relative cursor-pointer'>
                    <img src={Cart.src} alt="" className='w-[40px] max-[550px]:w-[25px]'/>
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