
$(document).ready(function () 
{
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() 
        {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top;
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) 
          { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) 
            {
                switch(this.id){
                    case 'about':
                        aboutAnim.restart();
                        break;
                    case 'projects':
                        PetVideo.restart();
                        LixVideo.restart();
                        break;
                }                              
                $(this).fadeTo(500,1);                          
            }
          } 
          else 
          { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
          }
        });
      }).scroll();

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
        window.open( 
            './css/CV.pdf','geeks', 
            'toolbars=0','width=300','height=300','left=200', 
            'top=200','scrollbars=1','resizable=1'); 
            Toast.style.display = 'block';
    }, 2000);

    setTimeout(function () 
    {
        Toast.style.display = "none";
    },10000);
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
var ProjectList_root = document.getElementById("ProjectLst");

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
            var th_img = document.createElement("th");
                th_img.innerHTML = "Image";           
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
            tr.appendChild(th_img);           
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
                var td_img = document.createElement("img");
                
                    td_name.innerHTML = element["name"];
                var td_description = document.createElement("td");
                    td_description.innerHTML = element["description"];
                var td_tools = document.createElement("td");
                /*
                Adding Attributes
                */
                td_img.setAttribute("id","ipicData"+(i+1));
                td_img.setAttribute("class","ImgTable");
                td_img.src=element["img"][0];

                tr_body.appendChild(td_name);
                tr_body.appendChild(td_img);
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
        var temp_RootProjects = document.getElementById("root_projects");
        
        if(temp_RootProjects!=null){ProjectList_root.removeChild(temp_RootProjects);}

        var projects_length = json[id]["projects"].length;

        if(projects_length>0)
        {           
            var rootProjectDiv =document.createElement("div");
                rootProjectDiv.setAttribute("id","root_projects");
            ProjectList_root.appendChild(rootProjectDiv);

            for(var i=0; i<projects_length; i++)
            {               
                var ul = document.createElement("ul");
                    ul.setAttribute("id","lst");
                rootProjectDiv.appendChild(ul);
                
                var li = document.createElement("li");
                ul.appendChild(li);
                var input = document.createElement("input");
                    input.setAttribute("type","checkbox");
                    input.setAttribute("name","list");
                    input.setAttribute("id","nivel" + (i+1));
                li.appendChild(input);
                var label = document.createElement("label");
                    label.setAttribute("for","nivel" + (i+1));
                    label.innerHTML = json[id]["projects"][i]["name"];
                li.appendChild(label);
                var ul_interior = document.createElement("ul");
                    ul_interior.setAttribute("class","interior");
                li.appendChild(ul_interior);
                var li_interior = document.createElement("li");
                    ul_interior.appendChild(li_interior);
                var div = document.createElement("div");
                li_interior.appendChild(div);
                var img = document.createElement("img");
                    img.setAttribute("class","ImgTable");
                    img.src=json[id]["projects"][i]["img"][0];
                div.appendChild(img);
                var hr = document.createElement("hr");
                div.appendChild(hr);
                var p = document.createElement("p");
                    p.innerHTML = json[id]["projects"][i]["description"];
                div.appendChild(p);
                
                var url = json[id]["projects"][i]["url"];
                if(url!=="")
                {
                    var a = document.createElement("a");
                    a.setAttribute("class","btn btn-dark");
                    a.innerHTML = "See more";
                    a.href = url;
                    div.appendChild(a);
                }             
            }
        }
    });
}
var Toast = document.getElementById('Toast');

function hide()
{
    Toast.style.display = 'none';
}
var aboutTitle = anime({
    targets: '.title',
    opacity: [0,1],
    duration:2000,
    easing: 'easeOutSine',
    autoplay: true
});
var aboutAnim = anime({
    targets: '.aboutcontent li',
    margin:[-40,0],
    duration:2000,
    easing: 'easeOutSine',
    autoplay: true
});
var PetVideo = anime({
    targets: '.PetVideo',
    rotate:[450, 360],
    duration:3000,
    easing: 'easeOutElastic(1, .6)',
    autoplay: true
});
var LixVideo = anime({
    targets: '.LixVideo',
    rotate:[450, 360],
    duration:3000,
    easing: 'easeOutElastic(1, .6)',
    autoplay: true
});