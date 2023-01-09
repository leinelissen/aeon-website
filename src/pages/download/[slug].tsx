import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/Badge';
import Button, { StyledButton } from 'components/Button';
import Container, { TwoPanel } from 'components/Container';
import Main from 'components/Main';
import OsSelector from 'components/OsSelector';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styled from 'styled-components';

const HorizontalButtons = styled.div`
    padding: 16px 0;
    gap: 8px;
    width: 100%;

    ${StyledButton} {
        margin-right: 8px;
    }
`;

interface ReleaseProps {
    hasData: boolean;
    macosAppleSilicon?: string;
    macosIntel?: string;
    windows?: string;
    debX86?: string;
    debArm?: string;
    rpmX86?: string;
    rpmArm?: string;
    version: string;
    created_at: string;
    params: {
        slug: string
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'macos' } },
            { params: { slug: 'windows' } },
            { params: { slug: 'deb' } },
            { params: { slug: 'rpm' } },
        ],
        fallback: false,
    }
}

export async function getStaticProps() {
    const data = await fetch('https://api.github.com/repos/leinelissen/aeon/releases/latest')
        .then(response => response.json()) as any;
    
    if (!data) {
        return {
            props: {
                hasData: false,
            },
            revalidate: 600,
        };
    }

    console.log(data);
    
    return {
        props: {
            hasData: true,
            macosAppleSilicon: data.assets.find((d: any) => d.name.indexOf('arm64.dmg') !== -1)?.browser_download_url || null,
            macosIntel: data.assets.find((d: any) => d.name.indexOf('x64.dmg') !== -1)?.browser_download_url || null,
            windows: data.assets.find((d: any) => d.name.indexOf('.exe') !== -1)?.browser_download_url || null,
            debArm: data.assets.find((d: any) => d.name.indexOf('arm64.deb') !== -1)?.browser_download_url || null,
            debX86: data.assets.find((d: any) => d.name.indexOf('amd64.deb') !== -1)?.browser_download_url || null,
            rpmArm: data.assets.find((d: any) => d.name.indexOf('arm64.rpm') !== -1)?.browser_download_url || null,
            rpmX86: data.assets.find((d: any) => d.name.indexOf('x86_64.rpm') !== -1)?.browser_download_url || null,
            version: data.name,
            created_at: data.created_at,
        },
        revalidate: 600,
    };
}

export default function Download(props: ReleaseProps) {
    const router = useRouter();
    const { slug } = router.query;
    const {
        hasData,
        version,
        macosAppleSilicon,
        macosIntel,
        windows,
        debArm,
        debX86, 
        rpmArm,
        rpmX86,
        created_at,
    } = props;

    if (!hasData || !slug || Array.isArray(slug)) {
        return (
            <Main>
                <Container>
                    <p>Find our releases on GitHub</p>
                </Container>
            </Main>
        )
    }

    const renderOS = useCallback((): JSX.Element | null => {
        const helpDescriptor = <p>Ran into issues? Check out the <a href="https://docs.aeon.technology">documentation</a> for frequently encountered issues, or consider opening a new issue at the <a href="https://github.com/leinelissen/aeon">GitHub repository</a>.</p>;
        const versionDescriptor = (
            <p>
                <i>Latest version: {version} (released {new Date(created_at).toLocaleDateString()})</i>
                {version.startsWith('v0') ? <Badge>BETA</Badge> : ''}
            </p>
        );

        switch(slug) {
            case 'macos':
                return (
                    <>
                        <h1>Download Aeon for macOS</h1>
                        {versionDescriptor}
                        <p>After downloading, extract the ZIP file and drag Aeon to your applications folder. That's all!</p>
                        {helpDescriptor}
                        <HorizontalButtons>
                            <Button href={macosIntel}>
                                <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} fixedWidth />
                                Download for macOS (Intel)
                            </Button>
                            <Button href={macosAppleSilicon}>
                                <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} fixedWidth />
                                Download for macOS (Apple Silicon)
                            </Button>
                        </HorizontalButtons>
                    </>
                );
            case 'windows':
                return (
                    <>
                        <h1>Download Aeon for Windows</h1>
                        {versionDescriptor}
                        <p>After downloading, open the setup.exe file. Finish the installation process and you&apos;re good to go. That&apos;s all!</p>
                        {helpDescriptor}
                        <Button href={windows}>
                            <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} fixedWidth />
                            Download for Windows
                        </Button>
                    </>
                );
            case 'deb':
                return (
                    <>
                        <h1>Download Aeon for Debian / Ubuntu</h1>
                        {versionDescriptor}
                        <p>After downloading the .deb archive, either open it in the Ubuntu Software Center by double-clicking, or install it using the command-line: <code>sudo dpkg -i aeon.deb</code>. That's all!</p>
                        {helpDescriptor}
                        <HorizontalButtons>
                            <Button href={debX86}>
                                <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} fixedWidth />
                                Download .deb (x86)
                            </Button>
                            <Button href={debArm}>
                                <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} fixedWidth />
                                Download .deb (ARM)
                            </Button>
                        </HorizontalButtons>
                    </>
                );
            case 'rpm':
                return (
                    <>
                        <h1>Download Aeon for Fedora / centOS / RHEL</h1>
                        {versionDescriptor}
                        <p>After downloading the .rpm file, use RPM to install it: <code>sudo rpm -i aeon.rpm</code>. That's all!</p>
                        {helpDescriptor}
                        <HorizontalButtons>
                            <Button href={rpmX86}>
                                <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} fixedWidth />
                                Download .rpm (x86)
                            </Button>
                            <Button href={rpmArm}>
                                <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} fixedWidth />
                                Download .rpm (ARM)
                            </Button>
                        </HorizontalButtons>
                    </>
                );
        }

        return null;
    }, [slug, props]);

    return (
        <Main>
            <Container>
                <OsSelector activeOS={slug} />
                <TwoPanel alignLeft>
                    <div>
                        <Image src="/os-preview.png" width={589} height={344} />
                    </div>
                    <div>
                        {renderOS()}
                    </div>
                </TwoPanel>
            </Container>
        </Main>
    );
}
