import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () =>{

    const {id, name, client, company, items} = getInvoice();

    const {name: nameClient, lastname, address } = client;
    const { country, city, street, number} = client.address;

    return(
       <>
        <div className="container">

            <div class="card" style="width: 18rem;"></div>

            <h1>Ejemplo Factura</h1>
                <ul className ="list-group">
                    <li className="list-group-item">Id: {id}</li>
                    <li className="list-group-item">Name: {name}</li>
                </ul>
            <div className="row">
                <div className="col">
                    <h3>Datos del Cliente</h3>
                    <ul className="list-group">
                        <li className="list-group-item active">{nameClient} {lastname}</li>
                        <li className="list-group-item">{country} / {city}</li>
                        <li className="list-group-item">{street} {number}</li>
                    </ul>
                </div>
                <div className="col">
                    <h3> Datos de la empresa</h3>
                    <ul className="list-group">
                        <li className="list-group-item active"> {company.name}</li>
                        <li className="list-group-item"> {company.fiscalNumber}</li>
                    </ul>
                </div>
            </div>
            <h3> Productos de la factura</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({producto, price,quantity}) => (
                        
                        <tr key = { id }>
                            <td>{producto}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>

       </> 
    )
}