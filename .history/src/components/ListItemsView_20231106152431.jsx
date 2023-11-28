export const ListItemsView  = ({title, items}) => {

    return (
        <>
        <h4> {title}</h4>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(({id, producto, price,quantity}) => (
                                
                                <tr key = { id }>
                                    <td>{producto}</td>
                                    <td>{price}</td>
                                    <td>{quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
        </>
    )

} 