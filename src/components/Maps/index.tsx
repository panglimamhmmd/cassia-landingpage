import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { ContentBlockProps } from './types';
import {
    MiddleBlockSection,
    ContentWrapper,
    ContentContainer,
    ImageContainer,
    MinPara,
    MinTitle,
    Content,
    MapsContainer,
} from './styles';

import { SvgIcon } from '../../common/SvgIcon';

const MiddleBlock = ({ section }: ContentBlockProps) => {
    return (
        <MiddleBlockSection>
            <Slide direction="up" triggerOnce>
                <Row justify="space-between">
                    <Col lg={14} md={14} sm={14} xs={24}>
                        <ContentWrapper>
                            <h6>Lokasi Yang Ideal</h6>
                            <Content>
                                Di pusat Tangerang, Cassia menawarkan kehidupan
                                kota dengan lingkungan yang mendukung berbagai
                                passion Anda.
                            </Content>

                            <Row justify="center" align="middle">
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
                                                <Col
                                                    key={id}
                                                    span={6}
                                                    lg={6}
                                                    xs={12}
                                                >
                                                    <ContentContainer>
                                                        <ImageContainer>
                                                            <SvgIcon
                                                                src={item.icon}
                                                                width="60px"
                                                                height="60px"
                                                            />
                                                        </ImageContainer>
                                                        <MinTitle>
                                                            {item.title}
                                                        </MinTitle>
                                                        <MinPara>
                                                            {item.content}
                                                        </MinPara>
                                                    </ContentContainer>
                                                </Col>
                                            );
                                        }
                                    )}
                            </Row>
                        </ContentWrapper>
                    </Col>
                    <Col lg={8} md={8} sm={8} xs={24}>
                        <MapsContainer>
                            <iframe
                                title="maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41869.54226409998!2d106.62644899177882!3d-6.211212424551385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9001b5a445f%3A0x961e305574817f14!2sCassia%20Alam%20Sutera!5e0!3m2!1sid!2sid!4v1721840454076!5m2!1sid!2sid"
                                loading="lazy"
                                style={{
                                    border: 0,
                                    width: '100%',
                                    height: '400px',
                                }}
                                referrerPolicy="no-referrer-when-downgrade"
                                tabIndex={0}
                            />
                        </MapsContainer>
                    </Col>
                </Row>
            </Slide>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
