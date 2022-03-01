import React from 'react';
import TopMenuNavagation from './TopMenuNavagation';
import TopMenuSearch from './TopMenuSearch';
import TopMenuBasket from './TopMenuBasket';

class TopMenu extends React.Component {
    render(): React.ReactNode {
        return (
            <nav>
                <TopMenuNavagation />
                <div className="main-top-tools">
                    <TopMenuSearch />
                    <TopMenuBasket />
                    <a href="#"><img src="./images/avatar.png" alt="avatar"/></a>
                </div>
            </nav>
        );
    }
}

export default TopMenu;
