import { useState } from 'react';
import styles from './ChessSchool.module.scss';
import { Photos } from '../../../../photo';

export default function ChessSchool() {
    const [activePrice, setActivePrice] = useState('6months');
    const [openFaq, setOpenFaq] = useState(0);

    const priceTabs = [
        { id: '6months', label: '6 месяцев', price: '4 350 ₽' },
        { id: '12months', label: '12 месяцев', price: '3 900 ₽' },
        { id: '24months', label: '24 месяца', price: '3 500 ₽' },
    ];

    const features = [
        { icon: '♟️', text: 'Интерактивные уроки' },
        { icon: '👨‍🏫', text: 'Занятия с экспертами' },
        { icon: '🏆', text: 'Обучение с нуля до профи' },
        { icon: '📊', text: 'Прогрессивная система' },
        { icon: '📱', text: 'Современная онлайн платформа' },
        { icon: '🎯', text: 'Геймификация и турниры' },
    ];

    const teachers = Array(4).fill({
        name: 'Имя Фамилия',
        role: 'Ведущий преподаватель',
        desc: 'Квалифицированный специалист в области шахмат, призер и победитель международных турниров, с опытом обучения более 10 лет.',
    });

    const faq = [
        {
            q: 'Кому подойдёт этот курс?',
            a: 'Курс подходит для детей и взрослых любого уровня подготовки, от новичков до опытных игроков, желающих улучшить свои навыки.',
        },
        {
            q: 'Что нужно для занятий?',
            a: 'Вам понадобится компьютер, планшет или смартфон с доступом в интернет, а также установленный шахматный клиент или веб-версия платформы.',
        },
        {
            q: 'Когда можно начать обучение?',
            a: 'Вы можете начать обучение в любой момент после оплаты. Доступ к материалам открывается мгновенно.',
        },
        {
            q: 'Что делать, если ребенок пропустил занятие?',
            a: 'Все записи уроков сохраняются в личном кабинете. Вы сможете пересмотреть пропущенный материал в удобное время.',
        },
    ];

    return (
        <div className={styles.chessPage}>
            <div className={styles.container}>
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Шахматная школа</h1>
                        <p className={styles.heroSubtitle}>Развитие мышления и логики</p>
                        <ul className={styles.heroTags}>
                            <li>Учим играть с нуля</li>
                            <li>Турниры для всех уровней</li>
                            <li>Повышение рейтинга</li>
                        </ul>
                        <div className={styles.heroPrice}>
                            <span className={styles.priceNumber}>от 4 350 ₽ в месяц</span>
                            <span className={styles.priceFree}>1 занятие бесплатно</span>
                        </div>
                        <p className={styles.heroDesc}>
                            Пройдите пробный урок, получите рекомендации от тренера и выберите свой
                            путь в мире шахмат.
                        </p>
                        <button className={styles.primaryBtn}>Записаться на пробный урок</button>
                    </div>
                    <div className={styles.heroImage}>
                        <div className={styles.imagePlaceholder}>Изображение шахматиста</div>
                    </div>
                </section>

                <section className={styles.stepsSection}>
                    <div className={styles.chatBlock}>
                        <div className={styles.chatMascot}>🦉</div>
                        <div className={styles.chatBubble}>
                            <p>
                                Вы подойдёте занятия,
                                <br />а я познакомлю вас с миром шахмат!
                            </p>
                        </div>
                    </div>
                    <div className={styles.stepsGrid}>
                        {['Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4'].map((step, i) => (
                            <div key={i} className={styles.stepCard}>
                                <div className={styles.stepIcon}>📘</div>
                                <h4>{step}</h4>
                                <p>
                                    Описание этапа обучения,
                                    <br />
                                    погружение в материал.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.videoSection}>
                    <div className={styles.videoWrapper}>
                        <div className={styles.videoPlaceholder}>
                            <div className={styles.playBtn}>▶</div>
                        </div>
                    </div>
                </section>

                <section className={styles.descriptionSection}>
                    <h2>Школа шахмат</h2>
                    <p className={styles.descText}>
                        Шахматы — это уникальный вид спорта для развития мышления. В нашей школе мы
                        обучаем стратегии, тактике и анализу. С нуля до профессионального уровня, мы
                        поможем раскрыть потенциал каждого ученика.
                    </p>
                    <div className={styles.iconsRow}>
                        {features.map((item, idx) => (
                            <div key={idx} className={styles.iconItem}>
                                <span className={styles.icon}>{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.blueBanner}>
                    <div className={styles.bannerContent}>
                        <p>
                            Шахматы могут помочь вам повысить концентрацию,
                            <br />
                            развивать творческие способности и укрепить память.
                        </p>
                        <p className={styles.bannerRightText}>
                            Шахматы также используются в качестве
                            <br />
                            учебного инструмента во многих школах.
                        </p>
                    </div>
                    <button className={styles.outlineBtnWhite}>Записаться на курс</button>
                </section>

                <section className={styles.gallerySection}>
                    <h2>Chess academy для школьников</h2>
                    <p className={styles.galleryDesc}>
                        Образовательная платформа ХОД предлагает уникальную возможность для
                        школьников — погрузиться в мир шахмат.
                    </p>
                    <div className={styles.galleryGrid}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={styles.galleryItem}>
                                <div className={styles.galleryImg}>Фото {i}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.contentSection}>
                    <div className={styles.contentLeft}>
                        <h2>Содержание курса</h2>
                        <p className={styles.contentDesc}>
                            Программа включает в себя изучение истории возникновения игры в шахматы,
                            совершенствование логики, изучение основных принципов и правил, а также
                            освоение техники и тактики.
                        </p>
                        <div className={styles.contentStats}>
                            <div>
                                <strong>24</strong> месяца
                            </div>
                            <div>
                                <strong>160</strong> уроков
                            </div>
                            <div>
                                <strong>1</strong> раз в неделю
                            </div>
                        </div>
                        <div className={styles.priceBlock}>
                            <div className={styles.priceTabs}>
                                {priceTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`${styles.priceTab} ${activePrice === tab.id ? styles.active : ''}`}
                                        onClick={() => setActivePrice(tab.id)}>
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <div className={styles.priceDisplay}>
                                <span className={styles.priceBig}>
                                    от {priceTabs.find((t) => t.id === activePrice).price}
                                </span>
                                <span className={styles.priceSmall}>в месяц</span>
                            </div>
                            <div className={styles.freeLesson}>1 занятие бесплатно</div>
                            <button className={styles.primaryBtn}>Записаться на курс</button>
                        </div>
                    </div>
                    <div className={styles.contentRightMascot}>
                        <div className={styles.mascotBubble}>1 занятие бесплатно</div>
                        <div className={styles.mascot}>🦉</div>
                    </div>
                </section>

                <section className={styles.teachersSection}>
                    <h2>Наши преподаватели</h2>
                    <div className={styles.teachersGrid}>
                        {teachers.map((t, i) => (
                            <div key={i} className={styles.teacherCard}>
                                <div className={styles.teacherAvatar}></div>
                                <h4>{t.name}</h4>
                                <p className={styles.teacherRole}>{t.role}</p>
                                <p className={styles.teacherDesc}>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.faqSection}>
                    <h2>Найдите ответ на свой вопрос</h2>
                    <div className={styles.faqList}>
                        {faq.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <div
                                    className={styles.faqHeader}
                                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                                    <span>{item.q}</span>
                                    <span className={styles.faqToggle}>
                                        {openFaq === index ? '−' : '+'}
                                    </span>
                                </div>
                                <div
                                    className={`${styles.faqBody} ${openFaq === index ? styles.open : ''}`}>
                                    {item.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.formSection}>
                    <div className={styles.formCard}>
                        <div className={styles.formMascot}>
                            <div className={styles.formMascotImg}>🦉</div>
                        </div>
                        <div className={styles.formContent}>
                            <div className={styles.formText}>
                                <h3>Запись на курс уже открыта</h3>
                                <p>
                                    Оставьте заявку, и мы поможем подобрать удобное время для
                                    пробного занятия.
                                </p>
                            </div>
                            <form className={styles.form}>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    className={styles.inputHalf}
                                />
                                <input
                                    type="tel"
                                    placeholder="Ваш телефон"
                                    className={styles.inputHalf}
                                />
                                <input
                                    type="email"
                                    placeholder="Ваш email"
                                    className={styles.inputFull}
                                />
                                <button type="submit" className={styles.submitBtn}>
                                    Отправить заявку
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
