// Name: Chintan Anandkumar Patel
// Student_ID: 2024318

window.onload=function(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const type = urlParams.get('type')
    console.log(type);
    if(type.match("Men"))
    {
        document.getElementById("Men").style="display:block";
        document.getElementById("Women").style="display:none";
        document.getElementById("Kids").style="display:none";
    }
    else if(type.match("Women"))
    {
        document.getElementById("Men").style="display:none";
        document.getElementById("Women").style="display:block";
        document.getElementById("Kids").style="display:none";
    }
    else if(type.match("Kids"))
    {
        document.getElementById("Men").style="display:none";
        document.getElementById("Women").style="display:none";
        document.getElementById("Kids").style="display:block";
    }
}

//show/hide Mens shoe types
function openMenShoes(shoeType) {
    var i = 0;
    var x = document.getElementsByClassName('menshoes');
    for (let index = 0; index < x.length; index++) {
        x[index].style.display = "none";
    }
    document.getElementById(shoeType).style.display = "block";
}

//show/hide Mens shoe types
function openWomenShoes(shoeType) {
    var i = 0;
    var x = document.getElementsByClassName('womenshoes');
    for (let index = 0; index < x.length; index++) {
        x[index].style.display = "none";
    }
    document.getElementById(shoeType).style.display = "block";
}

//show/hide Mens shoe types
function openKidsShoes(shoeType) {
    var i = 0;
    var x = document.getElementsByClassName('kidsshoes');
    for (let index = 0; index < x.length; index++) {
        x[index].style.display = "none";
    }
    document.getElementById(shoeType).style.display = "block";
}


// redirect to product detail
document.addEventListener('click', ({ target }) => {
debugger;

    if (target.className !== 'product-img') return;
   
   
        let strSRC=String(target.src);
        strSRC=strSRC.split("/");
        let finalSRC="./"+strSRC[4]+"/"+strSRC[5]+"/"+strSRC[6];
        console.log(finalSRC);
        win=window.open("product_detail.html?"+"imgtype="+strSRC[5]+"&imgname="+"demo"+"&imgprice="+"123"+"&imgpath="+finalSRC, "_self");
 
    
});
