// import Image from 'next/image'

import styles from '../styles/components/Navbar.module.css';

// Importar imagem

export function Navbar(){
    return(
        <header className={styles.container} >
            <div className={styles.logo}>
            {/* <Image
                className={styles.image}
                src="/Logo.svg"
                alt="Dev Giovane"
                width={50}
                height={50}
            /> */}
            <span>Logo</span>

            </div>
            
            <div className={styles.menu}>
                <ul className={styles.menuItens}>
                    <li className={styles.itens}>Intro </li>
                    <li className={styles.itens}>What I Do</li>
                    <li className={styles.itens}>Who I Am</li>
                    <li className={styles.itens}>My Work</li>
                    <li className={styles.itens}>Contact</li>
                </ul>
            </div>
        </header>
    )
}