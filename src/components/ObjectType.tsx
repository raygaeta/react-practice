import React from 'react'; // Add this import statement

type Person = {
    name: string;
    legs: number;
    isStudent: boolean;
    address?: Address;
}

type Address = {
    street: string;
    city: string;
    state: string;
    zip: number;
}

export default function TypeObject()
{
    // let myName: string = "Ray";
    // let numberOfLegs: number = 2;
    // let isStudent: boolean = false;c  

    let person: Person = {
        name: "Ray",
        legs: 2,
        isStudent: false,
        // address: {
        //     street: "123 Main St",
        //     city: "Anytown",
        //     state: "CA",
        //     zip: 12345
        // }
    };

    let person2: Person = {
        name: "Keely",
        legs: 2,
        isStudent: true,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: 12345
        }
    };
    
    let ages: number[] = [100, 101, 102, 103, 104, 105];

    const people: Person[] = [person, person2];
    
    return (
        
        // <ol>
        //     <li>{myName}</li>
        //     <li>{numberOfLegs}</li>
        //     <li>{isStudent}</li>
        // </ol>

        <div>
            <h1>{person2.name}</h1>
            <h1>{person2.legs}</h1>
            <h1>{person2.isStudent}</h1>
        </div>
    )
}