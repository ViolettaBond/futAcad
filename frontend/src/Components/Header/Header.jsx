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

                    <ul className={styles.panel}>
                        <li className={styles.location}>
                            <img src={Photos.mapIcons} alt="" />

                            <span>Нижний Новгород</span>

                            <img src={Photos.arrowDown} alt="" />
                        </li>

                        <li className={styles.phone}>8 800 950-33-98 </li>

                        <li className={styles.login}>
                            <img src={Photos.personIcons} alt="" />
                            Войти
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
