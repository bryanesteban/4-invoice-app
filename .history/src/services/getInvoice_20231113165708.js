import { invoice } from "../data/invoice"

export const getInvoice = () => {
   
    //console.log(invoice);
    
    let total = 0;
    invoice.items.forEach( items =>{
        total =total + items.price * items.quantity;

    });

    return {...invoice,total : total};
}