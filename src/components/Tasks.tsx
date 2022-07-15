import { ClipboardText } from 'phosphor-react'
import { useState } from 'react'
import { TaskProps } from '../interfaces/Task'
import { Task } from './Task'
import styles from './Tasks.module.css'

interface taskListProps {
    taskList: TaskProps[];
    onRemoveTask: (taskList: TaskProps[]) => void;
}

export function Tasks({taskList, onRemoveTask}:taskListProps) {
    console.log(taskList);
    
    function deleteTask(taskToDelete: string) {
        const TasksWithoutDeletedOne = taskList.filter(task => {return task.description != taskToDelete});
        onRemoveTask(TasksWithoutDeletedOne);
    }
    return(
        <div className={styles.tasks}>
            <header className={styles.header}>
                <b>Tarefas criadas <span>0</span></b>
                <b>Tarefas concluidas <span>0</span></b>
            </header>
            <div className={styles.content}>
                {!taskList.length ? (<div className={styles.emptyBox}>
                    <div className={styles.emptyIcon}>
                        <ClipboardText size={56} />
                    </div>
                    <div className={styles.emptyLegend}>
                        <p><b>Você ainda não tem tarefas cadastradas</b><br/>
                        Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>) : null}
                {taskList.length ? (
                    <div className={styles.taskList}>
                    {taskList.map(task => {
                        return(<Task 
                            key={task.description}
                            done={task.done}
                            description={task.description}
                            onDeleteTask={deleteTask}
                            />)
                        })}
                </div>
                ) : null}
            </div>
            
        </div>
    )
}