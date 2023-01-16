import PropTypes from 'prop-types';
import { formatEventStart } from '../../utils/formatEventStart';
import { formatEventDuration } from '../../utils/formatEventDuration';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
// import css from './Event.module.css';
import { iconSize } from 'constans';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const formattedDuration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {formattedDuration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
      {/* <span className={`${css.chip} ${css[type]}`}>{type}</span> */}
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
