import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 100%;
`;

export const OptionsContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    color: #cf551c;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #8c8c8c;
        text-decoration: none;
    }
`;



