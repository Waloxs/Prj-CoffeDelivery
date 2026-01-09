import Coffe_Img1 from '@/assets/Coffe-img1.png'
import Coffe_Img2 from '@/assets/Coffe-img2.png'


type CoffeItem = {
    id: number;
    img: string;
    modelo: string;
    title: string;
    subTitle: string;
    price: string;
    quantidade: number;
  };


export const CoffeList:CoffeItem[] = [
    { id: 1, img: Coffe_Img1.src, modelo: 'Tradicional', title: 'Expresso Tradicional', subTitle: 'O tradicional café feito com água quente e grãos moídos', price: '9,90', quantidade: 0 },
    { id: 2, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },
    { id: 3, img: Coffe_Img1.src, modelo: 'Tradicional', title: 'Expresso Tradicional', subTitle: 'O tradicional café feito com água quente e grãos moídos', price: '9,90', quantidade: 0 },
    { id: 4, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },
    { id: 5, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },
    
    { id: 6, img: Coffe_Img1.src, modelo: 'Tradicional', title: 'Expresso Tradicional', subTitle: 'O tradicional café feito com água quente e grãos moídos', price: '9,90', quantidade: 0 },
    { id: 7, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },
    { id: 8, img: Coffe_Img1.src, modelo: 'Tradicional', title: 'Expresso Tradicional', subTitle: 'O tradicional café feito com água quente e grãos moídos', price: '9,90', quantidade: 0 },
    { id: 9, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },
    { id: 10, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },

    
    { id: 11, img: Coffe_Img1.src, modelo: 'Tradicional', title: 'Expresso Tradicional', subTitle: 'O tradicional café feito com água quente e grãos moídos', price: '9,90', quantidade: 0 },
    { id: 12, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },
    { id: 13, img: Coffe_Img1.src, modelo: 'Tradicional', title: 'Expresso Tradicional', subTitle: 'O tradicional café feito com água quente e grãos moídos', price: '9,90', quantidade: 0 },
    { id: 14, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },
    { id: 15, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 },
    { id: 16, img: Coffe_Img2.src, modelo: 'Tradicional', title: 'Expresso Americano', subTitle: 'Expresso diluído, menos intenso que o tradicional', price: '9,90', quantidade: 0 }
]