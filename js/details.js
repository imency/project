function huoqu(name){
	var reg = new RegExp('(^|&)' + name + "=([^&]*)(&|$)");
	var a = window.location.search.substr(1).match(reg)
	if(a!=null){
		return a[2];
	}else{
		return '';
	}
}

function jianjie () {
	$('#switch').html('');
	var a = 'xq' + huoqu('id')
	$.get('../json/details.json',function(str){
		var arr = eval(str);
		$(`
			<li>
            <div class="wrap">
                <div class="jianjie-title">${arr[a].jj.title}</div>
                <div class="next">
                    <div class="star"></div>
                    <span>${arr[a].jj.fen}</span>
                </div>
                <div class="time">
                    <div class="time-top">
                    	${arr[a].jj.top}
                    </div>
                    <div class="time-bottom">${arr[a].jj.bottom}</div>

                </div>
            </div>
        <div class="line"></div>

            <div class="kecheng">课程介绍</div>
            <div class="jieshao">
                <p>
                	${arr[a].jj.js}
                </p>
            </div>
                <div class="big-tu" style="background-image:url(${arr[a].jj.bgc})"></div>
        </li>	
		`).appendTo('#switch')
	})
}

function mulu () {
	$('#switch').html('');
	var aa = huoqu('id')
	$.get('../json/details.json',function(str){
		var arr = eval(str);
		var a = 'xq'+ aa;
		$.each(arr[a].ml.title, function(index,nav) {
			var c = $(`<li></li>`)
			$(`
				 <div class="mulu-title">${nav}</div>	
			`).prependTo($(c));
			var asd = index;
			$.each(arr[a].ml.content[index], function(index,nav){
				$(`
					<div class="mulua">${nav}</div>	
				`).appendTo($(c))
			})
			$(c).appendTo('#switch')
		});
	})
}

$(function(){
	var a = huoqu('id')
	$.get('../json/details.json',function(str){
		var arr = eval(str);
		var aa = 'xq'+ a;
		$('.tu>img').attr('src',arr[aa].jj.xing)
	})
	jianjie()
	
	$('.JIANJIE').click(function(){
		jianjie()
		$(this).children().addClass('color')
		$('.MULU').children().removeClass("color")
		$('.PINGJIA').children().removeClass("color")
	})
	$('.MULU').click(function(){
		mulu()
		$(this).children().addClass('color')
		$('.JIANJIE').children().removeClass("color")
		$('.PINGJIA').children().removeClass("color")
	})
	$('.PINGJIA').click(function(){
		var a = $(`
			<li>
            <div class="pin">
                <div class="pin-top">
                    <div class="pin-left">全部评价</div>
                    <div class="total">共6条评价</div>
                </div>
                <div class="pin-star">
                    <div class="star-left">4.8</div>
                    <span>星</span>
                    <div class="xing"><img src="./images/56f85aa8-b8bf-44f3-bbfb-68a6895d34c0.png" alt=""></div>
                    <div class="lis"><img src="./images/pingjia.png" alt=""></div>
                </div>
            </div>
            <!-- 这个块有五六个 -->
            <div class="pinjia-content">
                <div class="pinjia-tu"><img src="./images/tx1.jpg" alt=""></div>
                <div class="pinjia-txt">
                    <div class="one-line">
                        <div class="pina">无题ykt2213868</div>
                        <div class="five"><img src="./images/4b13c7d5-142b-47a8-928c-c8069b4ef178.png" alt="">
                        </div>
                        <div class="two-line">
                            <div class="two-line-left">学习四个课时评价</div>
                            <div class="date">5月14日</div>
                        </div>
                        <div class="good">非常接地气</div>

                    </div>
                </div>
                </div>
        </li>	
		`)
		$('#switch').html(a);
		$(this).children().addClass('color')
		$('.MULU').children().removeClass("color")
		$('.JIANJIE').children().removeClass("color")
	})
})

$(function(){
	$('.gocar').click(function(){
		window.open('study.html','_self')
	})
	$('.join-study').click(function(){
		window.open('myStudy.html','_self')
		var a = huoqu('id')
		a += getCookie('id')
		setCookie('id',a,1)
	})
	
})