'use client'

import { baloo, roboto } from "./fonts/fonts";

import Coffe from '@/assets/Coffe.png'
import Cart_Icon from '@/assets/Cart-icon.png'
import Coffe_Icon from '@/assets/Coffe-icon.png'
import Embalagem_Icon from '@/assets/Embalagem-icon.png'
import Time_Icon from '@/assets/Time.png'

const Intro = () => {
    return (
        <div className="flex items-center justify-between pl-[150px] pr-[150px] mt-[4rem]">
            <div>
                <div className="flex flex-col gap-1">
                    <span className={`${baloo.className} flex text-5xl font-bold max-w-[20ch]`}>
                        Encontre o café perfeito para qualquer hora do dia
                    </span>
                    <span className={`${roboto.className} text-[1rem] text-[#403937] font-light`}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </div>

                <div className="flex gap-[2rem] mt-[2rem]">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <img src={`${Cart_Icon.src}`} alt="" className="w-[1.5rem]" />
                            <span className={`${roboto.className} text-[0.85rem] text-[#403937] font-normal`}>Compra simples e segura</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src={`${Time_Icon.src}`} alt="" className="w-[1.5rem]"/>
                            <span className={`${roboto.className} text-[0.85rem] text-[#403937] font-normal`}>Compra simples e segura</span>
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <img src={`${Embalagem_Icon.src}`} alt="" className="w-[1.5rem]"/>
                            <span className={`${roboto.className} text-[0.85rem] text-[#403937] font-normal`}>Compra simples e segura</span>

                        </div>
                        <div className="flex items-center gap-3">
                            <img src={`${Coffe_Icon.src}`} alt="" className="w-[1.5rem]"/>
                            <span className={`${roboto.className} text-[0.85rem] text-[#403937] font-normal`}>Compra simples e segura</span>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img src={Coffe.src} alt="" className="max-w-[550px]"/>
            </div>
        </div>
    )
}

export default Intro;