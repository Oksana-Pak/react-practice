import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from "./StatisticItem.styled";

export const StatisticItem = ({ stat , icon: Icon}) => {
  return (
    <StatisticBox>
      <Icon size={30} color='red'/>
      <StatisticCounter>{stat.total}</StatisticCounter>
      <StatisticText>{stat.title}</StatisticText>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  stat: PropTypes.shape({
    total: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }),
  icon: PropTypes.func.isRequired
}
