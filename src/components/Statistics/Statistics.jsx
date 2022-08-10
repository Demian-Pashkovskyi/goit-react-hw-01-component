import React from 'react';
import PropTypes from 'prop-types';
import { Sections,StatTitle ,StatsList,StatsItem,StatlLabel,PercentRating} from './StatisticsStyled';


export const Statistics = ({ title, stats }) => (
	<Sections>
		<StatTitle>{title}</StatTitle>
		<StatsList>
			{stats.map(stat => (
				<StatsItem key={stat.id} style={{
					backgroundColor: getRGB(),
					width: `calc(100%/${stats.length})`
				}}>
					<StatlLabel>{stat.label}</StatlLabel>
        	<PercentRating>{stat.percentage}%</PercentRating>
				</StatsItem>
			))}
		</StatsList>
	</Sections>
)

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function getRGB() {
	const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}