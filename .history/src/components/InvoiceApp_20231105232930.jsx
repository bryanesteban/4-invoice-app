import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () =>{

    const {id, name, client, company, items} = getInvoice();

    const {name: nameClient, lastname, address } = client;
    const { country, city, street, number} = client.address;

    return(
       <>
            <h1>Ejemplo Factura</h1>
            <div className="container">
                <ul className ="list-group">
                    <li className="list-group-item">Id: {id}</li>
                    <li className="list-group-item">Name: {name}</li>
                </ul>

                <h3>Datos del Cliente</h3>
                <ul className="list-group">
                    <li className="list-group-item">{nameClient} {lastname}</li>
                    <li className="list-group-item">{country}</li>
                    <li className="list-group-item">{city}</li>
                    <li className="list-group-item">{street} {number}</li>
                </ul>
                <h3> Datos de la empresa</h3>
                <ul className="list-group">
                    <li className="list-group-item"> {company.name}</li>
                    <li className="list-group-item"> {company.fiscalNumber}</li>
                </ul>
            </div>
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