export const invoice ={
    id: 10,
    name: 'Componentes PC',
    client:{
        name:'Pepe',
        lastname:'Doe',
        address:{
            country:'USA',
            city: 'Los Angeles',
            street:' One Street',
            numeber:12
        }
    },
        company:{
            name:'New Egg',
            fiscalNumber: 1234567,
        },
        items: [
           {
            id: 1,
            producto: 'Cpu Intel i7',
            price: 499,
            quantity: 1,
           },     
           {
            id: 2,
            producto: 'Corsair Keyboard Marcanico',
            price: 150,
            quantity: 2,
           }, 
           {
            id: 3,
            producto: 'Monitor Asus',
            price: 350,
            quantity: 1,
           }, 
        
        ]
        

}