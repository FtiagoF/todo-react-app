import { Header } from './components/Header';
import { Tasks } from './components/Tasks'
import styles from './App.module.css'

import './global.css'
import { NewTask } from './components/NewTask';
import { useEffect, useState } from 'react';
import { TaskProps } from './interfaces/Task';

export function App() {
  const [newTask, setNewTask] = useState<TaskProps|{}>({})
  function sendTaskToTaskList(task: TaskProps){
    setNewTask(task);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask onCreateTask={sendTaskToTaskList}/>
          <Tasks newTask={newTask}/> 
        </main>
      </div>
    </>
  );
}


