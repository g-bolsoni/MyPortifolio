import styles from '../styles/components/Presentation.module.css';

export function Presentation(){
    return(
        <div className={styles.container}>
            <div className={styles.apresentation}>
                <h2 className={styles.h2} >Ola!!</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, voluptas itaque soluta commodi reiciendis aliquid eligendi labore ducimus, tempora laboriosam quis voluptatum maiores perferendis necessitatibus nulla asperiores ratione iste quo!</p>
            </div>
        </div>
    )
}