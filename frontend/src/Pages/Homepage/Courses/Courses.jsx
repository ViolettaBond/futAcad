import { Photos } from '../../../../Photos';
import { useState } from 'react';
import styles from './Courses.module.scss';

export default function Courses() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsData = [
        {
            id: 'children',
            title: 'Дети',
            subtitle: '8 — 14 лет',
            icon: Photos.Children,
            courses: [
                'Робототехника',
                'Создание игр',
                'Программирование',
                'Мультимедиа',
                'Soft skills',
                'Шахматы',
                'Блогинг',
                'Создание игр',
                'Программирование',
                'Мультимедиа',
                'Soft skills',
            ],
        },
        {
            id: 'teen',
            title: 'Подростки',
            subtitle: '14 — 18 лет',
            icon: Photos.Teen,
            courses: [
                'Web-разработка',
                'Прикладное программирование',
                'Графическое моделирование',
                'Game Development',
                'Soft skills',
                'Разработчик мобильных приложений',
                'Блогинг',
                'Создание игр',
                'Программирование',
                'Мультимедиа',
                'Soft skills',
            ],
        },
        {
            id: 'adult',
            title: 'Взрослые',
            subtitle: '18 — ∞',
            icon: Photos.Adult,
            courses: [
                'Разработчик игр на Unity',
                'Разработка ПО',
                'Графический Дизайн',
                'Тестировщик ПО',
                'Интернет Маркетинг',
                'Java-разработчик',
                'Python-разработчик',
                'iOS-разработчик',
                'Программирование',
            ],
        },
    ];

    return (
        <section className={styles.courseCategories}>
            <div className={styles.container}>
                <div className={styles.taglineBlock}>
                    <img src={Photos.sovaImg} alt="" />
                    <div className={styles.taglineText}>
                        <h4>Кем вы хотите стать?</h4>
                        <p>
                            Пора найти себя <br /> и выбрать подходящий <br /> курс :)
                        </p>
                        <p>Удачи!</p>
                    </div>
                </div>

                <div className={styles.programList}>
                    <div className={styles.top}>
                        {tabsData.map((tab, index) => (
                            <div
                                key={tab.id}
                                className={`${styles.ageCards} ${activeTabIndex === index ? styles.active : ''}`}
                                onClick={() => setActiveTabIndex(index)}
                            >
                                <img src={tab.icon} alt="" />
                                <div className={styles.text}>
                                    <h3>{tab.title}</h3>
                                    <p>{tab.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.bottom}>
                        <ul className={styles.courseList}>
                            {tabsData[activeTabIndex].courses.map((course, i) => (
                                <li key={i}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
