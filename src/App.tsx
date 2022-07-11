import { Header } from './components/Header';
import { Tasks } from './components/Tasks'
import styles from './App.module.css'

import './global.css'
import { NewTask } from './components/NewTask';

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask />
          <Tasks />
        </main>
        
      </div>
    </>
  );
}


