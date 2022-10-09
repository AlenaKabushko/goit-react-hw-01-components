function Transactions({ transaction }) {
    const { id, type, amount, currency } = transaction;
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
                {transaction.map((transact) => (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                ))}
            </tbody>

        </table>
    )
}

export default Transactions;