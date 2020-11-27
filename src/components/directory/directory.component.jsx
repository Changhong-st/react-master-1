import React, { Component } from 'react';
import styles from './directory.module.scss';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

export default class Directory extends Component {
  constructor(){
    super();

    this.state = {
      sections: sections
    }
  }

  render() {
    return (
      <div className={styles.directory_menu}>
        {
          this.state.sections.map( ({title, imageUrl, id, size}) => (
          <MenuItem 
            title={title} 
            key={id}
            imageUrl={imageUrl}
            size={size}
          />
          ))
        }
      </div>
    )
  }
}
