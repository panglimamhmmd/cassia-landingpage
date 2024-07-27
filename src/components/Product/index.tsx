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
    SizeTitle,
} from './styles';

import WhatsappContent from '../../content/WhatsappContent.json';

const handleWhatsapp = () => {
    const redirectUrl = WhatsappContent.url;
    window.open(redirectUrl, '_blank');
};

const ContentBlock = ({
    icon,
    title,
    content,
    landSize,
    buildingSize,
    bedrooms,
    bathrooms,
    button,
    UnitSize,
    t,
    id,
    direction,
}: ContentBlockProps) => {
    return (
        <ContentSection>
            <Fade direction={direction} triggerOnce>
                <StyledRow
                    justify="space-between"
                    align="middle"
                    id={id}
                    direction={direction}
                >
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <SizeTitle>{UnitSize}</SizeTitle>
                            <h6>{t(title)}</h6>
                            <Content>{t(content)}</Content>

                            <ServiceWrapper>
                                <Row justify="space-between">
                                    <Col key={`${id}-land`} span={11}>
                                        <SvgIcon
                                            src={'land-size.svg'}
                                            width="16px"
                                            height="16px"
                                        />
                                        <MinTitle>
                                            <BoldText>
                                                Luas Tanah {landSize} m²
                                            </BoldText>
                                        </MinTitle>
                                        <SvgIcon
                                            src={'building-size.svg'}
                                            width="16px"
                                            height="16px"
                                        />
                                        <MinTitle>
                                            <BoldText>
                                                Luas Bangunan {buildingSize} m²
                                            </BoldText>
                                        </MinTitle>
                                    </Col>
                                    <Col key={`${id}-rooms`} span={11}>
                                        <SvgIcon
                                            src={'bedroom.svg'}
                                            width="16px"
                                            height="16px"
                                        />
                                        <MinTitle>
                                            <BoldText>
                                                {bedrooms} Kamar Tidur
                                            </BoldText>
                                        </MinTitle>
                                        <SvgIcon
                                            src={'bathroom.svg'}
                                            width="16px"
                                            height="16px"
                                        />
                                        <MinTitle>
                                            <BoldText>
                                                {bathrooms} Kamar Mandi
                                            </BoldText>
                                        </MinTitle>
                                    </Col>
                                </Row>
                            </ServiceWrapper>
                            <Button name="button" onClick={handleWhatsapp}>
                                Download Brosur
                            </Button>
                        </ContentWrapper>
                    </Col>
                    <Col lg={11} md={11} sm={12} xs={24}>
                        <SvgIcon src={icon} width="100%" height="100%" />
                    </Col>
                </StyledRow>
            </Fade>
        </ContentSection>
    );
};

export default withTranslation()(ContentBlock);
