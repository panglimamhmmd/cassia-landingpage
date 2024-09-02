import { lazy } from 'react';
import IntroContent from '../../content/IntroContent.json';
import Aquila from '../../content/Aquila.json';
import Lyra from '../../content/Lyra.json';
import Vela from '../../content/Vela.json';

import ContactContent from '../../content/ContactContent.json';
import AboutProduct from '../../content/AboutProduct.json';
import ProductMainContent from '../../content/ProductMainContent.json';
import HeroSectionContent from '../../content/HeroSectionContent.json';
import Header from '../../components/Header';
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

const Home = () => {
    return (
        <Container>
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

            <SecondContainer bgColor="#dbe2ef">
                <LineBlock />
            </SecondContainer>

            <SecondContainer>
                <ContentBlock
                    direction="left"
                    title={AboutProduct.title}
                    content={AboutProduct.text}
                    icon="cluster_cassia.jpg"
                    id="mission"
                />
            </SecondContainer>

            <SecondContainer>
                <MiddleBlock
                    title={IntroContent.title}
                    content={IntroContent.text}
                    button={AboutProduct.button}
                    id="about"
                />
            </SecondContainer>
            <SecondContainer>
                <ProductMain
                    title={ProductMainContent.title}
                    content={ProductMainContent.content}
                    img1={ProductMainContent.img1}
                    img2={ProductMainContent.img2}
                    img3={ProductMainContent.img3}
                    id="product"
                />
            </SecondContainer>
            <SecondContainer>
                <Product
                    direction="left"
                    title={Aquila.title}
                    content={Aquila.text}
                    landSize={Aquila.landSize}
                    buildingSize={Aquila.buildingSize}
                    bedrooms={Aquila.bedrooms}
                    bathrooms={Aquila.bathrooms}
                    icon="denah_aquila.jpg"
                    id="aquila"
                    UnitSize={Aquila.size}
                    decorSize="200px"
                    decorTop="0"
                    decorRight="0"
                    decorName="decor2.svg"
                    decorRotate=""
                />
            </SecondContainer>
            <SecondContainer>
                <Product
                    direction="right"
                    title={Vela.title}
                    content={Vela.text}
                    landSize={Vela.landSize}
                    buildingSize={Vela.buildingSize}
                    bedrooms={Vela.bedrooms}
                    bathrooms={Vela.bathrooms}
                    icon="denah_vela.jpg"
                    id="vela"
                    UnitSize={Vela.size}
                    background="#DBE2EF"
                    decorSize="200px"
                    decorTop="0"
                    decorRight="0"
                    decorName="decor2.svg"
                    decorRotate=""
                />
            </SecondContainer>
            <SecondContainer>
                <Product
                    direction="left"
                    title={Lyra.title}
                    content={Lyra.text}
                    landSize={Lyra.landSize}
                    buildingSize={Lyra.buildingSize}
                    bedrooms={Lyra.bedrooms}
                    bathrooms={Lyra.bathrooms}
                    icon="denah_lyra.jpg"
                    id="lyra"
                    UnitSize={Lyra.size}
                    decorSize="200px"
                    decorTop="0"
                    decorRight="0"
                    decorName="decor2.svg"
                    decorRotate=""
                />
            </SecondContainer>
            <SecondContainer>
                <Maps />
            </SecondContainer>
            <SecondContainer>
                <Contact
                    title={ContactContent.title}
                    content={ContactContent.text}
                    id="contact"
                />
            </SecondContainer>
        </Container>
    );
};

export default Home;
