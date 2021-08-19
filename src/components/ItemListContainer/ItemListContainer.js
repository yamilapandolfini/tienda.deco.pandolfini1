import React, {useEffect, useState} from 'react';


const ItemListContainer = () =>{
    
    const [list, setList] = useState([]);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            console.log('This will run after 2 second!')
            fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((json) => console.log(json));
        }, 2000);

    }, []);

    return <div className='ItemListContainer'></div>;
}

export default ItemListContainer;