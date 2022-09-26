import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import style from './Comment.module.css'

interface CommentProps{
    content:string;
    onDeleteCommet: (comment:string) => void
}


export function Comment({content, onDeleteCommet}: CommentProps) {


    function handleDeleteComment(){
        onDeleteCommet(content);
    }

    function handleLike(){
        setLikeCount(likeCount + 1);
    }

    const [likeCount, setLikeCount ] = useState(0);

    return (
        <div className={style.comment}>
           <Avatar hasBorder={false} 
           src='https://github.com/diego3g.png'
           alt=''
           />

            <div className={style.commentBox}>


                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='19 de agosto ás 23:13' dateTime='2022-08-19'>1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash size={24} />
                        </button>

                    </header> 

                    <p>{content}</p>
                </div>

                <footer>
                <button onClick={handleLike}>
                    <div >
                    <ThumbsUp size={20} />
                    Aplaudir
                    </div>
                    <span>
                       {likeCount  }
                    </span>
                    </button>      
                </footer>
            </div>
        </div>
    )
}