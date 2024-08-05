"use client"
import styles from './page.module.scss';
import ProgressBar from '@/components/Progress/progress';

const Home = () => {
    return ( 
        <main className={styles.main}> 
            <ProgressBar />
        </main>
     );
}
 
export default Home;