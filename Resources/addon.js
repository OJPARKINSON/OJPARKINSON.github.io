jQuery(function($){ 
    $(document).ready(function(){
        if( typeof jQuery("#typed-3277604075c1e350ee183f").typed == "function"){
            $("#typed-3277604075c1e350ee183f").typed({
                strings: ["Age: 17","Born in: York","Lives in: Barlby","Passion: Software Development","Education: Selby College","Favourite sport: Football"],
                typeSpeed: 100,
                backSpeed: 10,
                startDelay: 1000,
                backDelay: 50,
                loop: true,
                loopCount: false,
                showCursor: true,
                cursorChar: "|",
                attr: null
            });
        }
    });
});


!function(a){"use strict";
var b=function(b,c){this.el=a(b),this.options=a.extend({},a.fn.typed.defaults,c),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};
b.prototype={constructor:b,init:function(){var a=this;a.timeout=setTimeout(function(){for(var b=0;b<a.strings.length;++b)a.sequence[b]=b;a.shuffle&&(a.sequence=a.shuffleArray(a.sequence)),a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},
a.startDelay)}
,build:function(){var b=this;if(!0===this.showCursor&&(this.cursor=a('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children());
    var c=this.stringsElement.children();
    a.each(c,function(c,d){b.strings.push(a(d).html())}
    )}
this.init()},
typewrite:function(a,b){if(!0!==this.stop){
    var c=Math.round(70*Math.random())+this.typeSpeed,d=this;d.timeout=setTimeout(function(){var c=0,e=a.substr(b);if("^"===e.charAt(0)){var f=1;/^\^\d+/.test(e)&&(e=/\d+/.exec(e)[0],f+=e.length,c=parseInt(e)),a=a.substring(0,b)+a.substring(b+f)}
    if("html"===d.contentType){var g=a.substr(b).charAt(0);if("<"===g){var h="",i="";for(i="<"===g?">":";";a.substr(b+1).charAt(0)!==i&&(h+=a.substr(b).charAt(0),!(++b+1>a.length)););b++,h+=i}}d.timeout=setTimeout(function(){if(b===a.length){if(d.options.onStringTyped(d.arrayPos),d.arrayPos===d.strings.length-1&&(d.options.callback(),d.curLoop++,!1===d.loop||d.curLoop===d.loopCount))return;d.timeout=setTimeout(function(){d.backspace(a,b)},d.backDelay)}else{0===b&&d.options.preStringTyped(d.arrayPos);var c=a.substr(0,b+1);d.attr?d.el.attr(d.attr,c):d.isInput?d.el.val(c):"html"===d.contentType?d.el.html(c):d.el.text(c),b++,d.typewrite(a,b)}},c)},c)}},backspace:function(a,b){if(!0!==this.stop){var c=Math.round(70*Math.random())+this.backSpeed,d=this;d.timeout=setTimeout(function(){if("html"===d.contentType&&">"===a.substr(b).charAt(0)){for(var c="";"<"!==a.substr(b-1).charAt(0)&&(c-=a.substr(b).charAt(0),!(--b<0)););b--,c+="<"}var e=a.substr(0,b);d.attr?d.el.attr(d.attr,e):d.isInput?d.el.val(e):"html"===d.contentType?d.el.html(e):d.el.text(e),b>d.stopNum?(b--,d.backspace(a,b)):b<=d.stopNum&&(d.arrayPos++,d.arrayPos===d.strings.length?(d.arrayPos=0,d.shuffle&&(d.sequence=d.shuffleArray(d.sequence)),d.init()):d.typewrite(d.strings[d.sequence[d.arrayPos]],b))},c)}},shuffleArray:function(a){var b,c,d=a.length;if(d)for(;--d;)c=Math.floor(Math.random()*(d+1)),b=a[c],a[c]=a[d],a[d]=b;return a},reset:function(){var a=this;clearInterval(a.timeout);this.el.attr("id");this.el.empty(),void 0!==this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},a.fn.typed=function(c){return this.each(function(){var d=a(this),e=d.data("typed"),f="object"==typeof c&&c;e&&e.reset(),d.data("typed",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);