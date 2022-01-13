import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/about1.jpg" alt="image" />
                                <img src="/images/about/about2.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>¿Que significa Amanon?</h2>
                                <p>Amanon significa belleza en nuestra hermosa cultura indígena Pemon.
                                    🌿Los pemones son indígenas suramericanos que habitan la zona sureste de Ciudad Bolivar, desde Canaima hasta la Gran Sábana.
                                    ⛰️ Los Pemon tienen una rica tradición mitológica, riquezas lingüísticas y gastronómicas.🌿.</p>
                                    
                                <p>Amanon renovación natural, representa la belleza Venezolana. Estamos encantados de tener en nuestras manos un pedacito de nuestro hermoso país!! Nos sentimos orgullosos de poner el nombre de nuestro país en alto, Los buenos somos más. </p>


                                <Link href="/">
                                    <a className="btn btn-primary">Home</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <img src="/images/shape/shape1.png" alt="image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default About;