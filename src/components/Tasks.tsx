import { ClipboardText } from 'phosphor-react'
import styles from './Tasks.module.css'

export function Tasks() {
    return(
        <div className={styles.tasks}>
            <header className={styles.header}>
                <b>Tarefas criadas <span>0</span></b>
                <b>Tarefas concluidas <span>0</span></b>
            </header>
            <div className={styles.empty}>
                <div className={styles.emptyBox}>
                    <div className={styles.emptyIcon}>
                        <ClipboardText size={56} />
                    </div>
                    <div className={styles.emptyLegend}>
                        <p><b>Você ainda não tem tarefas cadastradas</b><br/>
                        Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}