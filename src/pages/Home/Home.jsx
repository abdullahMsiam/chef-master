import React, { useEffect, useState } from 'react';

const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h3>All Chefs Here</h3>
            <div>
                {
                    chefs.map(chef => <p
                        key={chef.unique_id}
                    >
                        {chef.chef_name}

                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;