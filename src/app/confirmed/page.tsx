'use client'

import Header from "@/components/Header";
import { UserContext } from "@/contexts/Contexts";
import { useContext, useEffect } from "react";
import ConfirmContent from "@/components/ConfirmContent";

export default function Page() {

  const { setValue } = useContext(UserContext);

  useEffect(() => {
     setValue(null);
  }, [setValue])

  return (
    <>
      <Header />
      <ConfirmContent />
    </>
  );
}
