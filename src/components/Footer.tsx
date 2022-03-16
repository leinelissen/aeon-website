import Link from 'next/link';
import styled from 'styled-components';
import Container, { TwoPanel } from './Container';

const Wrapper = styled.div`
    background-color: #f8f8f8;
    font-size: 14px;
    color: #aaa;
    position: absolute;
    bottom: 0;
    widtH: 100%;
    
    ${TwoPanel} {
        margin: 0;
        padding: 8px 0;
    }
`;

function Footer() {
    return (
        <Wrapper>
            <Container>
                <TwoPanel>
                    <div>
                        <p>
                            Aeon is created and maintained by Lei Nelissen
                        </p>
                    </div>
                    <div>
                        <p><Link href="/legal"><a>Legal stuff</a></Link></p>
                    </div>
                </TwoPanel>
            </Container>
        </Wrapper>
    )
}

export default Footer;