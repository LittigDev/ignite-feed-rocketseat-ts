import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id : 1,
    author: {
      avatarUrl: 'https://github.com/LittigDev.png',
      name: 'Gustavo Littig',
      role: 'Web Development'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat' },
      { type: 'link', content: 'gustavo.development/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' }
    ],
    publishedAt: new Date('2023-01-31 22:00:00'),
  },
  {
    id : 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Opah Pessoal!' },
      { type: 'paragraph', content: 'Preciso de uma ajuda pra resolver alguns bugs em React! Quem estiver disponível entrar em contato comigo' },
      { type: 'link', content: 'diego.develop/bugs' },
      { type: 'link', content: '#bugfix' },
      { type: 'link', content: '#react' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2023-01-01 02:00:00'),
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { 
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            }) 
          }
        </main>
      </div>
    </div>
  )
}

export default App
