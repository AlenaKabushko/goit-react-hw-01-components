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