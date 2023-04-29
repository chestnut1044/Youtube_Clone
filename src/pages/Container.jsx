import React from 'react';
import styles from './styles/Container.module.css'
import Video from '../components/Video';

export default function Container() {
  return (
    <div className={styles.container}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

