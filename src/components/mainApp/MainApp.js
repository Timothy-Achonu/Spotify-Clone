import React from 'react'
import RightSidebar from '../rightSidebar/RightSidebar';
import Center from '../Center/Center';
import styles from './mainApp.module.css'

export default function MainApp() {
  return (
    <div className={styles.container}>
        <Center />
        <RightSidebar />
    </div>
  )
}
