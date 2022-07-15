import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { TaskProps } from '../interfaces/Task'

interface DeleteTaskProps extends TaskProps {
    onDeleteTask: (description: string) => void
}

export function Task({done, description, onDeleteTask}: DeleteTaskProps) {
    function handleDeleteTask() {
        onDeleteTask(description);
        
    }

    return(
        <div className={styles.task}>
            <div className={styles.taskDescription}>
                <div className={styles.round}>
                    <input type="checkbox" className={styles.checkRound} id="checkbox"/>
                    <label htmlFor="checkbox"></label>
                </div>
                <p>{description}</p>
            </div>
            <button onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>
        </div>
    )
}