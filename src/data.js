import img1 from './assets/images/shoes/shoe1.png';
import img2 from './assets/images/shoes/shoe2.png';
import img3 from './assets/images/shoes/shoe3.png';
import img4 from './assets/images/shoes/shoe4.png';
import img5 from './assets/images/shoes/shoe5.png';
import img6 from './assets/images/shoes/shoe6.png';


import watchHeader from './assets/images/hero_watch.png'
import watch1 from './assets/images/watches/watch1.png'
import watch2 from './assets/images/watches/watch2.png'
import watch3 from './assets/images/watches/watch3.png'
import watch4 from './assets/images/watches/watch4.png'
import watch5 from './assets/images/watches/watch5.png'


import jerseyHeader from './assets/images/hero_shirt.png';
import jersey1 from './assets/images/jersey/jersey1.png'
import jersey2 from './assets/images/jersey/jersey2.png'
import jersey3 from './assets/images/jersey/jersey3.png'
import jersey4 from './assets/images/jersey/jersey4.png'


let data = {
    shoes:[{
        id:0,
        title:'Nike Blazer',
        description:'Men Shoes',
        imgSrc:img1,
        basePrice:'3000',
        theme:'black'
    },{
        id:1,
        title:'Air Max 97',
        description:'Athletic Shoes',
        imgSrc:img2,
        basePrice:'2800',
        theme:'gray'
    },
    {
        id:2,
        title:'Cobbler 06',
        description:'Casual Shoes for Everyday Wear',
        imgSrc:img3,
        basePrice:'4000',
        theme:'blue'
    }
    ,
    {
        id:3,
        title:'Air Huarache',
        description:'Casual Shoes for Everyday Wear',
        imgSrc:img4,
        basePrice:'4000',
        theme:'blue'
    }
    ,
    {
        id:4,
        title:'Casual 1',
        description:'Casual Shoes for Everyday Wear',
        imgSrc:img5,
        basePrice:'4000',
        theme:'blue'
    }
    ,
    {
        id:6,
        title:'Air Max 1',
        description:'Casual Shoes for Everyday Wear',
        imgSrc:img6,
        basePrice:'4000',
        theme:'blue'
    }],
    watchesHeader:[
        {
            id:0,
            title:'Watches',
            description:'Crafted from the finest raw materials and assembled with scrupulous attention to detail',
            imgSrc:watchHeader,
            theme:'dark'
        }
    ],
    watches:[{
        id:0,
        title:'The Fifth',
        description:'',
        imgSrc:watch1,
        basePrice:'3500',
        theme:'black'
    },{
        id:1,
        title:'Polar',
        description:'',
        imgSrc:watch2,
        basePrice:'3500',
        theme:'black'
    },
    {
        id:2,
        title:'BrathWait',
        description:'',
        imgSrc:watch3,
        basePrice:'3500',
        theme:'black'
    }
    ,{
        id:3,
        title:'Rolex Poerctum',
        description:'',
        imgSrc:watch4,
        basePrice:'3500',
        theme:'black'
    },{
        id:4,
        title:'Frero',
        description:'',
        imgSrc:watch5,
        basePrice:'3500',
        theme:'black'
    }],
    jerseyHeader:[
        {
            id:0,
            title:'Jersey',
            description:"Jersey's that aspire you to be the best on field",
            imgSrc:jerseyHeader,
            theme:'color'
        }
    ],
    jersey:[
        {
            id:0,
            title:'FC Barcelona',
            description:'FC Barcelona Home Kit',
            imgSrc:jersey1,
            basePrice:'3500',
            theme:'black'
        }
        ,
        {
            id:1,
            title:'Atletico Madrid',
            description:'Atletico Madrid Kit',
            imgSrc:jersey2,
            basePrice:'3000',
            theme:'black'
        }
        ,
        {
            id:2,
            title:'Real Madrid',
            description:'Real Madrid Kit',
            imgSrc:jersey3,
            basePrice:'3000',
            theme:'black'
        },
        {
            id:3,
            title:'Manchester City',
            description:'Manchester City Away Kit',
            imgSrc:jersey4,
            basePrice:'3000',
            theme:'black'
        }
    ]
}

export default data