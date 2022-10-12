import Box from 'components/Box';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import {
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLable,
  StatisticsValue,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  const theme = useTheme();
  return (
    <Box
      as="section"
      p={theme.spase[1]}
      bg={theme.color.bgSection}
      fontSize={theme.fontSizes.m}
      flexDirection="column"
    >
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(object => (
          <StatisticsItem key={object.id}>
            <StatisticsLable>{object.label}</StatisticsLable>
            <StatisticsValue>{object.percentage} %</StatisticsValue>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </Box>
  );
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
};
