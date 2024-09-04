import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import {
    MiddleBlockSection,
    Content,
    ContentWrapper,
    Wrapper,
    ImageDetail,
    TextImageDetail,
    MainContent,
    SeeDetails,
    Title,
    HoverButton,
    MinTitle,
    Block,
} from './styles';
import { SvgIcon } from '../../common/ImageWrapper';
import { Decoration } from '../../common/Decoration';

interface MiddleBlockProps {
    title: string;
    content: string;
    img1: string;
    img2: string;
    img3: string;
    t: TFunction;
    id: string;
}

const MiddleBlock = ({
    title,
    content,
    img1,
    img2,
    img3,
    t,
    id,
}: MiddleBlockProps) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <MiddleBlockSection id={id}>
            <Slide direction="up" triggerOnce>
                <ContentWrapper>
                    <Title>TIPE HUNIAN</Title>
                    <MinTitle>
                        CASSIA <br />
                        ____
                    </MinTitle>

                    <Row justify="space-between" align="middle">
                        <Col lg={7} md={7} sm={7} xs={24}>
                            <Wrapper onClick={() => scrollTo('aquila')}>
                                <SvgIcon
                                    src={img1}
                                    width="100%"
                                    height="100%"
                                />

                                <ImageDetail onClick={() => scrollTo('aquila')}>
                                    <TextImageDetail>6x14</TextImageDetail>
                                </ImageDetail>
                            </Wrapper>

                            <Content onClick={() => scrollTo('aquila')}>
                                {'Aquila'}
                            </Content>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={24}>
                            <Wrapper onClick={() => scrollTo('vela')}>
                                <SvgIcon
                                    src={img2}
                                    width="100%"
                                    height="100%"
                                />
                                <ImageDetail>
                                    <TextImageDetail>6x16</TextImageDetail>
                                </ImageDetail>
                            </Wrapper>

                            <Content onClick={() => scrollTo('vela')}>
                                {'Vela'}
                            </Content>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={24}>
                            <Wrapper onClick={() => scrollTo('lyra')}>
                                <SvgIcon
                                    src={img3}
                                    width="100%"
                                    height="100%"
                                />
                                <ImageDetail>
                                    <TextImageDetail>7x14</TextImageDetail>
                                </ImageDetail>
                            </Wrapper>

                            <Content onClick={() => scrollTo('lyra')}>
                                {'Lyra'}
                            </Content>
                        </Col>
                    </Row>
                    <Decoration
                        src="starwhite.png"
                        width="20%"
                        height="auto"
                        top="-50px"
                        right="0"
                        zindex="-1"
                    />
                    <Decoration
                        src="starwhite.png"
                        width="40%"
                        height="auto"
                        top="-150px"
                        left="-25px"
                        zindex="-1"
                        rotate="270deg"
                    />
                </ContentWrapper>
            </Slide>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
