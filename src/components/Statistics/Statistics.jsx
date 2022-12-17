import PropTypes from "prop-types";
import { StatisticItem } from "components";
import { StatisticsList, StatisticTitle } from "./Statistics.styled";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTreeDoor } from "react-icons/gi";
import { StatisticBox } from "components/StatisticItem/StatisticItem.styled";

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticTitle>{title}</StatisticTitle>

      <StatisticsList>
        {stats.map(({ id, ...stat }) => (
          <StatisticItem key={id} stat={stat} icon={icons[id]} />
        ))}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
