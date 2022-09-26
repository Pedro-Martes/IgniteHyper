import style from './Sidebar.module.css'
import {GithubLogo} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={style.SideBar}>

            <img 
            src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100'
            className={style.cover}
            ></img>
            <div className={style.profile}>
               <Avatar src='https://github.com/Pedro-Matos678.png'/>
                <strong>
                    Pedro Matos
                </strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <GithubLogo
                    size={20}
                    />
                Meu perfil
                </a>
            </footer>

        </aside>
    )
}