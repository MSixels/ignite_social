import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/MSixelS.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fulano Detal</strong>
              <time title='publicado 13 de maio às 8:20h' dateTime="2022-05-12">Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Senhor, parabéns!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
