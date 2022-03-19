function openMenShoes(shoeType)
{
    var i=0;
    var x=document.getElementsByClassName('menshoes');
    for (let index = 0; index < x.length; index++) {
        x[index].style.display="none";        
    }
    document.getElementById(shoeType).style.display="block";
}

function openWomenShoes(shoeType)
{
    var i=0;
    var x=document.getElementsByClassName('womenshoes');
    for (let index = 0; index < x.length; index++) {
        x[index].style.display="none";        
    }
    document.getElementById(shoeType).style.display="block";
}
function openKidsShoes(shoeType)
{
    var i=0;
    var x=document.getElementsByClassName('kidsshoes');
    for (let index = 0; index < x.length; index++) {
        x[index].style.display="none";        
    }
    document.getElementById(shoeType).style.display="block";
}