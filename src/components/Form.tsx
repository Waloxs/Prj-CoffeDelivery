'use client'

import { baloo } from "@/app/fonts/fonts";
import mapYellow from '@/assets/map_yellow.png';
import dollar from '@/assets/dollar.png';
import { useForm } from 'react-hook-form';
import dinheiro from '@/assets/dinheiro.png'
import debito from '@/assets/debito.png'
import credito from '@/assets/credito.png'
import { useState } from "react";
import Content from "./Content";
import axios from "axios";
import { useRouter } from "next/navigation";


const Form = () => {

    const router = useRouter()

    const { register, handleSubmit } = useForm();
    const [selected, setSelected] = useState('debito')

    const id = localStorage.getItem('id');



    const handleSelected = ( item: string ) => {
        if (item === 'debito') {
            setSelected('debito')
        } else if (item === 'credito') {
            setSelected('credito')
        } else {
            setSelected('dinheiro')
        }
    }

    const handlePost = async (data: any) => {
        console.log(id);
       try {
        const response = await axios.post(`https://prj-coffedelivery.onrender.com/api/users/${id}/adress`, {
            bairro: data.bairro,
            complemento: data.complemento,
            rua: data.rua,
            cep: data.cep,
            cidade: data.cep,
            uf: data.uf,
            numero: parseInt(data.numero)
        });

        router.push('/confirmed');


       } catch (error) {
        console.log(error)
       }
    }

    return (
        <div className="grid mt-[4rem] mb-[3rem] pl-[140px] pr-[140px] grid-cols-[2fr_1.5fr] gap-[3rem] 
        max-[1200px]:grid-cols-[1fr]
        max-[800px]:px-[40px]
        max-[500px]:px-[10px]">
          <div className="flex flex-col gap-4">
            <span className={`${baloo.className} font-medium`}>Complete seu pedido</span>

            <div className="bg-[#F3F2F2] p-8 rounded-md">
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <img src={mapYellow.src} alt="" className="object-contain self-start"/>
                        <div className="flex flex-col">
                            <span>Endereço de Entrega</span>
                            <span className="text-[#574F4D] text-sm font-medium">Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </div>
                        <form className="flex flex-col gap-4 mt-[2rem]" onSubmit={handleSubmit(handlePost)}>
                            <input 
                                {...register('cep')}
                                placeholder="CEP"
                                className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border w-[calc(50%-0.5rem)]"
                            />

                            <input 
                                {...register('rua')}
                                placeholder="Rua"
                                className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border w-full"
                            />

                            <input 
                                    {...register('numero')}
                                    placeholder="Numero"
                                    className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border hidden max-[433px]:flex"
                                />

                            <input 
                                    {...register('complemento')}
                                    placeholder="Complemento"
                                    className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border hidden max-[433px]:flex"
                                />

                            <div className="flex gap-3 w-full">
                              <div className="flex flex-col gap-3 w-full">
                                <input 
                                    {...register('numero')}
                                    placeholder="Numero"
                                    className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border max-[433px]:hidden"
                                />

                              </div>

                              <div className="flex flex-col gap-3 w-full ">
                                <input 
                                    {...register('complemento')}
                                    placeholder="Complemento"
                                    className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border w-full max-[433px]:hidden"
                                />

                               
                              </div>
                            </div>

                            <input 
                                {...register('bairro')}
                                placeholder="Bairro"
                                className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border w-full"
                            />

                                <div className="flex gap-3 w-full">
                                    <input 
                                        {...register('cidade')}
                                        placeholder="Cidade"
                                        className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border w-full"
                                    />

                                    <input 
                                        {...register('uf')}
                                        placeholder="UF"
                                        className="p-3 rounded-md bg-[#EDEDED] text-[#8D8686] border w-[50px]"
                                    /> 
                                </div>
                        </form>
                    </div>
            </div>


            <div className="flex flex-col bg-[#F3F2F2] p-8 rounded-md gap-5">

                    <div className="flex gap-2">
                        <img src={dollar.src} alt="" className="object-contain self-start"/> 
                        <div className="flex flex-col">
                            <span>Pagamento</span>
                            <span className="text-[#574F4D] text-sm font-medium 
                            max-[600px]:text-[12px]
                            max-[540px]:text-[10px]">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                        </div>
                    </div>


                    <div className="grid grid-cols-3 gap-5">
                        <div 
                            className={`flex items-center justify-center gap-2 bg-[#E6E5E5] p-4 border-2 ${selected === 'debito' ? 'border-[#8047F8]' : 'border-transparent'} cursor-pointer`}
                            onClick={() => handleSelected('debito')}>

                            <img src={debito.src} alt="" className="w-[15px]"/>
                            <span className="text-[#574F4D] text-xs max-[895px]:text-[10px] max-[515px]:text-[8px]">
                                <span className="max-[640px]:hidden">CARTÃO DE CRÉDITO</span>
                                <span className="hidden max-[640px]:inline">CRÉDITO</span>
                            </span>

                        </div>

                        <div 
                          className={`flex items-center justify-center gap-2 bg-[#E6E5E5] p-4 border-2 ${selected === 'credito' ? 'border-[#8047F8]' : 'border-transparent'} cursor-pointer`}
                          onClick={() => handleSelected('credito')}
                          >
                          
                            <img src={credito.src} alt="" className="w-[15px]"/>
                            <span className="text-[#574F4D] text-xs max-[895px]:text-[10px]
                            max-[515px]:text-[8px]">
                                <span className="max-[640px]:hidden">CARTÃO DE DÉBITO</span>
                                <span className="hidden max-[640px]:inline">DÉBITO</span>
                            </span>
                        </div>

                        <div 
                            className={`flex items-center justify-center gap-2 bg-[#E6E5E5] p-4 border-2 ${selected === 'dinheiro' ? 'border-[#8047F8]' : 'border-transparent'} cursor-pointer`}
                            onClick={() =>handleSelected('dinheiro')}>

                            <img src={dinheiro.src} alt="" className="w-[15px]"/>
                            <span className="text-[#574F4D] text-xs max-[895px]:text-[10px]
                            max-[515px]:text-[8px]">DINHEIRO</span>
                        </div>
                    </div>

            </div>
          </div>

            <Content handleSubmit={handleSubmit(handlePost)}/>

        </div>
    )
}

export default Form;