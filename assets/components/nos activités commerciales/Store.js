import React, {useEffect} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Store = () => {
    
    const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
            opacity: 0,
            y: -50,
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
        slideInTop('.store-image');
      }, []);
    
    useEffect(() => {
    slideInTop('.store-image-titre');
    }, []);

    return <>
        <article className="store">
            <div  className="store-content1">
                <div className="store-image-titre">
                    <img src="./assets/activite_commerciales/logo One4all-Store.png" />
                </div>
                <p>
                La Market-place <span className='one4all-font'>#One4All</span> <span  className='one4all-font store-font-yellow'>Store</span> est destinée à rassembler des fournisseurs certifiés du Label <span className='one4all-font'>#One4All</span>, assurant aux acheteurs de consommer en toute quiétude.
                La plateforme invite ainsi ces derniers à adopter le statut de « Consom’Acteurs », soucieux de se procurer <span className="store-font-noir">des produits éco-responsables</span> et <span className="store-font-noir">éthiques</span>. <br/><br/>
                La totalité des bénéfices générés sont reversés à l’<span className="store-font-noir">association</span> <span className='one4all-font'>#One4All</span>. Ces <span className="store-font-yellow">Consom’Acteurs </span>sont assurés que leurs achats serviront à financer des actions concrètes destinées à <span className="store-font-noir">bâtir un monde plus intègre</span>.
                </p>
            </div>
            <div className="store-content2">
                <div className="store-image">
                    <img src= "./assets/activite_commerciales/Plqucqte-altruiste-42x15-02.png" />
                </div>
                <div className='store-content2-text'>
                    <p>Market-place disponible en 2022 </p>
                    <p className='store-content2-text2'>RESTEZ INFORMÉ</p>
                </div>
            </div>
            </article>
    </>
}

export default Store;