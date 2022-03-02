import React from 'react';
import NewsItem from './NewsItem';
import newsImg1 from '../images/news1.png';
import newsImg2 from '../images/news2.png';
import newsImg3 from '../images/news3.png';
import newsImg4 from '../images/news4.png';
import newsImg5 from '../images/news5.png';
import newsImg6 from '../images/news6.png';
import newsImg7 from '../images/news7.png';
import newsImg8 from '../images/news8.png';

class MainNewsSection extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="main-news-section">
                <p>Follow us on Instagram for News, Offers & More</p>
                <div className="news-list">
                    <NewsItem
                        image={newsImg1}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                    <NewsItem
                        image={newsImg1}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                    <NewsItem
                        image={newsImg2}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                    <NewsItem
                        image={newsImg3}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                    <NewsItem
                        image={newsImg4}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                    <NewsItem
                        image={newsImg5}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                    <NewsItem
                        image={newsImg6}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                    <NewsItem
                        image={newsImg7}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                    <NewsItem
                        image={newsImg8}
                        name={
                            `If you’ve recently made a desktop PC or 
                            laptop purchase, you might want to consider 
                            adding peripherals to enhance your home 
                            office setup, your gaming rig, or your 
                            business workspace...`
                        }
                        date={"01.09.2020"}
                    />
                </div>
            </section>
        );
    }
}

export default MainNewsSection;
