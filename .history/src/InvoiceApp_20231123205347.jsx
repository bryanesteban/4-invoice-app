import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/totalView";
import { useEffect, useState } from "react";

const invoiceInitial = {
    id: 10,
    name: '',
    client:{
        name:'',
        lastname:'',
        address:{
            country:'',
            city: '',
            street:' ',
            numeber:0
        }
    },
        company:{
            name:'',
            fiscalNumber: 0,
        },
        items: []
}

export const InvoiceApp = () =>{

    const [invoice, setInvoice] = useState();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const data = getInvoice();
        console.log(invoice);
        setInvoice(data);
        setItems(data.items);
        
    }, []);

    


    const {id, name, client, company, items: itemsInitial, total} = invoice;
    
    const [formItemsState, setformItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const {product, price, quantity} = formItemsState;

    /*const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');*/
    const [counter, setCounter] = useState(4);


    const onInputChange = ({ target: {name, value} }) => {
        setformItemsState({
            ...formItemsState,
            [ name ]: value
        });
        //console.log(value);
        //console.log(name);
    }

    /*const onProductChange = ({ target }) =>{
        setProductValue(target.value)
        console.log(target.value)
    }

    const onPriceChange = ({ target }) =>{
        setPriceValue(target.value)
        console.log(target.value)
    }

    const onQuantityChange = ({ target }) =>{
        setQuantityValue(target.value)
        console.log(target.value)
    }*/

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();
        if(product.trim().length <= 1) return;
        
        if(price.trim().length < 1 || isNaN(price.trim())){
            alert('Error el precio no es un numero');
            return;
         } 
        if(quantity.trim().length < 1 || isNaN(quantity.trim())){
           alert('Error la cantidad no es un numero');
           return;
        } 
        setItems([...items, { id: counter,
                              product: product.trim(),
                              price: +price.trim(),
                              quantity: parseInt(quantity.trim(), 10)}]);
        
        setformItemsState({
            product: '',
            price: '',
            quantity: '',
        })
        setCounter(counter + 1);
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
                    <form className="w-50" onSubmit={ event => onInvoiceItemsSubmit(event) }>
                        <input type="text" 
                               name="product"
                               value={ product}
                               placeholder="Producto" 
                               className="form-control m-3" 
                               onChange={ onInputChange }/>

                        <input type="text" 
                               name="price" 
                               value={price}
                               placeholder="precio" 
                               className="form-control m-3" 
                               onChange={ event => onInputChange(event) }/>

                        <input type="text" 
                               name="quantity"
                               value={quantity}
                               placeholder="Cantidad" 
                               className="form-control m-3" 
                               onChange={ onInputChange }/>
                               
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