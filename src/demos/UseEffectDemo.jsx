import { useEffect, useState } from 'react';

const UseEffectDemo = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('ss', users)

        fetchUsers();
        console.log('ss', users)
    }, []);

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setUsers(res));
        console.log('ss', users)

    }

    return (<>
        <ul>{users.length > 0 ?
            (users.map((user, index) => (<li key={index}>{user.name}</li>))) : <>No elements found</>}
        </ul>
    </>)
}

export default UseEffectDemo;