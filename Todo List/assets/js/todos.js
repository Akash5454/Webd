$("ul").on("click","li" ,function() {
	$(this).toggleClass("completed");
});
$("ul").on("click","span" ,function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
}) 
$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-restore-alt'></i></span> " + newTodo +"</li>");	
	}
}); 
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle(500);
});	