/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {ProjectsGallery} from '../components/ProjectsGallery'
import { Shell } from '../components/Shell'
import styles from '../styles/Home.module.css'
import { AppConfig } from '../utils/AppConfig'

const Projects = () => (
  <div className={styles.container}>
    <Head>
      <title>Raulmar's projects</title>
      <meta name="description" content="raulmar's projects" />
    </Head>
    <Shell location="projects">
      <ProjectsGallery projects={AppConfig.projects}></ProjectsGallery>
    </Shell>
  </div>
)

export default Projects