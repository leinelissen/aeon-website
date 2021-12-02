import { faApple, faRedhat, faUbuntu, faWindows } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    border-bottom: 1px solid #eee;
    margin-bottom: 32px;
`;

const MenuItem = styled.a`
    display: inline-block;
    margin-right: 32px;
    padding: 16px 0;
    text-decoration: none;
    color: #666;
    border-bottom: 3px solid transparent;

    &:hover:not(.active) {
        border-color: #ddd;
        color: black;
    }

    &.active {
        border-color: #0000ff;
        color: #0000ff;
        font-weight: 600;
    }
`;

interface Props {
    activeOS?: string;
}

function OsSelector({ activeOS = '' }: Props) {
    return (
        <Container>
            <Link href="/download/macos" passHref>
                <MenuItem className={activeOS === 'macos' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faApple} style={{ marginRight: 8 }} fixedWidth />
                    macOS
                </MenuItem>
            </Link>
            <Link href="/download/windows" passHref>
                <MenuItem className={activeOS === 'windows' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faWindows} style={{ marginRight: 8 }} fixedWidth />
                    Windows
                </MenuItem>
            </Link>
            <Link href="/download/deb" passHref>
                <MenuItem className={activeOS === 'deb' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faUbuntu} style={{ marginRight: 8 }} fixedWidth />
                    Debian/Ubuntu
                </MenuItem>
            </Link>
            <Link href="/download/rpm" passHref>
                <MenuItem className={activeOS === 'rpm' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faRedhat} style={{ marginRight: 8 }} fixedWidth />
                    centOS/Fedora/RHEL
                </MenuItem>
            </Link>
        </Container>
    );
}

export default OsSelector;