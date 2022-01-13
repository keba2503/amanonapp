import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ]
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="main-banner item-bg1">
                    <div className="container">
                        <div className="main-banner-content">
                            <h1>Pagina en construcción</h1>
                            <p>Muy pronto podras disfrutar de nuestros servicios</p>

                            <div className="btn-box">
                            <Link href="/">
                                    <a className="btn btn-primary">Home</a>
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner item-bg2">
                    <div className="container">
                        <div className="main-banner-content">
                        <h1>Pagina en construcción</h1>
                            <p>Muy pronto podras disfrutar de nuestros servicios</p>
                            
                            <div className="btn-box">
                                <Link href="/">
                                    <a className="btn btn-primary">Home</a>
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default MainBanner;