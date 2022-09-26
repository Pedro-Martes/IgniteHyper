import { useState } from 'react'
import { Post } from './Components/Post'
import { Header } from './Components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './Components/Sidebar'


export function App() {
  const post = [{
    
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera ✌', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto incriver no gih hub!' },
      { type: 'link', content: 'github.com/Pedro-Matos678/IgniteHyper' }

    ],
    publishAt: new Date('2022-05-10 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/TheOneAndOnlyBillGates.png',
      name: 'Bill Gates',
      role: 'CEO Microsoft'
    },
    content: [
      { type: 'paragraph', content: 'I love learning about the brain. Here"s cool research on the brain"s GPS.', },
      { type: 'paragraph', content: 'Check this link' },
      { type: 'link', content: 'https://t.co/xTfACQo6T8' }

    ],
    publishAt: new Date('2022-08-22 20:00:00')
  },



  ]

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt} />
            )
          }
          )
          }
        </main>

      </div>
    </div>
  )
}

export default App
