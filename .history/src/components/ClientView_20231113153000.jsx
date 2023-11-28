import PropTypes from 'prop-types';

export const ClientView = ({title, client}) =>{
    const {name: nameClient, lastname, address } = client;

    const { country, city, street, number} = client.address;
    
    return (
        <>
         <h3>{title}</h3>
                            <ul className="list-group">
                                <li className="list-group-item active">{nameClient} {lastname}</li>
                                <li className="list-group-item">{country} / {city}</li>
                                <li className="list-group-item">{street} {number}</li>
                            </ul>
        </>
    )
}

ClientView.protoTypes ={
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
}