function clkctrl($scope, $compile) {
  $scope.num = 0;




 $scope.addNum = function() {
   if ($scope.num%2 ==  0) {
    contentShow();
    render($scope, $compile); 
    $scope.num += 1; 
  }
  else
  {
    contentHide();
    $scope.num += 1;
  }
};

}

function contentHide(){
  $('#content').show();
  $('#two').hide();
  $("#process").html('>');
  $("header.header").replaceWith("<header class='header'>ZenPen</header>");
}
function contentShow(){

  $('#content').hide();
$('#two').show();
$("header.header").replaceWith("<header class='header'>Templater</header>");
$("#process").html('<');
}

function render($scope, $compile){
  //empty the control and view areas 
  $('#controls').html("");
  $('#text').html("");
  
  var content = $('#content').html();
  //check for var-letters/numbers/stuff finish with a non-word character to catch the var name
  var varpattern=/var-(\w+)/gi,
  //var-([a-z0-9_\.-]+)\W/gi,
  varArray=content.match(varpattern),
  varNameArray = varArray.map(getName);
//replace varnames in content with ng-bind 'ings to the model representation of the varname
var newContent = content.replace(/var-(\w+)/gi, "{{$1}}");
jQuery("#text").append(
  "<p>" + newContent + "</p>"  
  );

//necessary hack, force angular to bootstrap the document after the models have been set
//re-compiling/initializing the dom makes the bindings to the model stick, 
//otherwise the bindings dont know about the scope the models are in, and dont work
//angular.bootstrap(document, []);
//need to replace, preventing button logic from working
//Yay! fixed, leave this here cos thats a useful hack
   //The next 3 lines are done to update angular scope with the newly created var- models
    //and bind them to the input controls.     
    var template = angular.element("#two");
    var fnLink = $compile(template);     // returns a Link function used to bind template to the scope
    fnLink($scope);                     // Bind Scope to the template
}

//func used for map, retrieve var names from html, strip 'var-' , append to
//dom with ng-model=varname, thus creating the scope for angular ctrls.
// Also creating inputs for the ctrls
function getName(nameWithVar) {
  var result = nameWithVar.replace(/var-(\w+)/gi, "$1");
  jQuery("#controls").append(
    result+': <input type="text" ng-model="'+result+'"/> <br />'
    );
  return result;
}
