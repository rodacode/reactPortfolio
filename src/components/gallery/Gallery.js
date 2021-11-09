import React, { useState, useEffect } from 'react';
import ProjectCard from '../card/ProjectCard';
import { useSelector } from "react-redux";
import { TweenMax } from "gsap";
import CSSPlugin from 'gsap/CSSPlugin';

import './gallery.scss';
const C = CSSPlugin;

const items = [
    {
        id: 0,
        title: "The Crypto Road",
        imgSrc: require("../../assets/img/theCryptoRoad.png"),
        text: "App that uses the CoinGecko Open API, Lunar Crush API and Twitter API to retrieve Cryptocurrencies prices, news and tweets about Blockchain, Cryptocurrencies, Decentralization. The UI is created with Chakra UI.",
        url: "https://thecryptoroad.com/",
        tag: "react",
        stack: [
            {
                name: "React",
                icon: "devicon-react-plain"
            },
            {
                name: "Redux",
                icon: "devicon-react-plain"
            },
            {
                name: "SASS",
                icon: "devicon-sass-original"
            }
        ]
    },
    {
        id: 1,
        title: "DPS Rarity Tool",
        imgSrc: require("../../assets/img/dps.png"),
        text:
            "App to search through The Damned Pirate Society NFT collection. Users are able to check each NFT and look at the rarity porcentage and skills scores, also has a ranking page. Over 1000 users.",
        url: "http://dps-nine.vercel.app",
        tag: "react",
        stack: [
            {
                name: "React Hooks",
                icon: "devicon-react-plain"
            },
            {
                name: "Chakra UI",
                icon: "devicon-css3-plain"
            }
        ]
    },
    {
        id: 2,
        title: "NG CMS",
        imgSrc: require("../../assets/img/ng_cms.jpg"),
        text:
            "Content Management System made with Angular 5 and Firebase. A blog front side and an admin panel to manage the posts stored in Firestore.",
        url: "https://nicohardmeier.github.io/NgCMS_portfolio/",
        tag: "angular",
        stack: [
            {
                name: "Angular 5",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Typescript",
                icon: "devicon-typescript-plain"
            },
            {
                name: "Firebase",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Angular Material Design",
                icon: "devicon-angularjs-plain"
            }
        ]
    },
   
    {
        id: 3,
        title: "Dub Siren",
        imgSrc: require("../../assets/img/dub-siren.png"),
        text: "Synth made with React and the web audio API using Howler library for managing the audio and Nexus UI for the user interface.",
        url: "https://nicohardmeier.github.io/dub-siren/",
        tag: "react",
        stack: [
            {
                name: "React Hooks",
                icon: "devicon-react-plain"
            },
            {
                name: "Howler Js",
                icon: "devicon-javascript-plain"
            },
            {
                name: "Nexus UI",
                icon: "devicon-javascript-plain"
            },
            {
                name: "WEB Audio API",
                icon: "devicon-html5-plain"
            }
        ]
    },
    {
        id: 4,
        title: "Tacitus Drum Machine",
        imgSrc: require("../../assets/img/tacitus_drum_machine.png"),
        text:
            "Prototype of a Electronic Music Drum Machine made with Howler and Nexus UI",
        url: "https://nicohardmeier.github.io/tacitusdm/",
        tag: "javascript",
        stack: [
            {
                name: "Javascript",
                icon: "devicon-javascript-plain"
            },
            {
                name: "JQuery",
                icon: "devicon-jquery-plain"
            },
            {
                name: "Howler Js",
                icon: "devicon-javascript-plain"
            },
            {
                name: "Nexus UI",
                icon: "devicon-javascript-plain"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
        ]
    },

    {
        id: 5,
        title: "You Tube DJ",
        imgSrc: require("../../assets/img/youtubedj.jpg"),
        text: "WebApp to make youtube playlists",
        url: "https://nicohardmeier.github.io/ytdj/",
        tag: "react",
        stack: [
            {
                name: "React",
                icon: "devicon-react-plain"
            },
            {
                name: "Redux",
                icon: "devicon-react-plain"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            }
        ]
    },
    {
        id: 6,
        title: "Le Parfum",
        imgSrc: require("../../assets/img/leparfum.png"),
        text: "This website was made with Vue js",
        url: "http://leparfumaromas.com.ar",
        tag: "vue",
        stack: [
            {
                name: "Vue js",
                icon: "devicon-vuejs-plain"
            },
            {
                name: "SASS",
                icon: "devicon-sass-original"
            }
        ]
    },
    {
        id: 7,
        title: "Envases Take Away",
        imgSrc: require("../../assets/img/envases.jpg"),
        text: "Desarrollo de tienda e-commerce con Prestashop.",
        url: "http://www.envasestakeaway.com",
        tag: "ecommerce",
        stack: [
            {
                name: "Prestashop 1.6",
                icon: "fa fa-code"
            },
            {
                name: "CSS3",
                icon: "fa fa-css3"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
            {
                name: "JQuery",
                icon: "devicon-jquery-plain"
            },
            {
                name: "MySql",
                icon: "devicon-mysql-plain"
            }
        ]
    },
    {
        id: 8,
        title: "About me",
        imgSrc: require("../../assets/img/developer.png"),
        text:
            "Hi! My name is Nico, I'm a Front-end Developer with more than 6 years experience, passionate about learning new technologies and frameworks. Hope you enjoy some of my projects and don't hesitate in contact me. Have fun!",
        tag: "about",
        stack: [
            {
                name: "React Hooks",
                icon: "devicon-react-plain"
            },
            {
                name: "Vue js",
                icon: "devicon-vuejs-plain"
            },
            {
                name: "Angular 5",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Material Design",
                icon: "devicon-angularjs-plain"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            }
        ]
    }
]

const Gallery = () => {
    const [projects] = useState(items)
    const selectedTag = useSelector(state => state.selectedTag);

    useEffect(() => {
        TweenMax.from(
            '.MuiCard-root',
            { duration: 2, opacity: 0, y: 350, ease: "back", stagger: 0.45 }
        );
    }, []);

    return (
        <div className="gallery__container">
            {projects.filter((item) => {
                if (selectedTag === 'all') {
                    return item
                }
                return item.tag === selectedTag
            }).map(item => (
                <ProjectCard key={item.id} title={item.title} text={item.text} imgSrc={item.imgSrc} stack={item.stack} projectUrl={item.url} tag={item.tag}/>
            ))}
        </div>
    );
}

export default Gallery;