//   Name: Aliasgar Gandhi.
//   Student ID: 2122332


document.addEventListener('DOMContentLoaded', runScript);

var btn_delete;
var rows;

function runScript(){
    btn_delete = document.querySelectorAll('button[id=delete-item]');
    rows = document.querySelectorAll('tr[class=delete-row]')

    for (var i = 0; i < btn_delete.length; i++) 
    {
        btn_delete[i].addEventListener("click", delete_product);
    }


    function delete_product(){
        if (event.target.name == "btn1")
        rows[0].style.display = "none";
    
        else if (event.target.name == "btn2")
            rows[1].style.display = "none";
    
        else if (event.target.name == "btn3")
            rows[2].style.display = "none";
    }
}

