import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{
    icon: IconDefinition;
}>;

const Container = styled.div`
    font-size: 24px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    
    span {
        color: #666;
        margin-left: 16px;
        font-size: 18px;
        line-height: 1.5;
    }
`;

function IconPoint({ icon, children }: Props) {
    return (
        <Container>
            <FontAwesomeIcon icon={icon} fixedWidth />
            <span>{children}</span>
        </Container>
    )
}

export default IconPoint;