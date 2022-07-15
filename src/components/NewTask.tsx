import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { TaskProps } from '../interfaces/Task';
import styles from './NewTask.module.css'

interface NewTaskProps {
    onCreateTask: (task:TaskProps) => void;
}

export function NewTask({onCreateTask}:NewTaskProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        onCreateTask?.({done: false, description: newTaskText})
        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }
    
    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Insira a descrição da tarefa');
    }
    
    return(
        <form onSubmit={handleCreateNewTask} className={styles.newtasks}>
            <input 
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                value={newTaskText}
                required
                />
            <button type='submit'>Criar <PlusCircle size={20} /></button>
        </form>
        
    )
}