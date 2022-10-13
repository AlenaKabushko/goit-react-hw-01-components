import styled from 'styled-components';

export const FriendsListStyle = styled.ul`
    width: 300px;
`;

export const FriendsItemStyle = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: ${p => p.theme.spase[4]}px;
    height: 60px;
    width: 100%;
    box-shadow: ${p => p.theme.color.shadow} ${p => p.theme.shadows};
    background-color: ${p => p.theme.color.secondary};

    &:not(:last-child) {
        margin-bottom: ${p => p.theme.spase[4]}px;
    }
`;

export const FriendsStatus = styled.span`
    width: 11px;
    height: 11px;
    margin-left: ${p => p.theme.spase[4]}px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => {
        return p.children ? (p.theme.color.online) : (p.theme.color.offline)
    }};
`;

export const FriendsName = styled.p`
    color: ${p => p.theme.color.main};
    font-size:  ${p => p.theme.fontSizes.l}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`