import { lazy } from 'react';
import IntroContent from '../../content/IntroContent.json';
import Aquila from '../../content/Aquila.json';
import Lyra from '../../content/Lyra.json';
import Vela from '../../content/Vela.json';

import ContactContent from '../../content/ContactContent.json';
import AboutProduct from '../../content/AboutProduct.json';

const Product = lazy(() => import('../../components/Product'));
const Contact = lazy(() => import('../../components/ContactForm'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const Whatsapp = lazy(() => import('../../common/Whatsapp'));
const Maps = lazy(() => import('../../components/Maps'));
const Home = () => {
    return (
        <Container>
            <ScrollToTop />
            <Whatsapp />
            <ContentBlock
                direction="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="developer.svg"
                id="about"
            />
            <MiddleBlock
                title={AboutProduct.title}
                content={AboutProduct.text}
                button={AboutProduct.button}
            />

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
            />

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
            />
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
            />
            {/* <ContentBlock
                direction="left"
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon="graphs.svg"
                id="about"
            />
            <ContentBlock
                direction="right"
                title={MissionContent.title}
                content={MissionContent.text}
                icon="product-launch.svg"
                id="mission"
            />
            <ContentBlock
                direction="left"
                title={ProductContent.title}
                content={ProductContent.text}
                icon="waving.svg"
                id="product"
            /> */}
            <Maps />
            <Contact
                title={ContactContent.title}
                content={ContactContent.text}
                id="contact"
            />
        </Container>
    );
};

export default Home;
