import styles from './Header.module.css'

const navs = [
  { title: 'Главная' },
  { title: 'Блог' },
  { title: 'Контакты' }
]

export default function Header() {
  return (
    <ul className={styles.nav}>
      {navs.map((nav) => (
        <li key={nav.title} className={styles['nav-li']}>{nav.title}</li>
      ))}
    </ul>
  )
}
