'use client'

import { baloo, roboto } from "./fonts/fonts";

import Coffe from '@/assets/Coffe.png'
import Cart_Icon from '@/assets/Cart-icon.png'
import Coffe_Icon from '@/assets/Coffe-icon.png'
import Embalagem_Icon from '@/assets/Embalagem-icon.png'
import Time_Icon from '@/assets/Time.png'

const Intro = () => {
    return (
        <div className="flex items-center justify-between max-[1155px]:pl-[70px] 
            max-[1155px]:pr-[70px] mt-[4rem] pl-[150px] pr-[150px]
            max-[775px]:justify-center">
            <div>
                <div className="flex flex-col gap-1">
                    <span className={`${baloo.className} flex text-5xl font-bold max-w-[20ch] 
                    max-[1335px]:text-4xl max-[1245px]:text-3xl max-[895px]:text-xl
                    max-[775px]:text-center max-[775px]:text-4xl
                    max-[775px]:max-w-[20ch] max-[555px]:text-2xl
                    max-[555px]:max-w-full max-[420px]:text-xl
                    max-[370px]:text-[1rem]`}>
                        Encontre o café perfeito para qualquer hora do dia
                    </span>
                    <span className={`${roboto.className} text-[1rem] text-[#403937] font-light max-[1335px]:max-w-[40ch] 
                    max-[1245px]:text-xs max-[775px]:text-center max-[775px]:text-[0.75rem]
                    max-[775px]:max-w-full max-[555px]:hidden`}>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </div>

                <div className="flex gap-[2rem] mt-[2rem] max-[995px]:flex-col max-[995px]:gap-[1rem] 
                max-[775px]:flex-row max-[775px]:justify-center
                max-[555px]:flex-col max-[555px]:items-center ">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <img src={`${Cart_Icon.src}`} alt="" className="w-[1.5rem]" />
                            <span className={`${roboto.className} text-[0.85rem] text-[#403937] font-normal max-[1190px]:text-xs`}>Compra simples e segura</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src={`${Time_Icon.src}`} alt="" className="w-[1.5rem]"/>
                            <span className={`${roboto.className} text-[0.85rem] text-[#403937] font-normal max-[1190px]:text-xs`}>Compra simples e segura</span>
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <img src={`${Embalagem_Icon.src}`} alt="" className="w-[1.5rem]"/>
                            <span className={`${roboto.className} text-[0.85rem] text-[#403937] font-normal max-[1190px]:text-xs`}>Compra simples e segura</span>

                        </div>
                        <div className="flex items-center gap-3">
                            <img src={`${Coffe_Icon.src}`} alt="" className="w-[1.5rem]"/>
                            <span className={`${roboto.className} text-[0.85rem] text-[#403937] font-normal max-[1190px]:text-xs`}>Compra simples e segura</span>

                        </div>
                    </div>
                </div>
            </div>

            <div className="max-[775px]:hidden">
                <img src={Coffe.src} alt="" className="max-w-[550px] max-[965px]:max-w-[400px]"/>
            </div>
        </div>
    )
}

export default Intro;