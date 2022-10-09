import PropTypes from 'prop-types';

function Spending({ transactions }) {
    return (
        <table>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((object) => (
                        <tr key={object.id}>
                            <td>{object.type}</td>
                            <td>{object.amount}</td>
                            <td>{object.currency}</td>
                        </tr>
                ))}
            </tbody>

        </table>
    )
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
}