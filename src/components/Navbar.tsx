// import Image from 'next/image'
import React, {useState} from 'react';
import styles from '../styles/components/Navbar.module.css';
import Image from 'next/image'

// Importar imagem

export function Navbar(){
    const [iconMenu, setIconMenu] = useState('');


    return(
        <header className={styles.container} >
            <h1 className={styles.navTitle}>
                <a href="#" title="MyBlog">My Blog</a>
            </h1>
            <a className={styles.iconMenu}
                // onClick={(e)=>{
                //     if(window.innerWidth == 1199){

                //     }
                // }}
            >
                <Image 
                src="/menu.svg"
                alt="Menu"
                width={30}
                height={30}
            />
            </a>
            
            <nav className={styles.navbar}>
                <ul className={styles.navbarItens}>
                    <li>
                        <a href="#Intro" title="Intro">Intro</a>
                    </li>
                    <li>
                        <a href="#WhatIDo" title="WhatIDo">What I Do</a>
                    </li>
                    <li>
                        <a href="#WhoIAm" title="WhoIAm">Who I Am</a>
                    </li>
                    <li>
                        <a href="#MyWork" title="MyWork">My Work</a>
                    </li>
                    <li>
                        <a href="#Contact" title="Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}