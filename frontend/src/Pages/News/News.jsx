import styles from './News.module.scss';

const newsData = [
    {
        id: 1,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas at feugiat sit, laoreet volutpat nunc.',
        image: 'robot',
    },
    {
        id: 2,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas at feugiat sit, laoreet volutpat nunc.',
        image: 'code',
    },
    {
        id: 3,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas at feugiat sit, laoreet volutpat nunc.',
        image: 'meeting',
    },
    {
        id: 4,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas at feugiat sit, laoreet volutpat nunc.',
        image: 'hacker',
    },
    {
        id: 5,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas at feugiat sit, laoreet volutpat nunc.',
        image: 'office',
    },
    {
        id: 6,
        date: '16 ноября 2021',
        title: 'Заголовок новости',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas at feugiat sit, laoreet volutpat nunc.',
        image: 'cyber',
    },
];

export default function News() {
    return (
        <div className={styles.newsPage}>
            <div className={styles.container}>
                <div className={styles.breadcrumbs}>Главная → Новости</div>

                <h1 className={styles.pageTitle}>Новости ХОД Future Academy</h1>

                <div className={styles.newsGrid}>
                    {newsData.map((news) => (
                        <div key={news.id} className={styles.newsCard}>
                            <div className={styles.newsImage}>
                                <span className={styles.imagePlaceholderText}>
                                    {news.image === 'robot' && '🤖'}
                                    {news.image === 'code' && '</>'}
                                    {news.image === 'meeting' && '💼'}
                                    {news.image === 'hacker' && '👨‍💻'}
                                    {news.image === 'office' && '🖥️'}
                                    {news.image === 'cyber' && '🛡️'}
                                </span>
                            </div>

                            <div className={styles.newsContent}>
                                <span className={styles.newsDate}>{news.date}</span>
                                <h3 className={styles.newsTitle}>{news.title}</h3>
                                <p className={styles.newsDesc}>{news.desc}</p>
                                <a href="#" className={styles.newsLink}>
                                    Подробнее <span className={styles.arrow}>→</span>
                                </a>
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
