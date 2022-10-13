import Box from 'components/Box';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { Table } from './Transaction.styled';

function Spending({ transactions }) {
  const theme = useTheme();
  return (
    <Box
      as="section"
      p={theme.spase[2]}
      bg={theme.color.bgSection}
      fontSize={theme.fontSizes.m}
      flexDirection="column"
    >
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(object => (
            <tr key={object.id}>
              <td>{object.type}</td>
              <td>{object.amount}</td>
              <td>{object.currency}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}

export default Spending;

Spending.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
