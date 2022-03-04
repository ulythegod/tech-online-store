import React from 'react';

class Breadcrumbs extends React.Component {
    render(): React.ReactNode {
        return (
            <nav>
                <div className="breadcrumbs">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/catalog">Laptops</a></li>
                        <li><a href="/catalog">Everyday Use Notebooks</a></li>
                        <li><a href="/catalog">MSI Prestige Series</a></li>
                        <li>MSI WS Series</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Breadcrumbs;
