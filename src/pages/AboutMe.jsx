import "./AboutMe.css";

export default function AboutMe() {
    return (
        <main className="about-page">
            <div className="about-shell">
                <header className="about-header">
                    <span className="about-kicker">About Me</span>
                    
                </header>

                <div className="about-grid">
                    <section className="about-card">
                        <h2>Basic Information</h2>
                        <p>
                            <label>Name :</label>
                            <span>Ismail Mandai</span>
                        </p>

                        <p>
                            <label>Level of Education :</label>
                            <span>Bachelor's Degree</span>
                        </p>

                        <p>
                            <label>Location :</label>
                            <span>Dar es Salaam, Tanzania</span>
                        </p>
                    </section>

                    <section className="about-card education-card">
                        <h2>Educational Background</h2>

                        <p>
                            <label>Bachelor's Degree </label>
                            <span>Mzumbe University</span>
                            <span className="about-year">2023-2026</span>
                        </p>

                        <p>
                            <label>Advanced Level Secondary </label>
                            <span>Kilangalanga Secondary School</span>
                            <span className="about-year">2021-2023</span>
                        </p>

                        <p>
                            <label>O-level Secondary </label>
                            <span>Alfagems Secondary School</span>
                            <span className="about-year">2017-2020</span>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
