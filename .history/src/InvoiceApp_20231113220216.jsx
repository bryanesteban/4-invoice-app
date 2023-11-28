import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/totalView";
import { useState } from "react";


export const InvoiceApp = () =>{

    const {id, name, client, company, items: itemsInitial, total} = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [counter, setCounter] = useState(4);

    const [items, setItems] = useState(itemsInitial);

    const onProductChange = ({target}) =>{
        setProductValue(target.value)
        console.log(target.value)
    }

    const onPriceChange = ({target}) =>{
        setPriceValue(target.value)
        console.log(target.value)
    }

    const onQuantityChange = ({target}) =>{
        setQuantityValue(target.value)
        console.log(target.value)
    }

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
                    <form className="w-50" onSubmit={ event =>{
                        event.preventDefault();
                        if(productValue.trim().length <= 1) return;
                        
                        if(priceValue.trim().length < 1 || isNaN(priceValue.trim())){
                            alert('Error el precio no es un numero');
                            return;
                         } 
                        if(quantityValue.trim().length < 1 || isNaN(quantityValue.trim())){
                           alert('Error la cantidad no es un numero');
                           return;
                        } 
                        setItems([...items, { id: counter,
                                              product: productValue.trim(),
                                              price: +priceValue.trim(),
                                              quantity: parseInt(quantityValue.trim(), 10)}]);
                        setProductValue('');
                        setPriceValue('');
                        setQuantityValue('');
                        setCounter(counter + 1);
                    }}>
                        <input type="text" 
                               name="product"
                               value={ productValue}
                               placeholder="Producto" className="form-control m-3" onChange={event =>{
                                onProductChange(event);
                               }}/>

                        <input type="text" 
                               name="price" 
                               value={priceValue}
                               placeholder="precio" className="form-control m-3" onChange={event =>{
                                onPriceChange(event);
                               }}/>

                        <input type="text" 
                               name="quantity"
                               value={quantityValue}
                               placeholder="Cantidad" className="form-control m-3" onChange={event =>{
                                onQuantityChange(event);
                               }}/>
                        <button type ="submit" 
                                className="btn btn-primary m-3">
                                Crear Item
                        </button>
                    </form>
                </div>
            </div>
        </div>

       </> 
    )
}