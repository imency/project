$(function(){
    $("footer").load("footer.html")
})












var arr = getCookie('id').split('')
var newArr = [];
for(var i = 0; i < arr.length; i++){
	if(newArr.indexOf(arr[i])==-1){
		newArr.push(arr[i])
	}
}

function add (){
	$('.data').html('')
	for(let e = 0 ; e < newArr.length; e++){
   		$.get('json/myStudy.json',function(str){
   			var a = 'kh' + newArr[e];
   			var arr = eval(str);
   			$(`
   				<li class="content" x_id="${arr[a].id}">
						<a>
							<div class="imgBox">
								<img src="${arr[a].img}"/>	
							</div>
							<div class="texBox">
								<div class="title">${arr[a].title}</div>
								<div class="jindu">
									<div class="jindu1">
										${arr[a].jindu}
									</div>
									<div class="jindu2">
										<div class="jindu3" style="width: ${arr[a].jindu3};"></div>
									</div>
									
								</div>
							</div>
						</a>
					</li>	
   			`).appendTo('.data')
   		})
   	}
}
 
$(function(){
	add();
	$('.data').delegate('.content','click',function(){
		if(confirm('确定删除')){
			console.log(window.location.href)
			for (var i=0;i<newArr.length;i++) {
			 	if(newArr[i] == $(this).attr('x_id')){
			 		newArr.splice(i,1)
			 	}
			}
			var news = newArr.join('')
			setCookie('id',news,1)
			add()
		}
		
	})
	

})



