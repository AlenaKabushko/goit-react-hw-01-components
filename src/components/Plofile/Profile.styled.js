import styled from 'styled-components';

export const ProfileInfo = styled.div`
    width: 300px;
    margin: 25px auto;
    background-color: ${p => p.theme.color.secondary};
    border-radius: ${p => p.theme.radii.small};
    box-shadow: ${p => p.theme.shadows};
    border: ${p => p.theme.borders.none};
`;

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${p => p.theme.spase[5]}px;
    padding-bottom: ${p => p.theme.spase[5]}px;
    gap: ${p => p.theme.spase[3]}px;
`;

export const Foto = styled.img`
    display: block;
    width: 150px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.color.bgSection};
`;

export const Name = styled.p`
    color: ${p => p.theme.color.main};
    font-size:  ${p => p.theme.fontSizes.l}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const MainDescr = styled.p`
    color: ${p => p.theme.color.additional};
    font-size:  ${p => p.theme.fontSizes.s}px;
`;

export const StatsList = styled.ul`
    display: flex;
    background-color: ${p => p.theme.color.bgProfile};
    border-bottom-left-radius: ${p => p.theme.radii.small};
    border-bottom-right-radius: ${p => p.theme.radii.small};
    
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${p => p.theme.spase[2]}px;
    padding: ${p => p.theme.spase[4]}px;
    width: 100%;
    border: ${p => p.theme.borders.normal} ${p => p.theme.color.bgSection};
`;

export const StatsTitle = styled.span`
    color: ${p => p.theme.color.additional};
    font-size:  ${p => p.theme.fontSizes.s}px;
`;

export const StatsValue = styled.span`
    color: ${p => p.theme.color.main};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size:  ${p => p.theme.fontSizes.m}px;
`;


