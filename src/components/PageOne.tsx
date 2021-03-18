import styles from '../styles/components/PageOne.module.css';
import Image from 'next/image';
export function PageOne(){
    return(
        <div className={styles.section}>
            <div className={styles.content}>
                <h1 id={styles.title}>Heyy hello!, Whats up ?</h1>
                
                <h4 id={styles.description}> 
                    I´am Giovane , Nice to meet you!!
                </h4> 
                <h4 id={styles.description}> 
                    Welcome to my Blog !!
                </h4> 
                
                {/* At the moment i am study some things about programming
                    and I loving it. 
                    For inicial, started study the base of programming,
                    Html, CSS and Javascript for build bealtiful webesites,
                    but now i'am learning too the build websites using 
                    TypeScript, NextJs and ReactJs, React Hooks and news
                    some frameworks, such as SASS.*/}      
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
    )
}