import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../../common/Button';
import {
    MiddleBlockSection,
    Content,
    ContentWrapper,
    MinPara,
    Block,
} from './styles';
import { SvgIcon } from '../../common/SvgIcon';
import { Decoration } from '../../common/Decoration';

interface MiddleBlockProps {
    title: string;
    content: string;
    button: string;
    t: TFunction;
    id: string;
}

const MiddleBlock = ({ title, content, button, t, id }: MiddleBlockProps) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <MiddleBlockSection id={id}>
            <Slide direction="up" triggerOnce>
                <Row justify="space-between" align="middle">
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <MinPara>About Us</MinPara>
                            <h6>{t(title)}</h6>
                            <Block></Block>
                            {/* {button && (
                                <Button
                                    name="submit"
                                    onClick={() => scrollTo('mission')}
                                >
                                    {t(button)}
                                </Button>
                            )} */}
                        </ContentWrapper>
                    </Col>

                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <Content>{t(content)}</Content>
                        </ContentWrapper>
                    </Col>
                </Row>
            </Slide>
            {/* <Decoration
                src="decor2.svg"
                width="40%"
                height="auto"
                top="0"
                right="0"
            /> */}
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
