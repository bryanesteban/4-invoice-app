import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/totalView";


export const InvoiceApp = () =>{

    const {id, name, client, company, items, total} = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [quantityValue, setQuantityValue] = useState(0);

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
                               placeholder="Producto" className="form-control m-3" onChange={event =>{
                                console.log(event.target.value)
                               }}/>

                        <input type="text" 
                               name="price" 
                               placeholder="precio" className="form-control m-3" onChange={event =>{
                                console.log(event.target.value)
                               }}/>

                        <input type="text" 
                               name="quantity" 
                               placeholder="Cantidad" className="form-control m-3" onChange={event =>{
                                console.log(event.target.value)
                               }}/>
                    </form>
                </div>
            </div>
        </div>

       </> 
    )
}