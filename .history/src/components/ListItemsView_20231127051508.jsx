import { RowItemView } from "./RowItemView"
import PropTypes from 'prop-types';

export const ListItemsView  = ({title, items, handlerDeleteItem}) => {

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
                            {items.map(({id, product, price,quantity}) => (
                                    <RowItemView 
                                    key={ id } 
                                    product={product} 
                                    price={price} 
                                    quantity={quantity} 
                                    handlerDeleteItem(id)/>
                            ))}
                        </tbody>
                        
                    </table>
        </>
    )

} 

ListItemsView.propTypes = {
    title : PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}