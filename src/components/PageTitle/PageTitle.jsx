// import css from './PageTitle.module.css';
import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled.js';

export const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
