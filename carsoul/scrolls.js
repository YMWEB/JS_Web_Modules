(function($){
  /* @offGroups @onGroups */
  var offGroups = [];
  var onGroups = [];

 var keyitem = $('a.active').attr('data-section-trigger');
 onGroups.push($('div[data-section-name="'+keyitem+'"]'));
 offGroups.push($('div[data-section-name!="'+keyitem+'"]'))
 /* fn:oneffect,offEffect */
 function OnEffect(){
   /* css class */
   this.addClass('on');
 }
 function OffEffect(){
   /* css class */
   this.removeClass('on');
 }
 /* put eles in offGroups onGroups */
 function setGroups(key,group){
   
 }

function main(){

}


})(jQuery);
