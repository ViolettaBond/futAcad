import styles from './Footer.module.scss';
import { Photos } from '../../../../photo';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.companyBlock}>
                    <img src={Photos.Logo} alt="" />
                    <div className={styles.contactInfo}>
                        <p>8 800 950-33-98 </p>
                        <p>г. Москва, ул. Ленина, д. 50</p>
                        <p>info@hodfutureacademy.ru</p>
                    </div>
                    <div className={styles.socialLinks}>
                        <img src={Photos.Vk} alt="" />
                        <img src={Photos.Insta} alt="" />
                        <img src={Photos.Facebook} alt="" />
                        <img src={Photos.Youtube} alt="" />
                        <img src={Photos.Telega} alt="" />
                    </div>
                    <div className={styles.copyright}>
                        <p>© ХОД, Future Academy</p>
                    </div>
                </div>

                <div className={styles.kidsBlock}>
                    <h3>Детям</h3>

                    <ul>
                        <li>Робототехника</li>
                        <li>Создание игр</li>
                        <li>Программирование</li>
                        <li>Мультимедиа</li>
                        <li>Soft skills</li>
                        <li>Шахматы</li>
                        <li>Блогинг</li>
                        <li>Создание игр</li>
                        <li>Программирование</li>
                        <li>Мультимедиа</li>
                        <li>Soft skills</li>
                    </ul>
                </div>

                <div className={styles.teenBlock}>
                    <h3>Подросткам</h3>
                    <ul>
                        <li>Web-разработка</li>
                        <li>Прикладное программирование</li>
                        <li>Графическое моделирование</li>
                        <li>Game Development</li>
                        <li>Soft skills</li>
                        <li>Разработчик мобильных приложений</li>
                        <li>Блогинг</li>
                        <li>Создание игр</li>
                        <li>Программирование</li>
                        <li>Мультимедиа</li>
                        <li>Soft skills</li>
                    </ul>
                </div>

                <div className={styles.adultBlock}>
                    <h3>Взрослым</h3>
                    <ul>
                        <li>Разработчик игр на Unity</li>
                        <li>Разработка ПО</li>
                        <li>Графический Дизайн</li>
                        <li>Тестировщик ПО</li>
                        <li>Интернет Маркетинг</li>
                        <li>Java-разработчик</li>
                        <li>Python-разработчик</li>
                        <li>iOS-разработчик</li>
                        <li>Программирование</li>
                    </ul>
                </div>

                <div className={styles.infoBlock}>
                    <h3>Информация</h3>
                    <ul>
                        <li>Об академии</li>
                        <li>Мероприятия</li>
                        <li>Новости</li>
                        <li>База знаний</li>
                        <li>Карьера</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
