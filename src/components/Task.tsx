import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { TaskProps } from '../interfaces/Task'

interface TaskOptionsProps extends TaskProps {
    onDeleteTask: (description: string) => void;
}

export function Task({done, description, onDeleteTask}: TaskOptionsProps) {


    function handleDeleteTask() {
        onDeleteTask(description);
    }
    console.log(done);
    
    return(
        <div className={styles.task}>
            <div className={styles.taskDescription}>
                <div className={styles.round}>
                    <input type="checkbox" />
                </div>
                <p>{description}</p>
            </div>
            <button onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>
        </div>
    )
}