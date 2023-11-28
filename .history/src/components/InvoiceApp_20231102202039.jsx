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
                <li>{nameClient} {lastname}</li>
                <li>{country}</li>
                <li>{city}</li>
                <li>{street} {number}</li>
            </ul>
       </> 
    )
}