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
            <ul className ="">
                <li>{nameClient} {lastname}</li>
                <li>{country}</li>
                <li>{city}</li>
                <li>{street} {number}</li>
            </ul>
            <h3> Datos de la empresa</h3>
            <ul>
                <li> {company.name}</li>
                <li> {company.fiscalNumber}</li>
            </ul>
            <h3> Productos de la factura</h3>
            <table>
                <thead>
                    <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    </tr>
                    <tbody>
                        {items.map(({producto, price,quantity}) => (

                            <tr key = { id }>
                                <td>{producto}</td>
                                <td>{price}</td>
                                <td>{quantity}</td>
                            </tr>
                            ))}
                    </tbody>
                </thead>
            </table>

       </> 
    )
}