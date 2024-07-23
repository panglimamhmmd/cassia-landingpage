import { Row, Col } from 'antd';
import { withTranslation, TFunction } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../../common/Button';
import { MiddleBlockSection, Content, ContentWrapper, Title } from './styles';
import { StyledRow } from '../ContentBlock/styles';
interface MiddleBlockProps {
    title: string;
    content: string;
    button: string;
    t: TFunction;
    id: string;
    direction: 'left' | 'right';
}

const MiddleBlock = ({
    title,
    content,
    button,
    t,
    id,
    direction,
}: MiddleBlockProps) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <MiddleBlockSection>
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
                            <Title>{t(title)}</Title>
                            <Content>{t(content)}</Content>
                            {button && (
                                <Button
                                    name="submit"
                                    onClick={() => scrollTo('mission')}
                                >
                                    {t(button)}
                                </Button>
                            )}
                        </Col>
                    </ContentWrapper>
                </Row>
            </Slide>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
