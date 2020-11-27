import React from 'react'
import styles from './menu-item.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MenuItem = ({ title, imageUrl, size }) => (
  <div 
    className={cx(
      'menu-item',
      size,
      )}
  >
  <div className={styles.backgroundImage} style={{backgroundImage: `url(${imageUrl})`}} />
    <div className={styles.content}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <span className={styles.subtitle}>shop now</span>
    </div>
  </div>
)

export default MenuItem;