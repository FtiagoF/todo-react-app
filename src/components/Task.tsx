import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
    return(
        <div className={styles.task}>
            <div className={styles.taskDescription}>
                <div className={styles.round}>
                    <input type="checkbox" className={styles.checkRound} id="checkbox"/>
                    <label htmlFor="checkbox"></label>
                </div>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </div>
            <button>
                <Trash size={32} />
            </button>
        </div>
    )
}