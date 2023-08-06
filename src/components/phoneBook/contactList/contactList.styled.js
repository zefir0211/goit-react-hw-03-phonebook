import styled from '@emotion/styled';

export const List = styled.ul`
    margin-top: 20px;
    display: grid;
    gap: 15px;
    overflow-x: auto;
    height: 110px;
`;

export const Elements = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NameContacts = styled.p`
    
`;

export const Button = styled.button`
    display: block;
    padding: 5px;
    font-size: 0.8em;
    border-radius: 5px;
    background-color: rgba(255, 216, 0, 0.9);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        transform: scale(1.05);
    }
`;