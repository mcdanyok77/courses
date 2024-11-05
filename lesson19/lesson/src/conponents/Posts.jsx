import styles from './Posts.module.css'

const posts = [
  { title: 'one' },
  { title: 'two' },
  { title: 'three' },
  { title: 'four' }
]

export default function Posts() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title} className={styles['list-item']}>
          <article>
            <h2>{post.title} <span className={styles.smiley}>:)</span></h2>
          </article>
        </li>
      ))}
    </ul>
  )
}
