import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

export default function Modal() {
  return createPortal(
    <p className={styles.modal}>Modal</p>,
    document.getElementById('modal')
  )
}
