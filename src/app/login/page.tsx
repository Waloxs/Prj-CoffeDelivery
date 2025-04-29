'use client'

import { useForm } from 'react-hook-form';
import { baloo } from '../fonts/fonts';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export const Page = () => {

    const router = useRouter();

    const { register, handleSubmit } = useForm();
    const [ passwordVisible, setPasswordVisible ] = useState<boolean>(false); 
    const [ passwordValided, setPasswordValided] = useState(true);


    const handlePassword = () => {
        setPasswordVisible(!passwordVisible);
    }

    type Login = {
        message: string,
        token: string
    }

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.put<Login>('http://localhost:3000/api/users', {
                email: data.email,
                password: data.senha
            });

            
           if (response.status === 201){  
                setPasswordValided(true);
    
                const token = response.data.token;
                localStorage.setItem('token', token);
                router.push('/checkout');
            }
        }
        
        catch(err) {
            setPasswordValided(false);
            console.log(err);
        }
    }

    return (
        <div className="flex w-full justify-center h-[100vh] items-center">
          <div className='flex w-[90%] h-[80%] justify-center'>
            <div className="flex bg-[#8663C9] rounded-xl w-full">
                <div className='flex items-center pl-[5rem]'>
                    <span className={`${baloo.className} text-white text-5xl font-bold`}>Seja Bem-Vindo!</span>
                </div>
            </div>
        
            <div className='flex flex-col w-[40%]'>
                <span className={`${baloo.className} p-5 text-3xl font-semibold`}>Login</span>
                <form className='flex flex-col gap-[3rem] h-[100%] p-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-5'>
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

                                {!passwordValided ? <span className={`${baloo.className} absolute flex p-1 left-0 text-red-500`}>Usuário ou Senha inválida</span> : ''}

                            </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#8663C9] w-full text-white p-4 text-center rounded-md hover:opacity-90 transition"
                    >
                        ENTRAR
                    </button>

                    <div className="flex justify-center cursor-pointer">
                            <Link href='/cadastro'><span className={`${baloo.className} `}>Não tem? Crie uma</span></Link>
                    </div>
                </form>
            </div>
           </div>
        </div>
    )
}

export default Page;