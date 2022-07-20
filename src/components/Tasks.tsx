import { ClipboardText } from 'phosphor-react'
import { useState } from 'react'
import { TaskProps } from '../interfaces/Task'
import { Task } from './Task'
import styles from './Tasks.module.css'

interface TaskListProps {
    tasks: TaskProps[]
    onDeleteTask: (task: string) => void;
}

export function Tasks({tasks, onDeleteTask}: TaskListProps) {    
    function deleteTask(taskToDelete: string) {
        onDeleteTask(taskToDelete);
    }
    
    return(
        <div className={styles.tasks}>
            <header className={styles.header}>
                <b>Tarefas criadas <span>0</span></b>
                <b>Tarefas concluidas <span>0</span></b>
            </header>
            <div className={styles.content}>
                {!tasks.length ? (<div className={styles.emptyBox}>
                    <div className={styles.emptyIcon}>
                        <ClipboardText size={56} />
                    </div>
                    <div className={styles.emptyLegend}>
                        <p><b>Você ainda não tem tarefas cadastradas</b><br/>
                        Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>) : null}
                {tasks.length ? (
                    <div className={styles.taskList}>
                    {tasks.map(task => {
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