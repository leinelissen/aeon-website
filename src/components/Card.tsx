import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    padding: 64px;
    border-radius: 16px;
    flex: 0 1 0;

    p {
        color: #444;
    }

    p:first-of-type {
        font-size: 20px;
    }
`;

function Card({ children }: PropsWithChildren<{}>) {
    return (
        <div>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Card;