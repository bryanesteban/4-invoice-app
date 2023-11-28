import { getInvoice } from "../services/getInvoice"
import { ClientView } from "./ClientView";
import { InvoiceView } from "./InvoiceView";

export const InvoiceApp = () =>{

    const {id, name, client, company, items} = getInvoice();

    //const {name: nameClient, lastname, address } = client;

    //const { country, city, street, number} = client.address;

    return(
       <>
        <div className="container">

            <div className="card my-3" >

                <div className= "card-header">

                    Ejemplo Factura
                </div>

                <div className="card-body">
                       <InvoiceView id= {id} name ={name}/>
                    <div className="row my-3">
                        <div className="col">
                           <ClientView client = {client} /> 
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
            </div>
        </div>

       </> 
    )
}