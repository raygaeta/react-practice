

interface Order {
    name: string;
    status: "ordered" | "completed";
    orderNumber: number;
}

type Pizza = {
    id: number;
    name: string;
    price: number;
}

export default function Resturant(){
    let orderNumber = 0;
    let orderID = 0;
    let cashInRegister = 100;
    const orderQueue: Order[] = [];
    const menu: Pizza[] = [
        {
            id: orderID++,
            name: "Margherita",
            price: 100,
        },
        {
            id: orderID++,
            name: "Pepperoni",
            price: 50,
        },
        {
            id: orderID++,
            name: "Hawaiian",
            price: 20,
        },
        {
            id: orderID++,
            name: "Veggie",
            price: 10,
        }
    ];

    const placeOrder = (pizza: Pizza): Order | undefined =>
    {
        const name = pizza.name;
        const price = pizza.price;
        cashInRegister += price;
        console.log("Cash in Register: ", cashInRegister);
        orderNumber++;
        const newOrder: Order =
        {
            name: name,
            status: "ordered",
            orderNumber: orderNumber
        }
        orderQueue.push(newOrder);
        console.log('Order Queue: ', orderQueue);
        return newOrder;
    }

    const completeOrder = (orderNumber: number): Order | undefined =>
    {
        const order = orderQueue.find(order => order.orderNumber === orderNumber);
        if(order){
            order.status = "completed";
        }
        else{
            console.error(`${orderNumber} not found in order queue`);
        }
        console.log("Order Completed: ", order);
        return order;
    }

    const getPizzaDetail = (identifier: number | string): Pizza | undefined => {
        if (typeof identifier === "number"){
            const pizza = menu.find(pizza => identifier === pizza.id);
            if(pizza){
                console.log("Identified: ", pizza);
                return pizza;
            }
            else{
                console.log("Pizza not found");
            }
        }
        else if (typeof identifier === "string"){
            const pizza = menu.find(pizza => identifier === pizza.name.toLowerCase());
            if(pizza){
                console.log("Identified: ", pizza);
                return pizza;
            }
            else{
                console.log("Pizza not found");
            }
        }
        else{
            console.log("Invalid identifier");
        }
        return undefined;
    }

    const addNewPizza = (pizza: Omit<Pizza, "id">): Pizza =>
        {
            const pizzaWithID: Pizza = {
                id: orderID++,
                ... pizza
            }
            menu.push(pizzaWithID);
            console.log("New Pizza: ", menu.find(pizza => pizza.name === "Cheese"));
            return pizzaWithID;
        }


    return (
        addNewPizza({name: "Cheese", price: 10}),
        placeOrder(menu[2]),
        completeOrder(1),
        getPizzaDetail(1)
    )
}

