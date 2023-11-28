

export const FormItemsView() => {
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