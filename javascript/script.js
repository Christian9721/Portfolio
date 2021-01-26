$(document).ready(function () 
{
    FillText("C#");
    $(window).scroll(function () {
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
    VanillaTilt.init(document.querySelectorAll("#lang-event"), 
    {
        max: 25,
        speed: 400
    });
    VanillaTilt.init(document.querySelectorAll("#lang-event"));
    
    VanillaTilt.init(document.querySelectorAll(".CardHome"), 
    {
        max: 25,
        speed: 400
    });
    VanillaTilt.init(document.querySelectorAll(".CardHome"));    
})
// slide up script
$('.scroll-up-btn').click(function (){
    $('html').animate({scrollTop : 0});
})

function Download(evt)
{
    evt.preventDefault();

    var element = document.getElementById("cvbox");
    element.classList.add('boxanim');
    element.classList.remove('boxanimreverse');

    var progressbar = document.getElementById("progressid");
    progressbar.classList.add('downloadbar');

    //var percent = document.getElementById("percentage");
    //var p_height = percent.offsetHeight;
    
    //percent.innerText=`${p_height}%`;
    
    setTimeout(function () 
    {       
        progressbar.classList.remove('reversedownload'); 
    }, 500);

    setTimeout(function () 
    {                 
        element.classList.add('boxanimreverse');
        element.classList.remove('boxanim'); 

        progressbar.classList.add('reversedownload');
        progressbar.classList.remove('downloadbar');

    }, 2000);

    //Movile orientation    
}

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var absolute = event.absolute;
    var z   = event.alpha;
    var x   = event.beta;
    var y   = event.gamma;
    
    // Do stuff with the new orientation data
    //console.log(absolute);
}

/*
Making the init of fields
*/ 
var NameLang = document.getElementById("NameLang");
var NameText = document.getElementById("NameText");
var NameExp = document.getElementById("NameExp");
var NameYears = document.getElementById("NameYears");

var TapCont = 0;

function TapLang(event)
{
    TapCont++;
    if(TapCont <= 1)
    {
        document.getElementById("ShowArrow").style.display="none";
    }
    FillText(event.target.attributes[0].value);
}

var TableCompanny = document.querySelector("#NameCompany_List");
var TipLang = document.getElementById("TipLang");

function FillText(id)
{      
    $.getJSON("./json/infolang.json", function(json)
    {
        var tempThead = document.querySelector("#tempThead");
        var temTbody = document.querySelector("#tempTbody");
        if(tempThead != null){TableCompanny.removeChild(tempThead);}
        if(temTbody != null){TableCompanny.removeChild(temTbody);}


        NameLang.innerHTML = id;
        NameText.innerHTML = json[id]["text"];
        NameExp.innerHTML = `${json[id]["exp"]}%`;
        NameYears.innerHTML = `${json[id]["years"] + 1}+`;
        TipLang.innerHTML = json[id]["description"];
        
        var companny_length = json[id]["companny_list"].length;      
       
        if( companny_length > 0)
        {       
            /*COLUMNS*/    
            var thead = document.createElement("thead");
                thead.setAttribute("id","tempThead");
            var tr = document.createElement("tr");
            var th = document.createElement("th");
                th.innerHTML = "#";               
            var th_companny = document.createElement("th");
                th_companny.innerHTML = "Companny";
            var th_description = document.createElement("th");
                th_description.innerHTML = "Description";
            var th_tools = document.createElement("th");
                th_tools.innerHTML = "Tools";

                /*Seting attributes*/
                th.setAttribute("scope","col");
                th_companny.setAttribute("scope","col"); 
                th_description.setAttribute("scope","col");
                th_tools.setAttribute("scope","col"); 
                /*End attributes*/ 
          
            TableCompanny.appendChild(thead).appendChild(tr);

            tr.appendChild(th);
            tr.appendChild(th_companny);
            tr.appendChild(th_description);
            tr.appendChild(th_tools);

            /*ROWS*/ 
            var tbody = document.createElement("tbody");
                tbody.setAttribute("id","tempTbody");
            TableCompanny.appendChild(tbody);

            for(var i=0; i<companny_length; i++)
            {
                var element = json[id]["companny_list"][i];

                var tr_body = document.createElement("tr");
                tbody.appendChild(tr_body);

                var th_body = document.createElement("th");
                    tr_body.appendChild(th_body);                   
                    th_body.innerHTML = (i + 1);
                    th.setAttribute("scoped","row");
                var td_name = document.createElement("td");
                    td_name.innerHTML = element["name"];
                var td_description = document.createElement("td");
                    td_description.innerHTML = element["description"];
                var td_tools = document.createElement("td");

                tr_body.appendChild(td_name);
                tr_body.appendChild(td_description);
                tr_body.appendChild(td_tools);   
                
                var toolsplit = element["tools"].toString().split(',');

                for(var j=0; j<toolsplit.length; j++)
                {
                    var tempSpan = document.createElement("span");
                        tempSpan.innerHTML = toolsplit[j];
                        tempSpan.setAttribute("class","Tools");
                    td_tools.appendChild(tempSpan);
                } 
            }
        }
    });
}

