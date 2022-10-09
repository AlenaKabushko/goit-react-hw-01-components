function Transactions({ transaction }) {
    // const { id, type, amount, currency } = transaction;
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
                        <tr key={transact.id}>
                            <td>{transact.type}</td>
                            <td>{transact.amount}</td>
                            <td>{transact.currency}</td>
                        </tr>
                ))}
            </tbody>

        </table>
    )
}

export default Transactions;