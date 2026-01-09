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


 interface CreateUserResponse {
  user: {
    id: string;
    name: string;
    email: string;
    lastName: string;
    telefone: string;
    addressId?: string;
  };
  token: string;
}

const onSubmit = async (data: any) => {
    console.log(data)
  try {
    const response = await axios.post<CreateUserResponse>(
      'https://prj-coffedelivery.onrender.com/api/users',
      {
        email: data.email,
        password: data.senha,
        name: data.nome,
        lastName: data.sobrenome,
        telefone: data.telefone
      }
    );

    const responseData = response.data; // agora TypeScript sabe o tipo
    localStorage.setItem('id', responseData.user.id);
    localStorage.setItem('token', responseData.token);

    router.push('/checkout');
  } catch (err: any) {
    console.error(err.response?.data || err.message);
  }
};  

    return (
        <div className="flex w-full justify-center h-[100vh] items-center max-[440px]:w-full">
          <div className='flex w-[90%] h-[80%] justify-center max-[440px]:w-full'>
            <div className="flex bg-[#8663C9] rounded-xl w-full max-[1000px]:hidden">
                <div className='flex items-center pl-[5rem]'>
                    <span className={`${baloo.className} text-white text-5xl font-bold`}>Crie sua Conta!</span>
                </div>
            </div>

            <div className='flex flex-col w-[40%] max-[1000px]:bg-[#8663C9] 
            max-[1000px]:rounded-xl max-[850px]:w-[60%] max-[700px]:w-[80%] 
            max-[550px]:w-[100%] max-[1000px]:w-[60%]'>
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