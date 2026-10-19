import { useState } from 'react';
import styles from './Main.module.scss';
import { Photos } from '../../../Photos';

export default function Main() {
   

    return (
        <>
           

            <section className={styles.videoBanner}>
                <div className={styles.container}>
                    <div className={styles.videoImg}>
                        <img src={Photos.Video} alt="" />
                    </div>
                </div>
            </section>

            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.topText}>
                        <h2>
                            Актуальные знания от признанных экспертов рынка
                            <br />
                            для новичков и практикующих специалистов.
                        </h2>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>600</span>
                            <span className={styles.statLabel}>Курсов</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>82</span>
                            <span className={styles.statLabel}>Ведущих преподавателей</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>14 795</span>
                            <span className={styles.statLabel}>Выпускников</span>
                        </div>
                    </div>

                    <div className={styles.openDayBanner}>
                        <div className={styles.openDayDate}>
                            <span className={styles.bigNum}>25</span>
                            <span className={styles.month}>ноября</span>
                        </div>
                        <div className={styles.openDayText}>
                            <h4>День открытых дверей</h4>
                            <p>
                                Приглашаем всех желающих на бесплатную экскурсию в мир
                                востребованных профессий и полезных навыков
                            </p>
                        </div>
                        <button className={styles.signUpBtn}>Записаться &gt;</button>
                    </div>

                    <div className={styles.gridWrapper}>
                        <div className={styles.bigCard}>
                            <div className={styles.cardContent}>
                                <img
                                    src={Photos.ProgramsIcon || 'https://via.placeholder.com/50'}
                                    alt=""
                                />
                                <div className={styles.textBlock}>
                                    <h3>Программы обучения</h3>
                                    <p>
                                        В списке наших курсов вы сможете найти профессию и занятие
                                        по душе, изучить новое и получить практические знания,
                                        которые помогут получить работу мечты.
                                    </p>
                                </div>
                            </div>
                            <button className={styles.moreBtn}>Подробнее &gt;</button>
                        </div>

                        <div className={styles.rightColumn}>
                            <div className={styles.topRow}>
                                <div className={`${styles.smallCard} ${styles.lightBlueCard}`}>
                                    <img
                                        src={Photos.NewsIcon || 'https://via.placeholder.com/50'}
                                        alt=""
                                    />
                                    <h3>Новости Академии</h3>
                                </div>
                                <div className={`${styles.smallCard} ${styles.whiteCard}`}>
                                    <img
                                        src={Photos.ItWorldIcon || 'https://via.placeholder.com/50'}
                                        alt=""
                                    />
                                    <h3>Мир IT</h3>
                                </div>
                            </div>

                            <div className={styles.tryBlock}>
                                <div className={styles.tryIcons}>
                                    <span className={styles.shape}>×</span>
                                    <span className={styles.shape}>△</span>
                                    <span className={styles.shape}>○</span>
                                </div>
                                <div className={styles.tryText}>
                                    <h4>Попробуй!</h4>
                                    <p>
                                        Пройди тест и узнай свои способности в сфере информационных
                                        технологий
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
