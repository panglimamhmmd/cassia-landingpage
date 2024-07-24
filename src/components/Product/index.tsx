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
    BoldText,
    StyledRow,
    ButtonWrapper,
} from './styles';

const ContentBlock = ({
    icon,
    title,
    content,
    section,
    landSize,
    buildingSize,
    bedrooms,
    bathrooms,
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
                    <Col lg={11} md={11} sm={12} xs={24}>
                        <SvgIcon src={icon} width="100%" height="100%" />
                    </Col>
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <MinTitle>Tipe Rumah</MinTitle>
                            <h6>{t(title)}</h6>
                            <Content>{t(content)}</Content>

                            <ServiceWrapper>
                                <Row justify="space-between">
                                    <Col key={id} span={11}>
                                        <MinTitle>
                                            <BoldText>
                                                Luas Tanah {landSize} m²
                                            </BoldText>
                                        </MinTitle>
                                        <MinTitle>
                                            <BoldText>
                                                Luas Bangunan {buildingSize} m²
                                            </BoldText>
                                        </MinTitle>
                                    </Col>
                                    <Col key={id} span={11}>
                                        <MinTitle>
                                            <BoldText>
                                                {bedrooms} Kamar Tidur
                                            </BoldText>
                                        </MinTitle>
                                        <MinTitle>
                                            <BoldText>
                                                {bathrooms} Kamar Mandi
                                            </BoldText>
                                        </MinTitle>
                                    </Col>
                                </Row>
                            </ServiceWrapper>
                        </ContentWrapper>
                    </Col>
                </StyledRow>
            </Fade>
        </ContentSection>
    );
};

export default withTranslation()(ContentBlock);
