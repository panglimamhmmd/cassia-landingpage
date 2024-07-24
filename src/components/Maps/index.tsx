import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../../common/Button';
import { MiddleBlockSection, Content, ContentWrapper } from './styles';

interface MiddleBlockProps {
    title: string;
    content: string;
    button: string;
    t: TFunction;
}

const MiddleBlock = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <MiddleBlockSection>
            <Slide direction="up" triggerOnce>
                <Row justify="center" align="middle">
                    <ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <h6>The Ideal Location</h6>
                            <Content>
                                In the heart of Tangerang, lies an oasis which
                                blends city living with surroundings that allow
                                you to pursue your many passions. In just
                                minutes, Cassia connects you with quality
                                schools and universities, health care, sports
                                facilities, entertainment, shopping, and the
                                Soekarno-Hatta International Airport. Its prime
                                site means time-saving conveniences, so you can
                                create more special moments with loved ones.
                            </Content>
                            {/* {button && (
                                <Button
                                    name="submit"
                                    onClick={() => scrollTo('mission')}
                                >
                                    {t(button)}
                                </Button>
                            )} */}
                        </Col>
                    </ContentWrapper>
                </Row>
            </Slide>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
