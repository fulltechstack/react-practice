import { useEffect, useState } from 'react';

const UseEffectDemo = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setUsers(res));
    }

    return (<>
        <ul>{users.length > 0 ?
            (users.map((user, index) => (<li key={index}>{user.name}</li>))) : <>No elements found</>}
        </ul>
    </>)
}

export default UseEffectDemo;