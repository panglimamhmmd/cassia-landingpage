import { Row, Col, Modal } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { ContentBlockProps } from './types';
import { Button } from '../../common/Button';
import { SvgIcon } from '../../common/SvgIcon';
import { Carousel, Input } from 'antd';
import { UserOutlined, PhoneOutlined } from '@ant-design/icons';
import {
    ContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    BoldText,
    StyledRow,
    SizeTitle,
    ContentContainer,
    DetailContainer,
    ModalContainer,
} from './styles';

import WhatsappContent from '../../content/WhatsappContent.json';
import { useState } from 'react';

const handleWhatsapp = () => {
    const redirectUrl = WhatsappContent.url;
    window.open(redirectUrl, '_blank');
};

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '350px',
    color: '#fff',
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
    // borderRadius: '10px',
    // border: '1px solid #fff',
    boxShadow: '0 16px 30px rgb(23 31 114 / 20%)',
    // padding: '10px',
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
    image1,
    image2,
    image3,
}: ContentBlockProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleOk = async () => {
        if (!name || !phone) {
            setError('Please enter your name and phone number');
            return;
        }

        if (!/^\d{10,15}$/.test(phone)) {
            setError('Please enter a valid phone number');
            return;
        }
        const values = {
            name,
            phone,
        };

        const url = 'https://api.sheetmonkey.io/form/a61DKS8qLWXMs14kfji928'; // Fill in your API URL here
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            const redirectUrl =
                'https://wa.me/6287846471598?text=I%20am%20interested%20in%20your%20Property%20for%20sale';
            window.open(redirectUrl, '_blank');
        }

        setIsModalOpen(false);
    };

    return (
        <ContentSection background={background}>
            <Fade direction={direction} triggerOnce>
                <StyledRow
                    justify="space-between"
                    align="middle"
                    id={id}
                    direction={direction}
                >
                    <Col lg={11} md={11} sm={12} xs={24}>
                        {/* <SvgIcon src={icon} width="100%" height="100%" /> */}
                        <>
                            <Carousel autoplay infinite={true}>
                                <div>
                                    <h3 style={contentStyle}>
                                        <SvgIcon
                                            src={image1}
                                            width="100%"
                                            height="100%"
                                        />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <SvgIcon
                                            src={image2}
                                            width="100%"
                                            height="100%"
                                        />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <SvgIcon
                                            src={image3}
                                            width="100%"
                                            height="100%"
                                        />
                                    </h3>
                                </div>
                            </Carousel>
                        </>
                    </Col>
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <ContentContainer>
                                <h6>{t(title)}</h6>
                                {/* <SizeTitle>{UnitSize}</SizeTitle> */}
                                <Content>{t(content)}</Content>
                            </ContentContainer>

                            <ServiceWrapper>
                                <Row justify="center">
                                    <Col key={`${id}-land`} span={11}>
                                        <DetailContainer>
                                            <SvgIcon
                                                src={'land-size.png'}
                                                width="50px"
                                                height="auto"
                                            />
                                            <MinTitle>
                                                <BoldText>
                                                    Luas Tanah {landSize} m²
                                                </BoldText>
                                            </MinTitle>
                                        </DetailContainer>
                                    </Col>
                                    <Col key={`${id}-land`} span={11}>
                                        <DetailContainer>
                                            <SvgIcon
                                                src={'building-size.png'}
                                                width="50px"
                                                height="auto"
                                            />
                                            <MinTitle>
                                                <BoldText>
                                                    Luas Bangunan {buildingSize}{' '}
                                                    m²
                                                </BoldText>
                                            </MinTitle>
                                        </DetailContainer>
                                    </Col>
                                    <Col key={`${id}-rooms`} span={11}>
                                        <DetailContainer>
                                            <SvgIcon
                                                src={'bedroom.png'}
                                                width="50px"
                                                height="auto"
                                            />
                                            <MinTitle>
                                                <BoldText>
                                                    {bedrooms} Kamar Tidur
                                                </BoldText>
                                            </MinTitle>
                                        </DetailContainer>
                                    </Col>
                                    <Col key={`${id}-rooms`} span={11}>
                                        <DetailContainer>
                                            <SvgIcon
                                                src={'bathroom.png'}
                                                width="50px"
                                                height="auto"
                                            />
                                            <MinTitle>
                                                <BoldText>
                                                    {bathrooms} Kamar Mandi
                                                </BoldText>
                                            </MinTitle>
                                        </DetailContainer>
                                    </Col>
                                    <Col key={`${id}-rooms`} span={24}>
                                        <ContentContainer>
                                            <Button
                                                name="button"
                                                onClick={showModal}
                                            >
                                                Download Brosur
                                            </Button>
                                        </ContentContainer>
                                    </Col>
                                </Row>
                            </ServiceWrapper>
                        </ContentWrapper>
                    </Col>
                </StyledRow>
            </Fade>

            <Modal
                title="Isi data kamu dulu yuk..."
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Download Brosur"
                centered
            >
                <ModalContainer>
                    <SvgIcon
                        src="logocassiabiru.png"
                        width="100px"
                        height="auto"
                    />
                    <p>{error}</p>
                    <Input
                        placeholder="Nama"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        prefix={<UserOutlined />}
                    />
                    <Input
                        placeholder="No. HP"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        prefix={<PhoneOutlined />}
                    />

                    <h6>
                        *Keamanan data terjamin. Kami tidak membagikan data kamu
                        ke pihak ketiga mana pun.
                    </h6>
                </ModalContainer>
            </Modal>
        </ContentSection>
    );
};

export default withTranslation()(ContentBlock);
