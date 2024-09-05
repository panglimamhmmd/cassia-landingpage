import { lazy } from 'react';
import IntroContent from '../../content/IntroContent.json';
import Aquila from '../../content/Aquila.json';
import Lyra from '../../content/Lyra.json';
import Vela from '../../content/Vela.json';

import ContactContent from '../../content/ContactContent.json';
import AboutProduct from '../../content/AboutProduct.json';
import ProductMainContent from '../../content/ProductMainContent.json';
import HeroSectionContent from '../../content/HeroSectionContent.json';
import AboutContent from '../../content/AboutContent.json';
import Header from '../../components/Header';
import WhyUs from '../../components/WhyUs';
import LokasiContent from '../../content/LokasiContent.json';
import WhyUsContainer from '../../common/WhyUsContainer';
const Product = lazy(() => import('../../components/Product'));
const Contact = lazy(() => import('../../components/ContactForm'));
const MiddleBlock = lazy(() => import('../../components/Mission'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/About'));
const Whatsapp = lazy(() => import('../../common/Whatsapp'));
const Maps = lazy(() => import('../../components/Maps'));
const ProductMain = lazy(() => import('../../components/TipeUnit'));
const HeroContent = lazy(() => import('../../components/HeroContent'));
const SecondContainer = lazy(() => import('../../common/SecondContainer'));
const LineBlock = lazy(() => import('../../components/LineBlock'));
// const WhyUS = lazy(() => import('../../components/WhyUs'))
const ThirdContainer = lazy(() => import('../../common/ThirdContainer'));

const Home = () => {
    return (
        <Container>
            {/* HERO CONTENT */}

            <div id="heroContainerAndHeader">
                <Header />
                <HeroContent
                    title={HeroSectionContent.title}
                    button={HeroSectionContent.button}
                    id="hero"
                    direction="right"
                />
            </div>
            <ScrollToTop />
            <Whatsapp />
            {/* HERO CONTENT */}

            {/* LOGO */}
            <SecondContainer bgColor="#dbe2ef">
                <ThirdContainer>
                    <LineBlock id="logo" />
                </ThirdContainer>
            </SecondContainer>
            {/* INTRO */}

            {/* <SecondContainer bgColor="white">
                <ThirdContainer>
                    <ContentBlock
                        direction="left"
                        title={AboutProduct.title}
                        content={AboutProduct.text}
                        button={AboutProduct.button}
                        icon="cluster_cassia.jpg"
                        id="mission"
                    />
                </ThirdContainer>
            </SecondContainer> */}

            {/* WHY US CONTAINER */}
            <WhyUsContainer bgColor="#dbe2ef">
                <ThirdContainer>
                    <WhyUs
                        id="whyus"
                        direction="right"
                        title={AboutContent.title}
                        content={AboutContent.text}
                        section={AboutContent.section}
                        icon="graphs.svg"
                    />
                </ThirdContainer>
            </WhyUsContainer>

            {/* ABOUT */}
            <SecondContainer bgColor="#e0d5ee">
                <ThirdContainer>
                    <MiddleBlock
                        title={IntroContent.title}
                        content={IntroContent.text}
                        button={IntroContent.button}
                        id="about"
                    />
                </ThirdContainer>
            </SecondContainer>

            {/* LIST PRODUCT */}
            <SecondContainer bgColor="white">
                <ThirdContainer>
                    <ProductMain
                        title={ProductMainContent.title}
                        content={ProductMainContent.content}
                        img1={ProductMainContent.img1}
                        img2={ProductMainContent.img2}
                        img3={ProductMainContent.img3}
                        id="product"
                    />
                </ThirdContainer>
            </SecondContainer>
            {/* PRODUCT */}
            <SecondContainer bgColor="#dbe2ef">
                <ThirdContainer>
                    <Product
                        direction="left"
                        title={Aquila.title}
                        content={Aquila.text}
                        landSize={Aquila.landSize}
                        buildingSize={Aquila.buildingSize}
                        bedrooms={Aquila.bedrooms}
                        bathrooms={Aquila.bathrooms}
                        image1="aquila1.jpg"
                        image2="aquila2.jpg"
                        image3="denah_aquila.jpg"
                        id="aquila"
                        UnitSize={Aquila.size}
                        icon="cluster_cassia.jpg"
                    />
                </ThirdContainer>
            </SecondContainer>
            <SecondContainer bgColor="white">
                <ThirdContainer>
                    <Product
                        direction="right"
                        title={Vela.title}
                        content={Vela.text}
                        landSize={Vela.landSize}
                        buildingSize={Vela.buildingSize}
                        bedrooms={Vela.bedrooms}
                        bathrooms={Vela.bathrooms}
                        image1="vela1.jpg"
                        image2="vela2.jpg"
                        image3="denah_vela.jpg"
                        id="vela"
                        UnitSize={Vela.size}
                        background=""
                        icon="cluster_cassia.jpg"
                    />
                </ThirdContainer>
            </SecondContainer>
            <SecondContainer bgColor="#e0d5ee">
                <ThirdContainer>
                    <Product
                        direction="left"
                        title={Lyra.title}
                        content={Lyra.text}
                        landSize={Lyra.landSize}
                        buildingSize={Lyra.buildingSize}
                        bedrooms={Lyra.bedrooms}
                        bathrooms={Lyra.bathrooms}
                        image1="lyra1.jpg"
                        image2="lyra2.jpg"
                        image3="denah_lyra.jpg"
                        icon="cluster_cassia.jpg"
                        id="lyra"
                        UnitSize={Lyra.size}
                    />
                </ThirdContainer>
            </SecondContainer>
            {/* MAPS */}
            <SecondContainer bgColor="white">
                <ThirdContainer>
                    <Maps section={LokasiContent.section} />
                </ThirdContainer>
            </SecondContainer>
            {/* CONTACT */}
            <SecondContainer bgColor="bg">
                <ThirdContainer>
                    <Contact
                        title={ContactContent.title}
                        content={ContactContent.text}
                        id="contact"
                    />
                </ThirdContainer>
            </SecondContainer>
        </Container>
    );
};

export default Home;
