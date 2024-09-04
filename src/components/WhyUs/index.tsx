import { Row, Col } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';

import { ContentBlockProps } from './types';
import { Button } from '../../common/Button';
import { SvgIcon } from '../../common/SvgIcon';
import {
    ContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    MinPara,
    StyledRow,
    ImageContainer,
    ImageText,
    ButtonWrapper,
    ContentContainer,
    Title,
    Title2,
} from './styles';

const WhyUS = ({
    icon,
    title,
    content,
    section,
    button,
    t,
    id,
    direction,
}: ContentBlockProps) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <ContentSection>
            <Fade direction={direction} triggerOnce>
                <StyledRow
                    justify="space-between"
                    align="middle"
                    id={id}
                    direction={direction}
                >
                    <Col lg={9} md={9} sm={9} xs={0}>
                        <SvgIcon src="img00.jpg" width="100%" height="100%" />
                    </Col>
                    <Col lg={14} md={14} sm={14} xs={24}>
                        <ContentWrapper>
                            <Title>Mengapa</Title>
                            <Title2>
                                CASSIA
                                <br />
                                _______
                            </Title2>

                            {direction === 'left' ? (
                                <ButtonWrapper>
                                    {typeof button === 'object' &&
                                        button.map(
                                            (
                                                item: {
                                                    color?: string;
                                                    title: string;
                                                },
                                                id: number
                                            ) => {
                                                return (
                                                    <Button
                                                        key={id}
                                                        color={item.color}
                                                        onClick={() =>
                                                            scrollTo('about')
                                                        }
                                                    >
                                                        {t(item.title)}
                                                    </Button>
                                                );
                                            }
                                        )}
                                </ButtonWrapper>
                            ) : (
                                <ServiceWrapper>
                                    <Row justify="space-between">
                                        {typeof section === 'object' &&
                                            section.map(
                                                (
                                                    item: {
                                                        title: string;
                                                        content: string;
                                                        icon: string;
                                                    },
                                                    id: number
                                                ) => {
                                                    return (
                                                        <Col key={id} span={11}>
                                                            <ContentContainer>
                                                                <ImageContainer>
                                                                    <SvgIcon
                                                                        src={
                                                                            item.icon
                                                                        }
                                                                        width="60px"
                                                                        height="60px"
                                                                    />
                                                                </ImageContainer>
                                                                <MinTitle>
                                                                    {t(
                                                                        item.title
                                                                    )}
                                                                </MinTitle>
                                                                <MinPara>
                                                                    {
                                                                        item.content
                                                                    }
                                                                </MinPara>
                                                            </ContentContainer>
                                                        </Col>
                                                    );
                                                }
                                            )}
                                    </Row>
                                </ServiceWrapper>
                            )}
                        </ContentWrapper>
                    </Col>
                </StyledRow>
            </Fade>
        </ContentSection>
    );
};

export default withTranslation()(WhyUS);
