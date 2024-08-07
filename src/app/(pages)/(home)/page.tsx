"use client"
import styles from './page.module.scss';
import ProgressBar from '@/components/Progress/progress';
import { useProgressSteps } from '@/context/steps';

const Home = () => {
    const {steps,setSteps} = useProgressSteps();
    return ( 
        <main className={styles.main}> 
            <ProgressBar steps={steps} setSteps={setSteps} />
        </main>
     );
}
 
export default Home;