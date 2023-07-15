import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const singleChef = useLoaderData();
    const { unique_id } = singleChef;
    return (
        <div>
            <h2>recipe page</h2>
            <p>{unique_id}</p>
        </div>
    );
};

export default ChefRecipe;