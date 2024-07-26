import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import {
    MiddleBlockSection,
    Content,
    ContentWrapper,
    ImageWrapper,
    Wrapper,
    ImageDetail,
    TextImageDetail,
} from './styles';

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
                    <h6>{t(title)}</h6>
                    <Content>{t(content)}</Content>
                    <Row justify="space-between" align="middle">
                        <Col lg={7} md={7} sm={7} xs={24}>
                            <Wrapper>
                                <ImageWrapper
                                    src={`/img/svg/${img1}`}
                                    alt={'Aquila'}
                                    width="100%"
                                    height="100%"
                                    onClick={() => scrollTo('aquila')}
                                />
                                <ImageDetail>
                                    <TextImageDetail>6x14</TextImageDetail>
                                </ImageDetail>
                            </Wrapper>

                            <Content>{'Aquila'}</Content>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={24}>
                            <Wrapper>
                                <ImageWrapper
                                    src={`/img/svg/${img2}`}
                                    width="100%"
                                    height="100%"
                                    alt={'Vela'}
                                    onClick={() => scrollTo('vela')}
                                />
                                <ImageDetail>
                                    <TextImageDetail>6x16</TextImageDetail>
                                </ImageDetail>
                            </Wrapper>

                            <Content>{'Vela'}</Content>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={24}>
                            <Wrapper>
                                <ImageWrapper
                                    src={`/img/svg/${img3}`}
                                    width="100%"
                                    height="100%"
                                    alt={'Lyra'}
                                    onClick={() => scrollTo('lyra')}
                                />
                                <ImageDetail>
                                    <TextImageDetail>7x14</TextImageDetail>
                                </ImageDetail>
                            </Wrapper>

                            <Content>{'Lyra'}</Content>
                        </Col>
                    </Row>
                </ContentWrapper>
            </Slide>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
