 const wines= [ 
    {
    // title : "Sentimental",
    id: '1',
    title: "Red Dry",
    price : 20,
    description: "Simonyans production",
    image: "/images/pic1.png"
},
{
    // title : "Sentimental",
    id: '2',
    title: "Orange Dry",
    price : 15,
    description: "Simonians production",
    image: "/images/pic1.png"
},
{
    // title : "Sentimental",
    id: '3',
    title: "Rose Dry",
    price : 25,
    description: "Simonyans production",
    image: "/images/pic1.png"
    },

//     {
//    title : "Sentimental Exclusive",
//    price: 26,
//    type: "Exclusive",
//    image: "/images/pic1.png"
//     }


//     ristina Dilanyan16:52
// {
//     title: "Living Room",
//     price: 1000,
//     imgUrl: "images/bedroom2.jpg",
//     categories: ["living room"]
// },
// {/* <img src={elem.imgUrl}alt = 'img'/> */}
    
]

function getProductData(id) {
    let productData = wines.find(product => product.id === id);

    if (productData == undefined) {
        console.log('Product data does not exist for ID:' + id);
        return undefined;
    }
    return productData;
}


export {wines, getProductData};



