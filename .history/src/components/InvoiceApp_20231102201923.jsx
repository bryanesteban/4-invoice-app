import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () =>{

    const {id, name, client, company, items} = getInvoice();

    const {name: nameClient, lastname, address } = client;
    const { country, city, street, number} = client.address;

    return(
       <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
            </ul>

            <h3>Datos del Cliente</h3>
            <ul>
                <li>{nameClient}</li>
                <li>{lastname}</li>
                <li>{address.country}</li>
                <li>{address.city}</li>
                <li>{address.street}</li>
            </ul>
       </> 
    )
}