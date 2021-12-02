import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps, PropsWithChildren } from 'react';
import styled from 'styled-components';

const MarginLeft = styled.span`
    margin-left: 8px;
`;

export const StyledButton = styled.a`
    margin: 0;
    text-decoration: 0;
    background-color: #0000ff;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    padding: 16px 24px;
    margin: 16px 0 0 0;
    border: 0;
    display: inline-block;
    transition: 0.2s ease background-color;
    box-shadow: 0 1px 1px rgba(0,0,255,0.08), 
        0 2px 2px rgba(0,0,255,0.08), 
        0 4px 4px rgba(0,0,255,0.08), 
        0 8px 8px rgba(0,0,255,0.08),
        0 16px 16px rgba(0,0,255,0.08);

    &:hover {
        background-color: #0000dd;
        color: white;
    }
`;

type ButtonProps = PropsWithChildren<{
    icon?: IconDefinition;
}> & ComponentProps<typeof StyledButton>;

function Button({ children, icon, ...props }: ButtonProps) {
    return (
        <StyledButton {...props}>
            {children}
            {icon &&
                <MarginLeft>
                    <FontAwesomeIcon icon={icon} fixedWidth />
                </MarginLeft>
            }
        </StyledButton>
    )
}

export default Button;