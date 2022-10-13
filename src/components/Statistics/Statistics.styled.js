import styled from 'styled-components';

export function getRandomHexColor() {
  return `#${Math.floor((Math.random() * (1 - 0.1) + 0.1) * 16777215).toString(
    16
  )}`;
};


export const StatisticsTitle = styled.h3`
    margin-bottom: ${p => p.theme.spase[4]}px;
    color: ${p => p.theme.color.main};
    font-size:  ${p => p.theme.fontSizes.l}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StatisticsList = styled.ul`
    display: flex;
    width: 300px;
    height: 60px;
    justify-content: space-around;
    align-items: center;
`;

export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${p => p.theme.spase[3]}px;
    width: 100%;
    height: 100%;
    background-color: ${getRandomHexColor()};
    box-shadow: ${p => p.theme.color.shadow} ${p => p.theme.shadows};
    border: ${p => p.theme.borders.normal} ${p => p.theme.color.bgSection};   
`;

export const StatisticsLable = styled.span`
    color: ${p => p.theme.color.secondary};
    font-size:  ${p => p.theme.fontSizes.s}px;
`;

export const StatisticsValue = styled.span`
    color: ${p => p.theme.color.secondary};
    font-size:  ${p => p.theme.fontSizes.m}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`;
