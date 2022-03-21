import React from 'react';

function BrandsItem(props: any): any {
    return (
        <li>
            <a href={props.link}><img src={props.image} alt={props.name}/></a>
        </li>
    );
}

export default BrandsItem;