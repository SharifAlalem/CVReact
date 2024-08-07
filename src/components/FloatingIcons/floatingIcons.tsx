"use client"
import styles from './floatingIcons.module.scss';
import { FaUser, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaMedal, FaFileSignature } from "react-icons/fa";
import { FloatingIcons } from '@/types';

const floatingIcons = () => {
  const icons: FloatingIcons[] = [
    { icon: <FaUser /> },
    { icon: <FaGraduationCap /> },
    { icon: <FaBriefcase /> },
    { icon: <FaProjectDiagram /> },
    { icon: <FaMedal /> },
    { icon: <FaFileSignature /> },
    { icon: <FaUser /> },
    { icon: <FaGraduationCap /> },
    { icon: <FaBriefcase /> },
    { icon: <FaProjectDiagram /> },
    { icon: <FaMedal /> },
    { icon: <FaFileSignature /> }
  ];

  return (
    <div data-testid="iconsWrapper">
      {icons.length !== 0 && icons.map((icon, index) => {
        return (
          <span className={styles.icon} key={index}>
            {icon.icon}
          </span>
        )
      })}
    </div>
  );
}

export default floatingIcons;