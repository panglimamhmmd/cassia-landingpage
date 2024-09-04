import { Row, Col } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';

import { ContentBlockProps } from './types';
import { Button } from '../../common/Button';
import { SvgIcon } from '../../common/SvgIcon';
import { Decoration } from '../../common/Decoration';
import {
    ContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    MinPara,
    StyledRow,
    ButtonWrapper,
    BorderRadius,
} from './styles';

const ContentBlock = ({
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
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <BorderRadius>
                            <SvgIcon
                                src={icon}
                                width="100%"
                                height="auto"
                                onclick={() => scrollTo('product')}
                            />
                        </BorderRadius>
                    </Col>
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <MinTitle>About Us</MinTitle>
                            <h6>{t(title)}</h6>
                            <Content>{t(content)}</Content>
                            <Button
                                name="submit"
                                onClick={() => scrollTo('about')}
                            >
                                Explore More
                            </Button>
                        </ContentWrapper>
                    </Col>
                </StyledRow>
            </Fade>
        </ContentSection>
    );
};

export default withTranslation()(ContentBlock);
