import Header from 'components/Header/Header';
import TopMenu from 'components/TopMenu/TopMenu';
import MainBanners from 'components/MainBanners';
import NewProductsSection from 'components/NewProductsSection';
import MainBanner from 'components/MainBanner';
import MainProductsSection from 'components/MainProductsSection';
import MainCompaniesSection from 'components/MainCompaniesSection';
import MainNewsSection from 'components/MainNewsSection';
import MainReviews from 'components/MainReviews';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';
import Footer from 'components/Footer/Footer';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <Header />
    <TopMenu />
    <MainBanners />
    <NewProductsSection 
      name='New Products'
    />
    <MainBanner />
    <MainProductsSection 
      name='MSI Laptops'
      sections={false}
    />
    <MainProductsSection 
      name='MSI Laptops'
      sections={true}
    />
    <MainProductsSection 
      name='MSI Laptops'
      sections={true}
    />
    <MainProductsSection 
      name='MSI Laptops'
      sections={true}
    />
    <MainCompaniesSection />
    <MainNewsSection />
    <MainReviews />
    <AdvantagesSection />
    <Footer />
  </div>,
  document.getElementById('root')
);
