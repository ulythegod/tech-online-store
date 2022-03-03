import React from 'react';
import TopMenuSearch from './TopMenuSearch';
import TopMenuBasket from './TopMenuBasket';
import TopMenuNavagation from './TopMenuNavagation';
import avatar from '../../images/avatar.png';

class TopMenu extends React.Component {
    render(): React.ReactNode {
        return (
            <nav>
                <TopMenuNavagation />
                <div className="main-top-tools">
                    <TopMenuSearch />
                    <TopMenuBasket />
                    <a href="#"><img src={avatar} alt="avatar"/></a>
                </div>
            </nav>
        );
    }
}

export default TopMenu;
