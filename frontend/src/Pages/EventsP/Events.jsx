import { useState } from 'react';
import styles from './Events.module.scss';
// import { Photos } from '../../../../photo';

export default function Events() {
    const eventsData = [
        {
            type: 'Встреча',
            title: 'Заголовок мероприятия',
            desc: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.',
            date: '16 ноября 2021',
            icon: '📱',
        },
        {
            type: 'Встреча',
            title: 'Заголовок мероприятия',
            desc: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.',
            date: '16 ноября 2021',
            icon: '📱',
        },
        {
            type: 'Встреча',
            title: 'Заголовок мероприятия',
            desc: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.',
            date: '16 ноября 2021',
            icon: '📱',
        },
        {
            type: 'Вебинар',
            title: 'Заголовок мероприятия',
            desc: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.',
            date: '16 ноября 2021',
            color: '#e8f5e9',
            image: true,
        },
        {
            type: 'Вебинар',
            title: 'Заголовок мероприятия',
            desc: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.',
            date: '16 ноября 2021',
            image: true,
            darkText: false,
        },
        {
            type: 'Встреча',
            title: 'Заголовок мероприятия',
            desc: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.',
            date: '16 ноября 2021',
            icon: '📱',
        },
        {
            type: 'Встреча',
            title: 'Заголовок мероприятия',
            desc: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.',
            date: '16 ноября 2021',
            icon: '📱',
        },
        {
            type: 'Встреча',
            title: 'Заголовок мероприятия',
            desc: 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя.',
            date: '16 ноября 2021',
            icon: '📱',
        },
    ];

    return (
        <div className={styles.eventsPage}>
            <div className={styles.container}>
                <div className={styles.breadcrumbs}>Главная / Мероприятия</div>

                <h1 className={styles.pageTitle}>Все мероприятия</h1>

                <div className={styles.heroBanner}>
                    <div className={styles.bannerDate}>
                        <span className={styles.bigNumber}>25</span>
                        <span className={styles.bigMonth}>ноября</span>
                    </div>
                    <div className={styles.bannerText}>
                        <h2>День открытых дверей</h2>
                        <p>
                            Приглашаем всех желающих на бесплатную экскурсию в мир востребованных
                            профессий и полезных навыков
                        </p>
                    </div>
                    <button className={styles.bannerBtn}>Записаться &gt;</button>
                </div>

                <div className={styles.eventsGrid}>
                    {eventsData.map((event, index) => (
                        <div
                            key={index}
                            className={`${styles.eventCard} ${event.image ? styles.hasImage : ''}`}
                            style={{ backgroundColor: event.color }}>
                            {event.image && (
                                <div className={styles.eventImage}>
                                    <div className={styles.imagePlaceholder}>Фото спикера</div>
                                </div>
                            )}

                            <div
                                className={`${styles.eventContent} ${event.darkText === false ? styles.lightText : ''}`}>
                                <div className={styles.eventHeader}>
                                    <span className={styles.eventType}>{event.type}</span>
                                    {event.icon && (
                                        <span className={styles.eventIcon}>{event.icon}</span>
                                    )}
                                </div>
                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                <p className={styles.eventDesc}>{event.desc}</p>
                                <span className={styles.eventDate}>{event.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.formBlock}>
                    <div className={styles.formMascot}>
                        <div className={styles.mascotImg}>🦉</div>
                    </div>
                    <div className={styles.formContent}>
                        <div className={styles.formTextBubble}>
                            <h3>Помочь с выбором?</h3>
                            <p>
                                Оставьте заявку и наши специалисты свяжутся с вами, ответят на все
                                вопросы и подберут подходящий вариант обучения.
                            </p>
                        </div>
                        <form className={styles.form}>
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                className={styles.inputFull}
                            />
                            <div className={styles.formRow}>
                                <input
                                    type="tel"
                                    placeholder="Ваш телефон"
                                    className={styles.inputHalf}
                                />
                                <input
                                    type="email"
                                    placeholder="Ваш e-mail"
                                    className={styles.inputHalf}
                                />
                            </div>
                            <div className={styles.formRow}>
                                <span className={styles.agreement}>
                                    Нажимая на кнопку, вы соглашаетесь на обработку персональных
                                    данных.
                                </span>
                                <button type="submit" className={styles.submitBtn}>
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
