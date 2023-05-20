import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ title, stat }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats}>
        {stat.map(el => (
          <li
            className={css.item}
            key={el.id}
            style={{ background: getRandomColor() }}
          >
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
