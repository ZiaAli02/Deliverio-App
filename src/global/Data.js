import { exp } from "react-native-reanimated";

export const filterData=[
    {name:"Fast food", image: require("../assests/fast_food.jpg"),id:"0"},
    {name:"Sea food", image: require("../assests/sea_food.jpg"),id:"1"},
    {name:"Burger", image: require("../assests/burger.jpg"),id:"2"},
    {name:"Salads", image: require("../assests/salads.png"),id:"3"},
    {name:"Chinese", image: require("../assests/chinese.jpg"),id:"4"},
    {name:"Biryani", image: require("../assests/biryani.jpg"),id:"5"},
    {name:"Pizza", image: require("../assests/pizza.png"),id:"6"},];

export const filterData2=[
        {name:"Fast food", image: require("../assests/fast_food.jpg"),id:"0"},
        {name:"Biryani", image: require("../assests/biryani.jpg"),id:"1"},
        {name:"Pizza", image: require("../assests/pizza.png"),id:"2"},];
    

export const restaurantData=[
    {restaurantName:"McDonald's", farAway:"21.2",buisnessAdress:"Royal Palm Garden G.T. Road",images:require("../assests/restrt.jpg"),averageReview:4.2,numberOfReview:6724,coordinates:{lat:-26.1888612 , lng:28.246325 }, discount:10 , deliveryTime:30 ,
    collectTime:5 , foodType:"Burgers,Wraps,Fries....", productData:[{name:"Fries", price:250, image:require("../assests/fries.png")},{name:"wraps", price:300, image:require("../assests/wrapes.jpg")},{name:"Burger", price:450, image:require("../assests/burger.jpg")}], id:0,},

    {restaurantName:"KFC", farAway:"12.7",buisnessAdress:"Bypasss Chowk, Multan Road",images:require("../assests/restrt1.jpg"),averageReview:4.1,numberOfReview:2067,coordinates:{lat:-26.1891621 , lng:28.2441808 }, discount:20 , deliveryTime:25 ,
    collectTime:10 , foodType:"chicken piece,chicken nuggets,chicken wings....", productData:[{name:"chicken nuggets", price:200, image:require("../assests/nuggets.jpg")},{name:"chicken wings", price:250, image:require("../assests/wings.jpg")},{name:"chicken piece", price:350, image:require("../assests/piece.jpg")}], id:1,},


    {restaurantName:"Pizza Hut", farAway:"5",buisnessAdress:"Chak No. 91,9-L, Multan Road",images:require("../assests/restrt2.jpg"),averageReview:3.7,numberOfReview:1341,coordinates:{lat:-26.1886781 , lng:28.244879 }, discount:12 , deliveryTime:20 ,
    collectTime:15 , foodType:"pizza,shwarma,burger....", productData:[{name:"pizza", price:1050, image:require("../assests/pizza.png")},{name:"shwarma", price:350, image:require("../assests/shwarma.jpg")},{name:"Burger", price:400, image:require("../assests/burger.jpg")}], id:2,},


    {restaurantName:"Sonehri", farAway:"7",buisnessAdress:"Multan Rd, Near Toyota shourum",images:require("../assests/restrt3.jpg"),averageReview:4.1,numberOfReview:2390,coordinates:{lat:-26.1845336 , lng:28.2481691 }, discount:null , deliveryTime:40 ,
    collectTime:8 , foodType:"sea food,biryani,mutton karahi....", productData:[{name:"sea food", price:1500, image:require("../assests/sea_food.jpg")},{name:"biryani", price:250, image:require("../assests/biryani.jpg")},{name:"mutton karahi", price:2200, image:require("../assests/karahi.jpg")}], id:3,}

];

export const ProductData1=[{name:"Fries", price:250, image:require("../assests/fries.png"),id:0},
{name:"wraps", price:300, image:require("../assests/wrapes.jpg"),id:1},
{name:"Burger", price:450, image:require("../assests/burger.jpg"),id:2},
{name:"chicken nuggets", price:200, image:require("../assests/nuggets.jpg"),id:3},
{name:"chicken wings", price:250, image:require("../assests/wings.jpg"),id:4}
];

export const ProductData2=[{qty:1, discountPrice:150,name:"Fries", price:250, image:require("../assests/fries.png"),details:"Best Fries, with healthy oil",id:0},
{name:"wraps",qty:2, price:300,discountPrice:250, image:require("../assests/wrapes.jpg"),details:"Best Wrapes, oil free",id:1},
{name:"Burger",qty:3, price:450,discountPrice:400, image:require("../assests/burger.jpg"),details:"Best Burger, best for health",id:2},
{name:"chicken nuggets",qty:4,discountPrice:150, price:200, image:require("../assests/nuggets.jpg"),details:"Best Chicken Nuggets",id:3},
{name:"chicken wings",qty:5,discountPrice:200, price:250, image:require("../assests/wings.jpg"),details:"Best chicken wings",id:4}
];


export const menuData=[

    {title:"BEEF", special:false, key:0},
    {title:"CHICKEN", special:false, key:1},
    {title:"VEGGIE", special:false, key:2},
    {title:"FRIES", special:false, key:3},
    {title:"SALADS", special:false, key:4},
    {title:"DRINKS", special:false, key:5},
];


export const specialData=[
    {title:"LIMITED OFFERS", key:0},
    {title:"GO CHILLI", key:1},
    {title:"GO CHEESEY", key:2}
];


export const menu=[

    {title:"BEEF", key:1},
    {title:"CHICKEN", key:2},
    {title:"VEGGIE", key:3},
    {title:"FRIES", key:4},
    {title:"SALADS", key:5},
    {title:"DRINKS", key:6}
];