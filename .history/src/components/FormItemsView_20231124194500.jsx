

export const FormItemsView() => {

    const [formItemsState, setformItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const {product, price, quantity} = formItemsState;

    useEffect( () => {
        //console.log('El precio cambio!');

    }, [price]);
    
    
    useEffect( () => {
        //console.log('El formItemsState cambio!');

    }, [formItemsState]);

    const onInputChange = ({ target: {name, value} }) => {
        setformItemsState({
            ...formItemsState,
            [ name ]: value
        });
        //console.log(value);
        //console.log(name);
    }

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
}