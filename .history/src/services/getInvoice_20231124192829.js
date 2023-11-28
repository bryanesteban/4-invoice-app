import { invoice } from "../data/invoice"

export const getInvoice = () => {
   
    //console.log(invoice);
    
    /*let total = 0;
    invoice.items.forEach( items =>{
        total =total + items.price * items.quantity;

    });*/

    const total = calculateTotal(items);

    return {...invoice,total};
}

export const calculateTotal = (items = []) =>{
    return items
    .map( item => item.price * item.quantity) 
    .reduce((accumulator,currentValue) => accumulator + currentValue, 0)
}