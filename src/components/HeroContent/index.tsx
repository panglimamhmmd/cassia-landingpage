import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../../common/ArrowDownButton';
import {
    MiddleBlockSection,
    Content,
    ContentWrapper,
    Title,
    ImageWrapper,
} from './styles';
import { StyledRow } from '../About/styles';
import { BoldText } from '../Product/styles';
import { SvgIcon } from '../../common/SvgIcon';
import { Decoration } from '../../common/Decoration';
interface MiddleBlockProps {
    title: string;
    button: string;
    t: TFunction;
    id: string;
    direction: 'left' | 'right';
}

const MiddleBlock = ({ title, button, t, id, direction }: MiddleBlockProps) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <MiddleBlockSection id={id}>
            <StyledRow
                justify="space-between"
                align="middle"
                id={id}
                direction={direction}
            ></StyledRow>
            <Slide direction="up" triggerOnce>
                <Row justify="center" align="middle">
                    <ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <SvgIcon
                                src="headline.png"
                                width="100%"
                                height="auto"
                            />
                            {/* <Title>{t(title)}</Title>
                            <Content>
                                Your <BoldText>Gateway</BoldText> To Urban
                                Sanctuary
                            </Content> */}
                            {/* {button && (
                                <Button
                                    name="submit"
                                    onClick={() => scrollTo('about')}
                                >
                                    {t(button)}
                                </Button>
                            )} */}
                        </Col>
                    </ContentWrapper>
                    <Button onClick={() => scrollTo('whyus')}>
                        <img src="/img/svg/arrow-down.svg" alt="arrow" />
                    </Button>
                </Row>
            </Slide>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
