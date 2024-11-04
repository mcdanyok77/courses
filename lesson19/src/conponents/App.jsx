import styles from './App.module.css'
import Posts from './Posts.jsx'

export default function App() {
  return (
    <>
      <h1 className={styles.greeting}>Hello, world :)</h1>
      <Posts />
    </>
  )
}
