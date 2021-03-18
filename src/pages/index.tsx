import {Navbar} from '../components/Navbar';
import {PageOne} from '../components/PageOne';
import {PageTwo} from '../components/PageTwo';


import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      {/*<PageOne/>*/}
      <PageTwo/>
      
    </div>
  )
}
