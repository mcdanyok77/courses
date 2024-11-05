import styles from '/Users/mcdanyok/Desktop/courses/lesson19/homework/src/conponents/Main.module.css'

const cards = [
  { title: 'SEO для начинающих', author: 'Иван Иванович', image: 'https://doka.guide/html/semantics/demos/bad-markup/images/seo-course.png', text: 'Благодаря этому курсу вы научитесь задавливать конкурентов с помощью ссылочной массы, а не качественного контента.', date: '13 февраля 2023' },
  { title: 'WordPress разработка', author: 'Ольга Ольгивна', image: 'https://doka.guide/html/semantics/demos/bad-markup/images/wordpress-course.png', text: 'WordPress — топ за свои деньги. Изучите его, чтобы стать востребованным фрилансером.', date: '23 октября 2023' },
  { title: 'JavaScript для чайников', author: 'М. Михайловских', image: 'https://doka.guide/html/semantics/demos/bad-markup/images/javascript-course.png', text: 'Курс подойдёт для любых чайников: электрических, газовых и даже для кастрюлек, временно подменяющих сломанный чайник.', date: '30 ноября 2023' }
]

export default function Main() {
  return (
    <>
      <h1 className={styles.h1}>Курсы компании «Гарцующий пони»</h1>
      <ul className={styles['articles-list']}>
        {cards.map((card, index) => (
          <li key={index} className={styles['articles-list-li']}>
            <article>
              <h2 className={styles['articles-list-h2']}>{card.title}</h2>
              <address className={styles['articles-list-address']}>{card.author}</address>
              {card.image && <img src={card.image} alt={card.title} />}
              <p className={styles['articles-list-p']}>{card.text}</p>
              <time dateTime={new Date('01.01.2000').toISOString()}>{card.date}</time>
            </article>
          </li>))}
      </ul>
    </>
  )
}
