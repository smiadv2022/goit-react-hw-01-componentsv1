// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ title, stat }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats}>
        {stat.map(el => (
          <li className={css.item} key={el.id}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
