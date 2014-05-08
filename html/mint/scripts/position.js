/* Copyright by © 2012 andersdenkend */


function getPosition(element)
{

    var elem=element,tagname="",x=0,y=0;
    
    while ((typeof(elem)=="object")&&(typeof(elem.tagName)!="undefined"))
        {
            y+=elem.offsetTop;    
            tagname=elem.tagName.toUpperCase();

            if (tagname=="BODY")
              elem=0;

            if (typeof(elem)=="object")
                if (typeof(elem.offsetParent)=="object")
                    elem=elem.offsetParent;
        }

    /* Objekt mit y zurueckgeben */
    position=new Object();
    position.y=y;
    return position;
}

function alertPosition(elementId)
{

    var a,element;

    /* Element-Objekt zur ID ermitteln */
    element=document.getElementById(elementId);
         
    /* Position bestimmen und mit RETURN zurückgeben */
    a=getPosition(element);
    return a.y;
}     

function test(eid,zaehler) 
{
	var id=eid;				//$("#divTestBox4").animate({ "left" : "500px" }, 500);
	$(id).animate({ "marginLeft": zaehler}, 150 );
}

function test_4(eid,zaehler) 
{
	var id=eid;				//$("#divTestBox4").animate({ "left" : "500px" }, 500);
	$(id).fadeIn(200);
}

function test_2(eid)
{
	var id=eid;
	$(id).stop(true, false);
	$(id).fadeOut(100);
}

function test_3(eid, zaehler)
{
	var id=eid;
	$(id).stop(true, false);
	$(id).animate({ "marginLeft": zaehler}, 50 );
}

$(window).scroll(function() {
if($(window).scrollTop() + $(window).height() == $(document).height()) {
site_end=1; 
} else site_end=0; 
});

$(document).ready(function()
    {
		var myPosY;
		var pos_1= alertPosition('jump1')+280;
		var pos_2= alertPosition('jump2')-70;
		var	pos_3= alertPosition('jump3')-100;
		var	pos_4= alertPosition('jump4')-300;
		var row=0;
		$("#zeiger").fadeOut(0);
		


        $(document).bind('scroll',function()
        {
            myPosY = $(window).scrollTop();
			
            if (myPosY > pos_1 && myPosY < pos_2)
                {   
					if (row<1) {
									zaehler="80px";
									test_4("#zeiger",zaehler);
									pos_3= alertPosition('jump3'); 
								}
						else 	{	
									zaehler="80px";
									test("#zeiger",zaehler);
									pos_3= alertPosition('jump3');  
								}
                }
			else if (myPosY <= pos_1)	
				{ 
					row=0; test_2("#zeiger");  
				}
							
            if (myPosY >= pos_2 && myPosY < pos_3)
                {    
					++row;
					zaehler="200px";
					test_3("#zeiger",zaehler);
					pos_3= alertPosition('jump3')-100;
					pos_4= alertPosition('jump4')-300;
                } 
			else if (myPosY >= pos_3 && myPosY < pos_4 && site_end<1){ test_3("#zeiger", "740px"); } 
			else if (myPosY >= pos_4 ){ test_3("#zeiger", "845px"); } 
			
			if($(window).scrollTop() + $(window).height() == $(document).height()) {
			test_3("#zeiger", "845px");
			} 
	
        });    
    });

