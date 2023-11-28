import { invoice } from "../data/invoice"

export const getInvoice = () => {
   
    //console.log(invoice);
    return invoice;
    let total = 0;
    invoice.items.forEach( items =>{
        total =total + items.price * items.quantity;

    })

}