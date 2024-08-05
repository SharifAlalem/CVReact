import { useState} from 'react';
import styles from './progress.module.scss';
import { FaUser,FaGraduationCap, FaBriefcase, FaProjectDiagram, FaMedal, FaFileSignature } from "react-icons/fa";
import { ArrayOfSteps } from '@types';

const ProgressBar = () => {
    const [arrayOfSteps,setArrayOfSteps] = useState<ArrayOfSteps[]>([
        {
            id: 1,
            icon: <FaUser/>,
        },
        {
            id: 2,
            icon: <FaGraduationCap/>,
        },
        {
            id: 3,
            icon: <FaBriefcase/>,
        },
        {
            id: 4,
            icon: <FaProjectDiagram/>,
        },
        {
            id: 5,
            icon: <FaMedal/>,
        },
        {
            id: 6,
            icon: <FaFileSignature/>,
        }
    ]);

    return ( 
        <div id={styles.progressBar}>
            <ul id={styles.progressList}>
                {arrayOfSteps.length !== 0 && arrayOfSteps.map((step)=>{
                    return <li className={styles.step}>
                    <span> {step.icon} </span>
                </li>
                })}
            </ul>
        </div>
     );
}
 
export default ProgressBar;