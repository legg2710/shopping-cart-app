import imgOne from './images/1.jpg';
import imgTwo from './images/2.jpg';
import imgThree from './images/3.jpg';
import imgFour from './images/4.jpg';

const data = {
    products: [
        {
            id: 1,
            img: imgOne,
            title: 'Profiterolo',
            desc: 'Una pasta frolla a forma di ciambella, aperta al centro e farcita con crema, panna o tartufo, solitamente servita con sopra cioccolata calda.',
            price: 5,
        },
        {
            id: 2,
            img: imgTwo,
            title: 'Marchesa Di Cocco',
            desc: 'Delle sfoglie di biscotti imbevute di cioccolato bianco, cocco e caramello salato, guarnito con scaglie di cocco disidratato.',
            price: 6,
        },
        {
            id: 3,
            img: imgThree,
            title: "Torta d'Opera",
            desc: 'Un pan di spagna a base di mandorle che viene inzuppato in uno sciroppo a base di caffè e intervallato da strati di crema al burro al caffè e ganache al cioccolato.',
            price: 8,
        },
        {
            id: 4,
            img: imgFour,
            title: 'Marchesa Di Cioccolato',
            desc: 'Delle sfoglie di biscotti imbevute di salsa al latte ricoperte di cioccolato fondente accompagnata da fragole e noci al forno.',
            price: 7,
        },
      
    ]
}

export default data;