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

function TapLang(event)
{
    FillText(event.target.attributes[0].value);
}
function FillText(id)
{
    $.getJSON("/json/infolang.json", function(json)
    {
        NameLang.innerHTML = id;
        NameText.innerHTML = json[id]["text"];
        NameExp.innerHTML = `${json[id]["exp"]}%`;
        NameYears.innerHTML = `${json[id]["years"] + 1}+`;
        
        json[id]["companny_list"].forEach(obj => 
        {
            Object.entries(obj).forEach(([key, value]) => 
            {
                console.log(`${value}`);
            });
        });
    });
}
