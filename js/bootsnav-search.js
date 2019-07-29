(function ($) {
"use strict";
var bootsnav = {
    initialize: function(){this.event();},
    event : function(){
        $("nav.navbar.bootsnav .attr-nav").each(function(){  
            $("li.search > a", this).on("click", function(e){
                e.preventDefault();
                $(".top-search").slideToggle();
            });
        });
        $(".input-group-addon.close-search").on("click", function(){$(".top-search").slideUp();});
        // Toggle Bars
        $(".navbar-toggle").each(function(){
            $(this).off("click");
            $(this).on("click", function(){
                $(".fa", this).toggleClass("fa-bars");
                $(".fa", this).toggleClass("fa-times");
            });
        });
    }
};
// Initialize
$(document).ready(function(){bootsnav.initialize();});
}(jQuery));