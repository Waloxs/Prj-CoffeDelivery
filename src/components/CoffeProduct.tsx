'use client'

import { CoffeList } from "@/data/Products";
import Cart from "@/assets/Cart-Comprar.png"
import { baloo, roboto } from "../app/fonts/fonts";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/contexts/Contexts";


const CoffeProduct = () => {

  const { setValue } = useContext(UserContext);
  const { setList } = useContext(UserContext);


    const [counts, setCounts] = useState<{ [id: number]: number }>(() => {
        const initialCounts: { [id: number]: number } = {};
        CoffeList.forEach(item => {
          initialCounts[item.id] = 1;
        });
        return initialCounts;
      });


      console.log(CoffeList);

      const [listCoffe, setListCoffe] = useState<typeof CoffeList>([]);
      //isso diz ao TypeScript que listCoffe é um array do mesmo tipo dos itens de CoffeList.
      
      const increment = (id: number) => {
        setCounts(prev => ({
          ...prev,
          [id]: prev[id] + 1,
        }));
      };
      
      const decrement = (id: number) => {
        setCounts(prev => ({
          ...prev,
          [id]: Math.max(1, prev[id] - 1),
        }));
      };

      const adcCart = (id: number) => {
        const item = CoffeList.find(coffee => coffee.id === id);
        //// buscar o primeiro café de acordo com o id que satisfaz a condição

        if (item) {
            const Qtd = {
              ...item,
              quantidade: counts[id]
            }

            const newList = [...listCoffe, Qtd];
            setListCoffe(newList);

            setValue(newList.length)
            setList(newList);
        }
    };
    
      
  
    return (
        <div className="grid grid-cols-4 gap-[4rem] px-[150px] mt-[2rem] max-[1400px]:grid-cols-2 
        max-[850px]:grid-cols-1 max-[850px]:mt-[5rem]
        max-[570px]:px-[100px] max-[450px]:px-[50px]">
            {CoffeList.map(item => (
                <div key={item.id} className="flex items-center flex-col bg-[#F3F2F2] p-2 gap-4 rounded-tr-[3rem] rounded-br-[0.5rem] rounded-tl-[0.5rem] rounded-bl-[3rem] relative">
                    <img src={item.img} alt="" className="absolute w-[6rem] top-[-2rem]" />
                    <span className="uppercase bg-[#F1E9C9] pl-2 pr-2 pt-1 pb-1 rounded-2xl text-xs text-[#C47F17] font-bold mt-[4rem]">{item.modelo}</span>
                   
                    <div className="flex flex-col items-center">
                        <span className={`${baloo.className} text-[1.25rem] font-semibold`}>{item.title}</span>
                        <span className="text-[#8D8686] max-w-[29ch] text-center max-[570px]:text-sm">{item.subTitle}</span>
                    </div>

                    <div className="flex items-center justify-between w-full p-4">
                        <div className="flex gap-1 items-center">
                            <span className={`${roboto.className}`}>R$</span>
                            <span className={`${roboto.className} font-extrabold text-xl text-[#574F4D]`}>{item.price}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 bg-[#E6E5E5] pt-[0.25rem] pb-[0.25rem] pl-2 pr-2 items-center rounded-lg">
                                <span className="text-[#8047F8] text-xl cursor-pointer"onClick={() => decrement(item.id)}><GrFormSubtract /></span>
                                <span>{counts[item.id]}</span>
                                <span className="text-[#8047F8] text-xl cursor-pointer" onClick={() => increment(item.id)}><IoMdAdd /></span>
                            </div>
                            <img src={Cart.src} alt="" className="w-[30px] cursor-pointer" onClick={() => adcCart(item.id)}/>
                        </div>
                    </div>
                </div>
                )
            )}
        </div>
    )
}

export default CoffeProduct;