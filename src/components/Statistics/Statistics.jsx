import PropTypes from 'prop-types';

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

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}
