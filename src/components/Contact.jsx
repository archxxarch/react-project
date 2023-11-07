import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>

                <div className="contact__text">
                    <div className="text">
                        <div>
                            <a href="/">KAKAO : archxxarch

                            </a>
                        </div>
                        <div>
                            <a href="/">EMAIL : archxxarch@gmail.com</a>
                        </div>
                        <div>
                            <a href="/">INSTAGRAM : archxxarch</a>
                        </div>
                    </div>
                </div>

                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

            </div>
        </section>
    )
}

export default Contact