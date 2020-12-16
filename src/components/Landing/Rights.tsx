import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faEdit, faTrash, faLock, faComment, faBriefcase, faHandPaper } from 'assets/icons';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    perspective: 500px;
    position: relative;
    perspective-origin: center left;
    justify-content: center;
`;

const SingleRightContainer = styled.div`
    text-align: center;
    margin: 4px 0;
    transform: rotateY(-5deg) scale(0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        margin-bottom: 6px;
    }

    span {
        opacity: 0.7;
    }
`;

const IconContainer = styled.div`
    border-radius: 15px;
    width: 130px;
    height: 130px;
    background-color: white;
    /* background-image: linear-gradient(to bottom right,#000080, #0000FF); */
    color: #444;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02), 
                0 2px 4px rgba(0,0,0,0.02), 
                0 4px 8px rgba(0,0,0,0.02), 
                0 8px 16px rgba(0,0,0,0.02),
                0 16px 32px rgba(0,0,0,0.02), 
                0 32px 64px rgba(0,0,0,0.02);
`;

interface SingleRightProps {
    icon: IconDefinition;
    right: string;
    article: number;
}

function SingleRight(props: SingleRightProps) {
    const { icon, right, article } = props;
    return (
        <SingleRightContainer>
            <IconContainer>
                <FontAwesomeIcon icon={icon} fixedWidth size="4x" />
            </IconContainer>
            <p>{right}</p>
            <span>[Article {article}]</span>
        </SingleRightContainer>
    )
}

function Rights() {
    return (
        <Container>
            <SingleRight
                icon={faDoorOpen}
                right="Right to Access"
                article={15}
            />
            <SingleRight
                icon={faEdit}
                right="Right to Rectification"
                article={16}
            />
            <SingleRight
                icon={faTrash}
                right="Right to Erasure"
                article={17}
            />
            <SingleRight
                icon={faLock}
                right="Right to Restriction"
                article={18}
            />
            <SingleRight
                icon={faComment}
                right="Right to Notification"
                article={19}
            />
            <SingleRight
                icon={faBriefcase}
                right="Right to Portability"
                article={20}
            />
            <SingleRight
                icon={faHandPaper}
                right="Right to Object"
                article={21}
            />
        </Container>      
    );
}

export default Rights;