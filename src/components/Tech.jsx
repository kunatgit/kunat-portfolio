import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
        {<br></br>}
        <p>These technologies cover a wide range of areas including :</p>
        <p>&nbsp;&nbsp;- Front-end development (ReactJS Next.js JavaScript HTML CSS Material-UI)</p>
        <p>&nbsp;&nbsp;- Back-end development (Node.js Java Spring Boot)</p>
        <p>&nbsp;&nbsp;- Database management (MySQL SQL Server PostgreSQL).</p>
        Additionally Git and SVN are version control systems commonly used for managing source code.
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
