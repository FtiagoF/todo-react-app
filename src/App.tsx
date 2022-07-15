import { Header } from './components/Header';
import { Tasks } from './components/Tasks'
import styles from './App.module.css'

import './global.css'
import { NewTask } from './components/NewTask';
import { useState } from 'react';
import { TaskProps } from './interfaces/Task';

export function App() {
  const [tasksList, setTasksList] = useState<TaskProps[]>([])
  function addTasktoList(task: TaskProps){
    console.log(task);
    setTasksList((state) => {return [...state, task]})
  }
  
  function removeTaskFromList(taskList: TaskProps[]) {
    setTasksList(taskList)
    
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask onCreateTask={addTasktoList}/>
          <Tasks onRemoveTask={removeTaskFromList} taskList={tasksList}/>
        </main>
      </div>
    </>
  );
}


