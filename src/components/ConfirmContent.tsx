'use client'


import { baloo } from "@/app/fonts/fonts";
import confirmTimer from "@/assets/confirmTimer.png"
import confirmDollar from "@/assets/confirmDollar.png"
import confirmMap from "@/assets/confirmMap.png"
import ilustracion from '@/assets/Illustration.png'


const ConfirmContent = () => {

    return (
        <div className="flex pl-[140px] pr-[140px] mt-[4rem] w-full justify-between max-[700px]:px-[40px]">
            <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col">
                    <span className={`${baloo.className} text-[#C47F17] text-3xl font-bold`}>Uhu! Pedido confirmado</span>
                    <span>Agora é só aguardar que logo o café chegará até você</span>
                </div>

                <div className="flex flex-col gap-6 border-2 self-start p-[2rem] border-[#d4b86b] rounded-tr-3xl rounded-tl-xl rounded-bl-3xl rounded-br-xl">
                    <div className="flex items-center gap-3">
                        <img src={confirmMap.src} alt="" />
                        <div>
                            <span>Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={confirmTimer.src} alt="" />
                        <div>
                            <span>Previsão da Entrega</span>
                            <span></span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={confirmDollar.src} alt="" />
                        <div className="">
                            <span>Pagamento na Entrega</span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

            <img src={ilustracion.src} alt="" className="max-[1155px]:hidden"/>

        </div>
    )
}

export default ConfirmContent;