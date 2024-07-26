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
                            <h6>Lokasi Yang Ideal</h6>
                            <Content>
                                Di pusat Tangerang, Cassia menawarkan kehidupan
                                kota dengan lingkungan yang mendukung berbagai
                                passion Anda. Hanya beberapa menit dari sekolah,
                                universitas, fasilitas kesehatan, olahraga,
                                hiburan, belanja, dan Bandara Soekarno-Hatta.
                                Lokasi strategisnya menghemat waktu Anda,
                                memungkinkan lebih banyak momen berharga bersama
                                orang tercinta.
                            </Content>
                            <div className="google-maps-code">
                                <iframe
                                    title="maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41869.54226409998!2d106.62644899177882!3d-6.211212424551385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9001b5a445f%3A0x961e305574817f14!2sCassia%20Alam%20Sutera!5e0!3m2!1sid!2sid!4v1721840454076!5m2!1sid!2sid"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    tabIndex={0}
                                />
                            </div>

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
