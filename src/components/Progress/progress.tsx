"use client"
import styles from './progress.module.scss';
import { ArrayOfSteps } from '@/types';

const ProgressBar = ({steps,setSteps}:{steps:ArrayOfSteps[],setSteps:Function}) => {
    
    const setActive = (id:number) => {
        const newSteps = [...steps];
        newSteps[newSteps.findIndex((step) => step.id === id)].active = !newSteps[newSteps.findIndex((step) => step.id === id)].active;
        setSteps(newSteps);
    }

    return ( 
        <div id={styles.progressBar}>
            <ul id={styles.progressList}>
                {steps.length !== 0 && steps.map((step:any)=>{
                    return <li onClick={() => setActive(step.id)} className={styles.step + ' ' + (step.active === true ? styles.active : ' ')} key={step.id}>
                    <span> {step.icon} </span>
                </li>
                })}
            </ul>
        </div>
     );
}
 
export default ProgressBar;