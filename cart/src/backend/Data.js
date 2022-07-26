import imgOne from './images/1.jpg';
import imgTwo from './images/2.jpg';
import imgThree from './images/3.jpg';
import imgFour from './images/4.jpg';
import imgFive from './images/5.jpg';
import imgSix from './images/6.jpg';

const data = {
    products: [
        {
            id: 1,
            img: imgOne,
            title: 'Conchiglie di Salmone',
            desc: 'Pasta di conchiglie con bechamel di zucca e salmone affumicato, grana padano e coriandolo.',
            price: 13,
        },
        {
            id: 2,
            img: imgTwo,
            title: 'Melanzane alla Parmigiana',
            desc: 'Lasagna di melanzane, pomodoro, mozzarella fior di latte, parmigiano e origano.',
            price: 11,
        },
        {
            id: 3,
            img: imgThree,
            title: 'Pizza DAngelo',
            desc: 'Besciamella allo zenzero con pomodoro e crema di formaggio, mozzarella fior di latte, e basilico.',
            price: 65,
        },
        {
            id: 4,
            img: imgFour,
            title: 'Marchese Di Cioccolato',
            desc: 'Torta di cioccolato e fragola.',
            price: 7,
        },
        {
            id: 5,
            img: imgFive,
            title: 'Duchessa di Fragole',
            desc: 'Torta di fragola, latte condensato e crema di formaggio.',
            price: 6,
        },
        {
            id: 6,
            img: imgSix,
            title: 'Cheesecake di Roquefort',
            desc: 'Cheesecake di Roquefort, miele e noci.',
            price: 90,
        },

    ]
}

export default data;