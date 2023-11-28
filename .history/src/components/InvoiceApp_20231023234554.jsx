import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () =>{

    const invoice = getInvoice();

    return(
       <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>Id: {invoice.id}</li>
                <li>Id: {invoice.name}</li>
            </ul>
       </> 
    )
}