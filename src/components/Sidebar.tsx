import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1675023216782-cb08ec5ca27f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/LittigDev.png"/>
                <strong>Gustavo Littig Nelson</strong>
                <span>Web Developper</span>

                <footer>
                    <a href="#">
                        <PencilSimpleLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}