import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css'
import { format, formatDistance, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import { useState,FormEvent, ChangeEvent, InvalidEvent } from 'react';

interface Author{
    name:string;
    role:string;
    avatarUrl:string;
}

interface Content{
    type: string;
    content: string;
   
 }

interface postProps{
    author:Author;
    publishAt:Date;
    content:Content[];
}



export function Post({ author, publishAt, content }:postProps) {


    const dataFormat = format(publishAt, "d 'de' LLLL 'as' HH'h'", {
        locale: ptBR,
    })

    const publishDateRelative = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true,


    });

    const [comments, setComments] = useState([
        'Incrível !'
    ])

    const [newCommentText, setNewCommentText] = useState('');




    function handleSubmitComment(event: FormEvent) {
        event.preventDefault();



        setComments([...comments, newCommentText])
        setNewCommentText('');

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {

        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);


    }

    function deleteCommet(commentDelete: string) {
        const commentWhithoutDeletedOne = comments.filter(comment =>{
            return comment != commentDelete;
        })
        setComments(commentWhithoutDeletedOne);
    }

    function handleNewInvalidomment(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Este compo eh obrigatorio');
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return ( 
        <div className={style.post}>
            <article className={style.article}>

                <header>
                    <div className={style.author}>

                        <Avatar src={author.avatarUrl} />

                        <div className={style.authorInfo}>
                            <strong>
                                {author.name}
                            </strong>

                            <span>
                                {author.role}
                            </span>
                        </div>
                    </div>

                    <time title={dataFormat} dateTime={publishAt.toISOString()}>
                        {publishDateRelative}
                    </time>
                </header>

                <div className={style.content}>


                    {content.map(line => {
                        if (line.type == 'paragraph') {
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type == 'link') {
                            return <p key={line.content}><a href='#'>{line.content}</a></p>;
                        }
                    })}
                </div>

                <form onSubmit={handleSubmitComment} className={style.comment}>
                    <strong>Deixe Seu Feedback</strong>


                    <textarea
                        name='comment'
                        placeholder='escreva aqui'
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewInvalidomment}
                        required
                    >

                    </textarea>
                    <footer>
                        <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
                    </footer>
                </form>

                <div className={style.commentList}>

                    {comments.map(comment => {

                        return (
                            <Comment
                                key={comment}
                                content={comment}
                                onDeleteCommet={deleteCommet}
                            />

                        )
                    })}
                </div>

            </article>

        </div>
    );
}