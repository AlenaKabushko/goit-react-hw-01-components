import styled from 'styled-components';

export const Table = styled.table`
    width: 500px;
    box-shadow: ${p => p.theme.color.shadow} ${p => p.theme.shadows};

    thead {
        text-transform: uppercase;
        color: ${p => p.theme.color.secondary};
        background-color: ${p => p.theme.color.bgSecondary};
    }
    
    tr {
        height: 30px;
        text-align: center;
    }

    tbody tr:nth-of-type(odd) {
    background-color: ${p => p.theme.color.secondary};
  }
`;
