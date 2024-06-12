import React from "react";
import { useSelector } from "react-redux";

//css
import './../../css/howto.css';

function HowTo() {
    const help = useSelector((state) => state.help.help);
    const mode = useSelector((state) => state.mode.mode);

    if (!help) {
        return (
            <div className="howto">
            </div>
        );
    }

    let cssTitle = 'title-howto';

    if (mode !== 'white') {
        cssTitle = 'title-dark';
    }
    return (
        <div className="howto">
            <h2 className={cssTitle}>Comment ça marche ?</h2>
            <div className="howto-part-violet" key='about'>
                <h3>Que fait cette application ?</h3>
                <p>
                    Ceci est une application pour plannifier un road trip. Vous pouvez ajouter des étapes, les visualiser sur une carte, les modifier et les supprimer.
                </p>
            </div>
            <div className="howto-part-orange" key='add'>
                <h3>Pour ajouter une étape...</h3>
                <p>
                    Il suffit d'aller dans le cadre orange (à droite dans le cadre de couleur de fond gris) intitulé "Ajouter une étape" remplir les éléments demandés :
                    <ul>
                        <li>Le nom de l'étape</li>
                        <li>
                            Une adresse valide
                            <ul>
                                <li>exemple 1 : "Paris, France"</li>
                                <li>exemple 2 : "12 Rue de la Part-Dieu, Lyon"</li>
                            </ul>
                        </li>
                        <li>
                            La date d'arrivée de l'étape<br />
                            <strong><span style={{ color: 'red' }}>Attention !</span></strong> La date doit être au format "MM/JJ/AAAA"
                        </li>
                        <li>La durée du séjour en nombre de jours</li>
                        <li>Appuyer sur le bouton "valider"</li>
                    </ul>
                    Les étapes seront ajoutées à la liste des étapes juste au dessus dans l'ordre de leur date d'arrivée.<br />
                    Si des étapes se chevauchent, ces dernières seront dans un cadre rouge au lieu d'un cadre vert.<br />
                    Vous pourrez corriger en modifiant une des étapes.
                </p>
            </div>
            <div className="howto-part-violet" key='modify'>
                <h3>Pour modifier une étape...</h3>
                <p>
                    Il suffit de cliquer sur le bouton "modifier" de l'étape en question, de modifier les champs en respectant les mêmes règles que pour l'ajout et d'appuyer sur le bouton "valider"
                </p>
            </div>
            <div className="howto-part-orange" key='suppr'>
                <h3>Pour supprimer une étape...</h3>
                <p>
                    Il suffit de cliquer sur le bouton "supprimer" de l'étape en question.
                </p>
            </div>
            <div className="howto-part-violet" key='order'>
                <h3>Et si je veux changer l'ordre..?</h3>
                <p>
                    Il suffit de modifier l'étape en question, changer la date d'arrivée et d'appuyer sur le bouton "valider".<br />
                </p>
            </div>
            <div className="howto-part-orange" key='map'>
                <h3>Et sur la carte ..?</h3>
                <p>
                    Vous pouvez voir les étapes ajoutées grâce à des marqueurs sur la carte. Vous pouvez cliquer sur ces marqueurs pour voir les détails de l'étape.<br />
                    Quand vous aurez au moins deux étapes, vous pourrez voir le trajet entre ces étapes.
                </p>
            </div>
        </div>
    );
}

export default HowTo;