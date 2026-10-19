import { useState } from 'react';
import styles from './Catalog.module.scss';
import { Photos } from '../../../Photos';

export default function Catalog() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeDifficulty, setActiveDifficulty] = useState(null);

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
                'Графический дизайн',
                'Тестировщик ПО',
                'Интернет-маркетинг',
                'Java-разработчик',
                'Python-разработчик',
            ],
        },
    ];

    const difficultyOptions = ['Новичок', 'Пользователь', 'Профессионал', 'Читер'];

    const trainingTypeOptions = ['Любой', 'Профессия', 'Курс'];

    const programs = Array(8).fill({
        title: 'Программа «Разработка мобильных приложений»',
        desc: 'Разработка мобильных приложений создаёт приложения, которые люди используют на смартфонах, учат коду и технологии.',
        duration: '24 месяца',
    });

    return (
        <div className={styles.catalog}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Все программы обучения</h1>

                <div className={styles.ageTabs}>
                    {tabsData.map((tab, index) => (
                        <div
                            key={tab.id}
                            className={`${styles.ageCard} ${
                                activeTabIndex === index ? styles.active : ''
                            }`}
                            onClick={() => setActiveTabIndex(index)}>
                            <img src={tab.icon} alt={tab.title} />

                            <div className={styles.ageText}>
                                <h3>{tab.title}</h3>
                                <p>{tab.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.twoColumns}>
                    <div className={styles.leftColumn}>
                        <div className={styles.filtersBlock}>
                            <div className={styles.filterGroup}>
                                <h4>Уровень сложности</h4>

                                <div className={styles.radioList}>
                                    {difficultyOptions.map((lvl) => (
                                        <label key={lvl} className={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="difficulty"
                                                checked={activeDifficulty === lvl}
                                                onChange={() => setActiveDifficulty(lvl)}
                                            />

                                            <span className={styles.customRadio}></span>

                                            {lvl}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.filterGroup}>
                                <h4>Тип обучения</h4>

                                <div className={styles.radioList}>
                                    {trainingTypeOptions.map((type) => (
                                        <label key={type} className={styles.radioLabel}>
                                            <input type="radio" name="type" />

                                            <span className={styles.customRadio}></span>

                                            {type}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.filterGroup}>
                                <h4>Длительность</h4>

                                <div className={styles.rangeContainer}>
                                    <span>от 1 до 24 месяцев</span>

                                    <input
                                        type="range"
                                        min="1"
                                        max="24"
                                        className={styles.rangeInput}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.bannerBlock}>
                            <span>Баннер</span>
                            <span>280x400</span>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.directionsBlock}>
                            <h4>Направления</h4>

                            <div className={styles.directionTags}>
                                {tabsData[activeTabIndex].courses.map((course, index) => (
                                    <button key={index} className={styles.tagBtn}>
                                        {course}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.cardsGrid}>
                            {programs.map((card, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={styles.cardContent}>
                                        <span className={styles.category}>Программы</span>

                                        <h3>{card.title}</h3>

                                        <p className={styles.desc}>{card.desc}</p>

                                        <p className={styles.duration}>{card.duration}</p>
                                    </div>

                                    <div className={styles.cardIcon}>📱</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
