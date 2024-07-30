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
    BoldText,
    StyledRow,
    SizeTitle,
} from './styles';

import WhatsappContent from '../../content/WhatsappContent.json';
import { Decoration } from '../../common/Decoration';

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
    background,
    UnitSize,
    t,
    id,
    direction,
    decorBottom,
    decorTop,
    decorLeft,
    decorRight,
    decorRotate,
    decorSize,
    decorName,
}: ContentBlockProps) => {
    return (
        <ContentSection background={background}>
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
                        </ContentWrapper>
                    </Col>
                    <Col lg={11} md={11} sm={12} xs={24}>
                        <SvgIcon src={icon} width="100%" height="100%" />
                    </Col>

                    <Col lg={11} md={11} sm={12} xs={24}>
                        <Button name="button" onClick={handleWhatsapp}>
                            Download Brosur
                        </Button>
                    </Col>
                </StyledRow>
            </Fade>
            <Decoration
                src={decorName}
                width={decorSize}
                height="auto"
                bottom={decorBottom}
                right={decorRight}
                top={decorTop}
                left={decorLeft}
                rotate={decorRotate}
                zindex="0"
            />
        </ContentSection>
    );
};

export default withTranslation()(ContentBlock);
