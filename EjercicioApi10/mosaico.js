(function($){ //encapsulamiento del plugin
	$.fn.jqMosaic = function(options){
		// $.extend(options_default, options_parametro)
	  var options_default = { width_mosaic:100,display_info_animation:'fade'} // animations: [fade, down] with css
		 $contenedor = this;
		 $elements = $(this).children();
		 $ne = $(this).children().length;        
	  $options = $.extend(options_default, options ); 
		 $.fn.jqMosaic.construct();
	};
	$.fn.jqMosaic.construct = function(){
	  $wAreaDraw = $contenedor.innerWidth(); //width del contenedor
	  $contenedor.addClass("jqMosaic");
	  var wMosaico = $options.width_mosaic + 5;
	  $contTransitions = 1;
	  $elements.each(function(index){
		$(this).css({width:wMosaico+"px", height:wMosaico+"px"});
		//elementos a insertar
		$img = $('<img />');
		$info = $('<div>');      
		$h4 = $('<h4>');
		$.fn.jqMosaic.addAnimationsDisplayInfo();
		//obtiene datos del tag a titulo y uri image
		$img.attr("src",$(this).attr("data-image"));
		$h4.html($(this).attr("data-title"));
		//elimina atributos de los tag a
		$(this).removeAttr("data-image");
		$(this).removeAttr("data-title");
		// crea e inserta elementos para armar html de mosaico
		$img.css({"width":wMosaico+"px"});
		$img.css({"height":wMosaico+"px"});
		$(this).append($info.append($h4));
		$(this).append($img).animate({opacity:1},200*$contTransitions);      
		$contTransitions++;
	  }); 
	};
	$.fn.jqMosaic.addAnimationsDisplayInfo= function(){
	  switch($options.display_info_animation){
		case 'fade':
		  $info.addClass("fademosaic");
		  break;
		case 'down':
		  $info.addClass("downmosaic");
		  break;
		  
	  }
	}
  }(jQuery));
  $(document).ready(function(){
   $(".mosaico").jqMosaic({width_mosaic:130, display_info_animation:'down'}); 
  });