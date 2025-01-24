import React from 'react';

export default function Users()
{
    type Roles = "admin" | "user" | "guest";

    type User = {
        username: string;
        role: Roles;
    }
    
    const users: User[] = [
        {username: "raygaeta", role: "admin"},
        {username: "keely", role: "user"},
        {username: "admin", role: "guest"},
    ]

    const fetchUserDetails = (username: string): string => {
        const fetchedUser = users.find(user => user.username === username);
        console.log(fetchedUser);
        return fetchedUser ? `The fetched user is: ${fetchedUser.username} and the role is: ${fetchedUser.role}` : "User not found";
    }

    return (
        <>
            <div>
                {users.map(user => 
                    <li key={user.username}>
                        {user.username} - {user.role}
                    </li>)}
            </div>  

            <div>
               {fetchUserDetails("raygaeta")}
            </div>
        </>
    )
}




