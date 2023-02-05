import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { FormEvent, ChangeEvent, useState } from 'react';

interface IAuthor {
    name: string;
    role: string;
    avatarUrl: string;
}

interface IContent {
    type: 'paragraph' | 'link';
    content: string,
}

interface IPost {
    author: IAuthor;
    publishedAt: Date;
    content: Array<IContent>;
}

export function Post({ author, publishedAt, content }: IPost) {
    const [comments, setComments] = useState(['Post muito bacana ein!']);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText ]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    { publishedDateRelativeToNow }
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map((item, id) => {
                        if (item.type === 'paragraph') {
                            return <p key={id}>{ item.content }</p>
                        } else if (item.type === 'link') {
                            return <p key={id}><a href="#">{ item.content }</a></p>
                        }

                        return (
                            <p>Post sem conteúdo</p>
                        )
                    })
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map((content, id) => {
                        return (
                            <Comment content={content} key={id} onDeleteComment={deleteComment}/>
                        )
                    })
                }
            </div>
        </article>
    )
}