'use client'

import { useForm } from 'react-hook-form';
import { baloo } from '../fonts/fonts';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import Cadastro from '../../components/Cadastro';


export default function Page() {

    const router = useRouter();

    const { register, handleSubmit } = useForm();
    const [ passwordVisible, setPasswordVisible ] = useState<boolean>(false); 
    const [ passwordValided, setPasswordValided] = useState(true);
    const [ animation, setAnimation ] = useState(false);


    const handlePassword = () => {
        setPasswordVisible(!passwordVisible);
    }

    type Login = {
        message: string,
        token: string
    }

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post<Login>(`https://prj-coffedelivery.onrender.com/api/login`, {
                email: data.email,
                password: data.senha
            });
            
           if (response.status === 200){  
                setPasswordValided(true);
                const token = response.data.token;
                localStorage.setItem('token', token);
                localStorage.setItem('id',((response.data as any).user.id));
                router.push('/checkout');
            }
        }
        
        catch(err) {
            setPasswordValided(false);
            console.log(err);
        }
    }

    return (
        <div className={`relative flex w-full justify-center h-[100vh] items-center overflow-hidden`}>
        <div className={`absolute flex w-[90%] h-[80%] justify-center transition-transform duration-[1500ms] ease-in-out
            ${animation ? '-translate-x-[100vw]' : 'translate-x-0'}
        `}>

            <div className="flex bg-[#8663C9] rounded-xl w-full max-[1000px]:hidden">
                <div className='flex items-center pl-[5rem]'>
                    <span className={`${baloo.className} text-white text-5xl font-bold`}>Seja Bem-Vindo!</span>
                </div>
            </div>
        
            <div className='flex flex-col w-[40%] max-[1000px]:bg-[#8663C9] 
            max-[1000px]:rounded-xl max-[850px]:w-[60%] max-[700px]:w-[80%] 
            max-[500px]:w-[100%] max-[1000px]:w-[60%]'>
                <span className={`${baloo.className} p-5 text-3xl font-semibold max-[1000px]:text-white`}>Login</span>
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
                        className="bg-[#8663C9] w-full text-white p-4 text-center rounded-md hover:opacity-90 transition 
                        max-[1000px]:bg-[#fff] max-[1000px]:text-[#8663C9]"
                    >
                        ENTRAR
                    </button>

                    <div className="flex justify-center cursor-pointer" onClick={() => setAnimation(true)}>
                            <span className={`${baloo.className} max-[1000px]:text-white`}>Não tem? Crie uma</span>
                    </div>
                </form>
            </div>
           </div>


           <div
                className={`
                    flex w-[90%] justify-center absolute
                    transition-transform duration-[1500ms] ease-in-out
                    max-[440px]:w-[100vw]
                    ${animation ? 'translate-x-0' : 'translate-x-[100vw]'}
                `}
            >

                    <Cadastro />
                </div>
        </div>
    )
}
