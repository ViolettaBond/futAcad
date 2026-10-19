import { Photos } from '../../../Photos';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <img src={Photos.Logo} alt="" />

                    <nav className={styles.nav}>
                        <li className={styles.courses}>
                            <img src={Photos.equalsIcons} alt="" /> Все курсы
                        </li>
                        <li className={styles.text}>Мероприятия</li>
                        <li className={styles.text}>Базы знаний</li>
                        <li className={styles.text}>Карьера</li>
                    </nav>
                </div>
            </header>
        </>
    );
}
