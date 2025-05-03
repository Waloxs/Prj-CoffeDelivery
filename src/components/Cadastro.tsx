'use client'

import { useForm } from 'react-hook-form';
import { baloo } from '@/app/fonts/fonts';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation';

export const Page = () => {

    const router = useRouter();

    const { register, handleSubmit } = useForm();
    const [ passwordVisible, setPasswordVisible ] = useState<boolean>(false); 


    const handlePassword = () => {
        setPasswordVisible(!passwordVisible);
    }


    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post('http://localhost:3000/api/users', {
                email: data.email,
                password: data.senha,
                name: data.nome,
                lastName: data.sobrenome,
                telefone: data.telefone
            });

            if ((response.data as any).user?.id) {
                localStorage.setItem('id',((response.data as any).user.id));
            } else {
                console.log("User ID não encontrado");
            }
        
            const token = response.data;

            localStorage.setItem('token', JSON.stringify(token));

            router.push('/checkout');
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="flex w-full justify-center h-[100vh] items-center">
          <div className='flex w-[90%] h-[80%] justify-center'>
            <div className="flex bg-[#8663C9] rounded-xl w-full max-[1000px]:hidden">
                <div className='flex items-center pl-[5rem]'>
                    <span className={`${baloo.className} text-white text-5xl font-bold`}>Crie sua Conta!!!</span>
                </div>
            </div>

            <div className='flex flex-col w-[40%] max-[1000px]:bg-[#8663C9] max-[1000px]:h-[max-content]
             max-[1000px]:rounded-xl max-[850px]:w-[60%] max-[560px]:w-[80%] max-[400px]:w-[100%]'>
                <span className={`${baloo.className} p-5 text-3xl font-semibold max-[1000px]:text-white`}>Cadastro</span>
                <form className='flex flex-col gap-7 h-[100%] p-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-5'>
                            <input 
                            {...register('nome')}
                                placeholder="NOME"
                                className={`${baloo.className} p-3 rounded-md bg-[#fff] text-[#000] border w-full outline-none focus:ring-2 focus:ring-[#8663C9]`}
                            />

                            <input 
                            {...register('sobrenome')}
                                placeholder="SOBRENOME"
                                className={`${baloo.className} p-3 rounded-md bg-[#fff] text-[#000] border w-full outline-none focus:ring-2 focus:ring-[#8663C9]`}
                            />

                            <input 
                            {...register('email')}
                                placeholder="EMAIL"
                                className={`${baloo.className} p-3 rounded-md bg-[#fff] text-[#000] border w-full outline-none focus:ring-2 focus:ring-[#8663C9]`}
                            />

                            <div className='relative'>
                                <input 
                                    {...register('senha')}
                                    placeholder="SENHA"
                                    type={!passwordVisible ? 'password' : ''}
                                    className={`${baloo.className} p-3 rounded-md bg-[#fff] text-[#000] border w-full outline-none focus:ring-2 focus:ring-[#8663C9]`}
                                />

                                <div className='absolute right-4 top-[35%]'>
                                    {!passwordVisible ? <FaEye onClick={handlePassword}/> : <FaEyeSlash onClick={handlePassword}/>}
                                </div>

                            </div>

                            <input 
                            {...register('telefone')}
                                placeholder="TELEFONE"
                                className={`${baloo.className} p-3 rounded-md bg-[#fff] text-[#000] border w-full outline-none focus:ring-2 focus:ring-[#8663C9]`}
                            />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#8663C9] w-full text-white p-4 text-center rounded-md hover:opacity-90 transition 
                        max-[1000px]:bg-[#fff] max-[1000px]:text-[#8663C9]"
                    >
                        CRIAR
                    </button>

                </form>
            </div>
           </div>
        </div>
    )
}

export default Page;