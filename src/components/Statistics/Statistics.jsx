function Statistics({ title, stats }) {
    return (
        <section>
            {title && <h2>{title}</h2>}
            {stats.map((object) => (
                <li key={object.id}>
                    <span>{object.label}</span>
                    <span>{object.percentage}</span>
                </li>))}
        </section>)
    
}

export default Statistics;
