import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Образовательная платформа ХОД Future Academy</h1>

                <span>Актуальные знания для новичков и профессионалов</span>
            </div>
        </section>
    );
}
