var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

// -----------

var indexStr = 0;
var txt;
var appendStr;
var ch = 0;
var strLength;
var indexCircle = 0;

$(window).load(function() {

	getAnimation();

});

$(window).resize(function() {

    getAnimation();

});

$(document).scroll(function() {

	getAnimation();

});

$(document).ready(function() {

	$(".svg-text p").text("");

	getStr();

	$(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.fadeIn(400);

    });

     $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

            }

        }

    });

    $(".close-popup").click(function() {

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

    });


    $(document).mouseup(function (e){

        hide_element = $('.popup');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.closest(".popup_wrapp").fadeOut(300);
        }

    });

});

function getStr() {

	indexStr++;

	txt = $(".text_array").find("div").filter("[data-index = '"+indexStr+"']").text();
	appendStr = $(".svg-text p").filter("[data-index = '"+indexStr+"']");

	var typeInterval = setInterval(function() {

		appendStr.text(txt.substring(0, ch++));

		if( ch > txt.length ) {

			if( indexStr < $(".text_array").find("div").length ) {

				getStr();				

			} else {

				indexStr = 0;
				getCircles();

			}

			ch = 0;

			clearInterval(typeInterval);

		}

	}, ~~(Math.random()*(300-60+1)+60) );

}

function getCircles() {

	var circlesInterval =  setInterval(function() {

		$(".jelly_wrapp .circle_num:eq("+ indexCircle +")").addClass("active");

		indexCircle++;

		if(indexCircle > $(".jelly_wrapp .circle_num").length - 1 ) {

			clearInterval(circlesInterval);

			setTimeout(function() {

				$(".jelly_wrapp .circle_num").removeClass("active");
				$(".svg-text p").text("");
				indexCircle = 0;

				setTimeout(function() {

					getStr();

				}, 1000);

			}, 4000);

		}		

	}, 1200);

}


function getAnimation() {

  $(".animate").each(function() {

    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {

      $(this).addClass("active");

    }

  });  

}