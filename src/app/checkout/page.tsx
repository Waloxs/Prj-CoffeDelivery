'use client'

import Form from "@/components/Form";
import Header from "@/components/Header";
import { UserContext } from "@/contexts/Contexts";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";



export default function Page() {
    
  
 const { setValue } = useContext(UserContext);
 const { list } = useContext(UserContext);

 if(list.length === 0){
    redirect('/');
 } 

 useEffect(() => {

  const token = localStorage.getItem('token');

  if(!token){
    redirect('/login');
  }

     setValue(null);
  }, [setValue])

  return (
    <>
      <Header />
      <Form />
    </>
  );
}
