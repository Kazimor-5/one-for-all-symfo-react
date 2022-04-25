import React from "react";

const ActivitesCommerciales = () => {
    const myStyle={
        backgroundImage: 
        "url('./assets/activite_commerciales/Fond-nouveau-lifstyle-1000x1000-1.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
               
            };

    return <>
        <section className="section-nos-activites-comm" style={myStyle}>
            <article className="image-titre-activite">
                <img src="./assets/activite_commerciales/Titre-Nos-activités.png" />
            </article><article className="activites-content1">
                    <div className="image-logo-activites">
                        <img src="./assets/activite_commerciales/One4All-california-logo-blanc.png" />
                    </div>
                    <div className="paragraph-activite1">
                        <h2>UN NOUVEAU LIFESTYLE</h2>
                        <h3 className="capital-activites">épicurien, fashion et altruiste...</h3>
                        <h3>Le mantra de la marque au 3ème oeil.</h3>
                        <h3>Apprètez-vous à changer de dimension !!!</h3>
                    </div>
                </article>
            <article className="wrap">
                
                <article className="activites-content2">
                    <div className="">
                        <img src="./assets/activite_commerciales/Plcqaltruiste-42x15-02.png" />
                    </div>
                    <div className="">
                        <p>
                        Choisir #ONE-IV-ALL California c’est faire le choix de vous faire plaisir en soutenant une cause.
                        </p>
                        <p>Grâce à #ONE-IV-ALL California, la consommation n’est plus une finalité mais un moyen de financer des actions altruistes.</p>
                        <button className="btn"><a href="https://www.one4all-california.world/"> www.one4all-california.world/</a></button>
                    </div>
                </article>
            </article>
        </section>
    </>
}

export default ActivitesCommerciales;