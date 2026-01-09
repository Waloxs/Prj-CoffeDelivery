'use client'

import { baloo } from "@/app/fonts/fonts";
import lixo from '@/assets/lixo.png';
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/Contexts";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { roboto } from "@/app/fonts/fonts";
import Link from "next/link";


const Content = ({ handleSubmit }: any ) => {

    const { list } = useContext(UserContext);
    const { setList } = useContext(UserContext);
    const { setValue, value } = useContext(UserContext);


    const [count, setCount] = useState(list.map((item: any) => item.quantidade));
    


    const increment = (id: number) => {
        const newCount = [...count];
        newCount[id]++;
        setCount(newCount);
    }

    
    const decrement = (id: number) => {
        const newCount = [...count];

        if(newCount[id] > 1) {
            newCount[id]--;
            setCount(newCount);
        }
    }
    

    const deleteCoffe = (id: number) => {
        const newList = list.filter((item: any) => item.id !== id);
        setList(newList);
        setValue(value - 1);
    }

    const totalItems = list.reduce((acc: number, item: any, index: number) => {
        return acc + count[index];
      }, 0);

    const subtotal = list.reduce((acc: number, item: any, index: number) => {
        const price = Number(item.price.replace(",", "."));
        return acc + price * count[index];
      }, 0);

    const entrega = '5,00';

    return (
        <div className="flex flex-col gap-4">
            <span className={`${baloo.className} font-medium`}>Cafés Selecionados</span>

            <div className="bg-[#F3F2F2] p-8 rounded-md">
                    <div className="flex flex-col gap-[3rem]">
                        {list.map((item: any, index: number) => 
                          <div key={item.id} className="flex flex-col">
                            <div className="flex justify-between border-b-2 pb-7"> 
                                <div className="flex gap-4">
                                    <img src={item.img} className="w-[60px] object-cover"/>
                                      
                                      <div className="flex flex-col gap-2">
                                        <span>{item.title}</span>

                                        <div className="flex gap-2">
                                            <div className="flex gap-1 bg-[#E6E5E5] pt-[0.25rem] pb-[0.25rem] pl-2 pr-2 items-center rounded-lg self-start">
                                                    <span className="text-[#8047F8] text-xl cursor-pointer" onClick={() => decrement(index)}><GrFormSubtract /></span>
                                                    <span>{count[index]}</span>
                                                    <span className="text-[#8047F8] text-xl cursor-pointer" onClick={() => increment(index)}><IoMdAdd /></span>
                                            </div>

                                            <div className="flex gap-1 bg-[#E6E5E5] pt-[0.25rem] pb-[0.25rem] pl-2 pr-2 items-center rounded-lg cursor-pointer" onClick={() => deleteCoffe(item.id)}>
                                                <img src={lixo.src} alt="" />
                                                <span className="text-xs">REMOVER</span>
                                            </div>
                                        </div>
                                      </div>
                                </div>
                                <span className={`${roboto.className} text-lg font-medium max-[393px]:text-sm max-[380px]:hidden`}>R$ {(Number(item.price.replace(',','.')) * count[index]).toFixed(2)} </span>
                            </div> 
                          </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3 pt-4">
                            <div className="flex justify-between"> 
                            <span className={`${roboto.className}`}>Total de itens</span>
                            <span className={`${roboto.className} text-xl`}>R$ {subtotal.toFixed(2)}</span>
                            </div> 
                            
                            <div className="flex justify-between">
                            <span className={`${roboto.className}`}>Entrega</span>
                            <span className={`${roboto.className} text-xl`}>R$ {entrega}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className={`${roboto.className} text-xl font-medium`}>Total</span>
                                <span className={`${roboto.className} text-2xl font-medium`}>R$ {(subtotal + Number(entrega.replace(',','.'))).toFixed(2)}</span>
                            </div>
                        </div>

                        <div onClick={() => handleSubmit()}>
                           
                                <div className="bg-[#DBAC2C] w-full text-white p-4 text-center rounded-md cursor-pointer">
                                    <span className="font-medium">CONFIRMAR PEDIDO</span>
                                </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Content;