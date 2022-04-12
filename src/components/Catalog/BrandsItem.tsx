import React from 'react';

type Props = {
    link: string,
    image: string,
    name: string
}

function BrandsItem(props: Props) {
    return (
        <li>
            <a href={props.link}><img src={props.image} alt={props.name}/></a>
        </li>
    );
}

export default BrandsItem;