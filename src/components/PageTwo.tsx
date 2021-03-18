import styles from '../styles/components/PageTwo.module.css';
import Image from 'next/image';


export function PageTwo(){
    return(
        <div className={styles.section}>
            <div className={styles.content}>
                <h2 id={styles.title}>What I Do ? </h2>
                <p id={styles.description}>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Voluptatem repellenarchitecto 
                    to asperiores?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus alias quod, esse provident corrupti sapiente 
                </p>
            </div>
             <div id={styles.image}>
                <Image 
                    src="/arrowDown_icon.svg" 
                    alt="ArrowDown"
                    width={100}
                    height={100}
                />    
            </div>
        </div>
    );
}