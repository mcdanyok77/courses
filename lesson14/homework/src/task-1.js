async function fetchPosts() {
  try {
    const post1Response = await fetch('https://dummyjson.com/posts/1')
    const post1 = await post1Response.json()

    const post2Response = await fetch('https://dummyjson.com/posts/2')
    const post2 = await post2Response.json()

    const user1Response = await fetch(`https://dummyjson.com/users/${post1.userId}`)
    const user1 = await user1Response.json()

    const user2Response = await fetch(`https://dummyjson.com/users/${post2.userId}`)
    const user2 = await user2Response.json()

    const combinedData = [
      {
        id: post1.id,
        title: post1.title,
        user: {
          id: user1.id,
          fullName: `${user1.firstName} ${user1.lastName}`
        }
      },
      {
        id: post2.id,
        title: post2.title,
        user: {
          id: user2.id,
          fullName: `${user2.firstName} ${user2.lastName}`
        }
      }
    ]

    return combinedData
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
  }
}

fetchPosts().then((data) => console.log(data))
