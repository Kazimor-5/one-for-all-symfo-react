import React, { useEffect } from 'react';
import image from '../../../public/assets/revolution/Slide-revolution-assets/Slide-revolution.png';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const NotreRevolution = () => {
    const myStyle={
        backgroundImage: 
        "url('./assets/revolution/fond-marche.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
               
            };
gsap.registerPlugin(ScrollTrigger);

const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            duration: duration || 0.3,
            delay: delay || 0.4,
            scrollTrigger: {
            trigger: elem,
            start: 'top bottom',
            end: 'bottom center',
            },
        }
        );
    };

    useEffect(() => {
        slideInTop('#animate-image1');
        }, []);
    
    useEffect(() => {
        slideInTop('#animate-image2');
        }, []);

    useEffect(() => {
        slideInTop('#animate-image3');
        }, []);

    useEffect(() => {
    slideInTop('#animate-image4');
    }, []);
    return (
        <section className='page-revolution' style={myStyle}>
            <article className='header-fixe header-revolution'>
                <img src={image} />
            </article>
            <article className='page-revolution-content'>
                <article className='page-revolution-content1'>
                    <h1>Notre Révolution</h1>
                    <div className='content-revolution1'>
                        <div className='abraham-img-container'>
                            <img className='img animate-image' id='animate-image1'  src='./assets/revolution/Abraham-circle.png'/>
                        </div>
                        <p>
                        Notre système actuel est un bateau naufragé dont l’issue n’est qu’une répétition de l’histoire.<br/> <br/>
                        La crise sanitaire que nous connaissons est inédite dans les chroniques de l’Humanité. Elle paralyse tous les domaines et impacte tous les individus à travers le monde. Elle montre les limites du système capitaliste et prouve qu’à l’heure où la division entre les humains n’a jamais été aussi grande, la solidarité est la seule issue au destin funeste qui menace notre civilisation.
                        </p>
                    </div>
                    
                </article>
                <article className='article-revolution-page page-revolution-content2'>
                    <h3>
                        L’altruisme ne peut exister dans la division.
                        Il fédère dans la tolérance et la Paix.
                    </h3>
                    <p>
                        Don Vebole œuvre en silence depuis 30 ans pour construire cette nouvelle Voie, un chemin plus sûr et durable à l’Humanité.
                    </p>
                    <img className="img beer" id='animate-image2' src='./assets/revolution/d.jpg' />
                </article>
                <article className='article-revolution-page page-revolution-content3'>
                    <p>
                        #One4All est un projet hors normes, non compréhensible par les instances administratives et financières car sans objectif de réaliser des profits mais inversement au service des citoyens du monde.  L’innovation sociale, sociétale et humaine ne sont pas la priorité du système actuel. Beaucoup d’entrepreneurs l’ont appris à leurs dépens.
                    </p>
                    <img className='img' id='animate-image3' src='./assets/revolution/e.jpg' />
                </article>
                <article className='article-revolution-page page-revolution-content4'>
                    <h3>  
                        Rejoignez #One4All et bâtissons ensemble
                        un nouveau système…un autre avenir !
                    </h3>
                    <img className='img don-v' id='animate-image4' src='./assets/revolution/DV-lowPoly.png'/>
                    <p> – L’Homme est responsable de ses malheurs mais il est aussi l’artisan de son bonheur. –</p>
                    <h2>Soutenir la Révolution #One4All</h2>
                    <button className='btn'>
                        Je participe
                    </button>
                </article>
            </article>
        </section>
        
    );
}

export default NotreRevolution;