import { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Head from 'next/head';
import styles from '../../public/assets/css/styles.module.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCollection);
      setProjects(projectsSnapshot.docs.map(doc => doc.data()));
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
