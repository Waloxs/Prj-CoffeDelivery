'use client'

import { UserProvider } from "@/contexts/Contexts";
import Intro from "./intro";
import Main from "./main";
import Header from "@/components/Header";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
  
    const token = localStorage.getItem('token');
  
    if(!token){
      router.push('/login');
    }
  
    }, [])

  return (
    <>
      <Header />
      <Intro />   
      <Main />
    </>
  );
}
