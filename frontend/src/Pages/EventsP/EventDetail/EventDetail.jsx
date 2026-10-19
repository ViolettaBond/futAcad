import { useState } from 'react';
import styles from './EventDetail.module.scss';
// import { Photos } from '../../../../photo';

export default function EventDetail() {
    const [openDay, setOpenDay] = useState(0);
    const programData = [
        {
            title: 'День первый',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque at amet, aliquam lectus, ante a porta mauris, eget semper nibh. Donec ut lectus nisi. Donec sed nibh eu nisl dictum mollis. Sed dignissim, nisl quis dapibus dapibus, justo nisl fringilla leo, nec tincidunt nisl nisi nec metus. In et est et ligula viverra ultricies. Praesent nec tellus nisl. Quisque ac metus dolor. In hac habitasse platea dictumst. Donec ac mauris semper nibh, sed dignissim, nisl quis dapibus dapibus, justo nisl.',
        },
        {
            title: 'День второй',
            content:
                'Содержание второго дня мероприятия. Здесь будет подробное описание того, что ждет участников во второй день.',
        },
        {
            title: 'День третий',
            content:
                'Содержание третьего дня мероприятия. Завершающая часть, подведение итогов и вручение сертификатов.',
        },
    ];

    const speakersData = Array(4).fill({
        name: 'Имя Фамилия',
        role: 'Ведущий мероприятия',
        desc: 'Квалифицированный специалист в своей области, лектор и эксперт с многолетним опытом работы в IT-сфере.',
    });

    return (
        <div className={styles.eventDetailPage}>
            <div className={styles.container}>
                <div className={styles.breadcrumbs}>
                    Главная / Мероприятия / Название мероприятия
                </div>

                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Название мероприятия</h1>
                        <p className={styles.heroSubtitle}>Подпись к названию</p>

                        <div className={styles.heroInfo}>
                            <div className={styles.infoItem}>
                                <span>Когда</span>
                                <strong>25 ноября, 15:00</strong>
                            </div>
                            <div className={styles.infoItem}>
                                <span>Где</span>
                                <strong>Учебный центр, ул. Пушкина, д. 1</strong>
                            </div>
                            <div className={styles.infoItem}>
                                <span>Длительность</span>
                                <strong>2 часа</strong>
                            </div>
                        </div>

                        <div className={styles.heroPrice}>
                            <span className={styles.priceLabel}>Запись сейчас</span>
                            <span className={styles.priceValue}>Бесплатно</span>
                        </div>

                        <button className={styles.primaryBtn}>Записаться на мероприятие</button>
                    </div>

                    <div className={styles.heroImage}>
                        <div className={styles.imagePlaceholder}>
                            <img
                                src="https://via.placeholder.com/600x600/7d3c98/ffffff?text=Speaker"
                                alt="Ведущий"
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.highlightsSection}>
                    <div className={styles.chatBlock}>
                        <div className={styles.chatMascot}>🦉</div>
                        <div className={styles.chatBubble}>
                            <p>
                                Текст с призывающей записиться
                                <br />
                                на мероприятие
                            </p>
                        </div>
                    </div>

                    <div className={styles.highlightsGrid}>
                        <div className={styles.highlightCard}>
                            <div className={styles.iconWrap}>✖</div>
                            <h4>Заголовок</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                dignissim, neque at amet.
                            </p>
                        </div>
                        <div className={styles.highlightCard}>
                            <div className={styles.iconWrap}>●</div>
                            <h4>Заголовок</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                dignissim, neque at amet.
                            </p>
                        </div>
                        <div className={styles.highlightCard}>
                            <div className={styles.iconWrap}>▲</div>
                            <h4>Заголовок</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                dignissim, neque at amet.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.programSection}>
                    <h2 className={styles.sectionTitle}>Программа мероприятия</h2>
                    <p className={styles.sectionDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit,
                        egestas at feugiat sit amet, volutpat vitae risus. Cras condimentum, ligula
                        eget varius eleifend, massa nibh imperdiet est.
                    </p>

                    <div className={styles.accordion}>
                        {programData.map((item, index) => (
                            <div key={index} className={styles.accordionItem}>
                                <div
                                    className={styles.accordionHeader}
                                    onClick={() => setOpenDay(openDay === index ? -1 : index)}>
                                    <span>{item.title}</span>
                                    <span className={styles.accordionToggle}>
                                        {openDay === index ? '✕' : '+'}
                                    </span>
                                </div>
                                <div
                                    className={`${styles.accordionBody} ${openDay === index ? styles.open : ''}`}>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.speakersSection}>
                    <h2 className={styles.sectionTitleWhite}>Мероприятие проводят</h2>
                    <div className={styles.speakersGrid}>
                        {speakersData.map((speaker, idx) => (
                            <div key={idx} className={styles.speakerCard}>
                                <div className={styles.speakerAvatar}></div>
                                <h4 className={styles.speakerName}>{speaker.name}</h4>
                                <p className={styles.speakerRole}>{speaker.role}</p>
                                <p className={styles.speakerDesc}>{speaker.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.gallerySection}>
                    <h2 className={styles.sectionTitle}>Фотографии с прошлых мероприятий</h2>
                    <p className={styles.sectionDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit,
                        egestas at feugiat sit amet, volutpat vitae risus. Cras condimentum, ligula
                        eget varius eleifend, massa nibh imperdiet est.
                    </p>
                    <div className={styles.galleryGrid}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className={styles.galleryItem}>
                                <div className={styles.galleryPlaceholder}>Фото {i}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.formSection}>
                    <div className={styles.formBlock}>
                        <div className={styles.formMascot}>
                            <div className={styles.mascotImg}>🦉</div>
                        </div>
                        <div className={styles.formContent}>
                            <div className={styles.formTextBubble}>
                                <h3>Помочь с выбором?</h3>
                                <p>
                                    Оставьте заявку и наши специалисты свяжутся с вами, ответят на
                                    все вопросы и подберут подходящий вариант обучения.
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
                </section>
            </div>
        </div>
    );
}
