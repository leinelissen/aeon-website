import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import BareContainer from './Container';
import { animated, useTransition } from 'react-spring';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const MenuContainer = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: rgba(245, 245, 245, 0.6);
    -webkit-backdrop-filter: blur(80px);
    border-bottom: 1px solid #eee;
    font-family: Inter;
`;

const Container = styled(BareContainer)`
    display: flex;
    align-items: center;
    height: 60px;

    a {
        border-bottom: 0;

        &.active {
            font-weight: 600;
        }
    }
`;

const Right = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    
    a, button {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        padding: 0;
        margin-left: 32px;
        text-decoration: none;
        color: black;
        transition: border-color 0.2s ease;
        border-color: transparent;
        background-color: transparent;
        font-size: 14px;
        cursor: pointer;
        
        &:hover {
            border-bottom: 1px solid #bbb;
        }
    }

    & > span {
        margin-left: 25px;
    }

    &.mobile {
        display: none;
    }

    @media(max-width: 600px) {
        &.mobile {
            display: block;
        }
        &.desktop {
            display: none;
        }
    }
`;

const Overlay = styled(animated.div)`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(255, 255, 255, 0.8);
    backdrop-filter: blur(50px);
    display: flex;
    flex-direction: column;

    a, button {
        font-family: inherit;
        border: 0;
        margin: 0;
        border-bottom: 1px solid #eee;
        background-color: rgba(240, 240, 240, 0.8);
        padding: 32px;
        font-size: 16px;
        text-align: left;
        color: black;
        font-weight: 400;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: rgba(245, 245, 245, 1);
        }

        &:active {
            background-color: rgba(230, 230, 230, 1);
        }
    }
`;

const Image = styled.img`
    height: 24px;
`;

export function Links() {
    const { pathname } = useRouter();

    return (
        <>
            <Link href="/download">
                <a className={pathname.startsWith('/download') ? 'active' : ''}>
                    Downloads
                </a>
            </Link>
            <a href="https://docs.aeon.technology" target="_blank">
                Documentation
            </a>
            <a href="https://docs.aeon.technology/extending-aeon/reporting-issues" target="_blank">
                Contributing
            </a>
            <a href="https://github.com/leinelissen/aeon" style={{ opacity: 0.5 }} target="_blank">
                View on GitHub&nbsp;&nbsp;<FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
        </>
    )
}

export default function Menu() {
    const [modalIsOpen, setModal] = useState(false);
    const transitions = useTransition(modalIsOpen, null, {
        from: { opacity: 0, transform: 'translate3d(0,-50px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-50px,0)' }
    });
    const handleClick = useCallback(() => {
        setModal(!modalIsOpen);
        document.body.style.overflow = modalIsOpen ? 'auto' : 'hidden';
    }, [setModal, modalIsOpen]);

    return (
        <MenuContainer>
            <Container>
                <Link href="/">
                    <a><Image src="/logo.svg" alt="Aeon Logo" /></a>
                </Link>
                <Right className="desktop">
                    <Links />
                </Right>
                <Right className="mobile">
                    <button onClick={handleClick}>Menu</button>
                </Right>
            </Container>
            {transitions.map(({ item, key, props }) => 
                item && <Overlay key={key} style={props} onClick={handleClick}>
                    <button onClick={handleClick}>Close</button>
                    <Links />
                </Overlay>
            )}
        </MenuContainer>
    );
}