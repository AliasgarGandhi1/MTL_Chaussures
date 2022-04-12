document.addEventListener('DOMContentLoaded', runScript);

function runScript(){
    let product_img=document.getElementsByClassName("product-img")[0];
    let product_name=document.getElementsByClassName("product-name")[0];
    let product_detail=document.getElementsByClassName("product-detail")[0];
    let product_price=document.getElementsByClassName("price")[0];
    
    const queryString = window.location.search;
    console.log(queryString);
    //product_detail.js:3 ?imgtype=demoType&imgname=demo&imgprice=123&imgpath=http://localhost:3000/MTL_Chaussures/Project/Images/Hiking/hiking7.jpg

    const urlParams = new URLSearchParams(queryString);

    const imgtype = urlParams.get('imgtype')
    console.log(imgtype);
    product_type.innerHTML=imgtype;

    const imgname = urlParams.get('imgname')
    console.log(imgname);
    product_name.innerHTML=imgname;

    const imgprice = urlParams.get('imgprice')
    console.log(imgprice);
    product_price.innerHTML= "$"+imgprice;
    
    const imgpath = urlParams.get('imgpath')
    console.log(imgpath);
    product_img.currentSrc=imgpath;
    product_img.src=imgpath;
}