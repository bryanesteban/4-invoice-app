import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = (invoice) =>{

    const invoice = getInvoice();

    return(
       <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>Id: {invoice.id}</li>
                <li>Name: {invoice.name}</li>
            </ul>

            <h3>Datos del Cliente</h3>
            <ul>
                <li>{invoice.client.name}</li>
                <li>{invoice.client.lastname}</li>
                <li>{invoice.client.address.country}</li>
                <li>{invoice.client.address.city}</li>
                <li>{invoice.client.address.street}</li>
            </ul>
       </> 
    )
}