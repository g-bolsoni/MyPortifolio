// import Image from 'next/image'
import React, {useState} from 'react';
import styles from '../styles/components/Navbar.module.css';

// Importar imagem

export function Navbar(){
    // importconst [iconMenu, setIconMenu] = useState('');

    return(
        <header className={styles.header}>
        <a className={styles.logo} href="#">Logo</a>
        <nav className={styles.topnav} id={styles.myTopnav}>
            <ul className={styles.listaUl}>
                <li className={styles.listaLi}><a href="#Intro">Intro</a></li>
                <li className={styles.listaLi}><a href="#whatido">What I Do</a></li>
                <li className={styles.listaLi}><a href="#whoiam">Who I Am</a></li>
                <li className={styles.listaLi}><a href="#mywork">My Work</a></li>
                <li className={styles.listaLi}><a href="#contact">Contact</a></li>

            </ul>
            <a href="javascript:void(0);" className="icon" >
              <i className="fa fa-bars"></i>
            </a>
        </nav>
    </header>
    )
}