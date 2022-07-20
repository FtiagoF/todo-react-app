import { Header } from './components/Header';
import { Tasks } from './components/Tasks'
import styles from './App.module.css'

import './global.css'
import { NewTask } from './components/NewTask';
import { useEffect, useState } from 'react';
import { TaskProps } from './interfaces/Task';

export function App() {
  const [TaskList, setTaskList] = useState<TaskProps[]>([])

  function updateTaskList(newTaskList: TaskProps[]){
    setTaskList(newTaskList);
  }

  function createTask(task: TaskProps) {
    updateTaskList([...TaskList, task])
  }

  function deleteTask(taskToDelete: string) {
    const TasksWithoutDeletedOne = TaskList.filter(task => {return task.description != taskToDelete});
    setTaskList(TasksWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask onCreateTask={createTask}/>
          <Tasks 
          tasks={TaskList}
          onDeleteTask={deleteTask}/> 
        </main>
      </div>
    </>
  );
}


