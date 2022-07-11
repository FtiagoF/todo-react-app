import styles from './Header.module.css'
const logoPath = '../src/assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logoPath} />
                <h1>to<span>do</span></h1>
            </div>
        </header>
    )
}