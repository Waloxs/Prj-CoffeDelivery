import { UserProvider } from "@/contexts/Contexts";
import Intro from "./intro";
import Main from "./main";
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <Intro />   
      <Main />
    </>
  );
}
