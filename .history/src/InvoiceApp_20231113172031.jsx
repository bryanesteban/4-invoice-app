import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/totalView";


export const InvoiceApp = () =>{

    const {id, name, client, company, items, total} = getInvoice();

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
                           <ClientView title= "Datos del Cliente" client = {client} /> 
                        </div>
                        <div className="col">
                           <CompanyView title= "Datos de la empresa" company ={company} />
                        </div>
                    </div>
                    <ListItemsView title="Productos de la factura" items={items} />
                    <TotalView total={total}></TotalView>
                    <form>
                        <input type="text" 
                               name="product" 
                               placeholder="Producto"/>

                        <input type="text" 
                               name="price" 
                               placeholder="precio"/>

                        <input type="text" 
                               name="quantity" 
                               placeholder="Cantidad"/>
                    </form>
                </div>
            </div>
        </div>

       </> 
    )
}