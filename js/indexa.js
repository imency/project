$(function () {
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			//      bulletClass : 'swiper-pagination-bullet bgc',
			bulletActiveClass: 'swiper-pagination-bullet-active nowBgc',
		},
		loop: true,
		autoplay: {
			disableOnInteraction: false,
		}
	});







	$.get('json/indexa.json', function (str) {
		var arr = eval(str)
		$(`
    		<div class="custom_top f_cd">
				<div class="name">${arr.wy1.title}</div>
			</div>	
    	`).prependTo('.inner1')
		$.each(arr.wy1.content, function (index, nav) {
			$(`
    			<div class="f_cd">
								<div class="fl card fff" idd="${nav.left.id}">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.left.img}"/>
										</div>
										<div class="title">${nav.left.tex}</div>
										<div class="course">
											<span>
												${nav.left.xian}
											</span>
											<span class="oriagn">
												${nav.left.yuan}
											</span>
										</div>
									</a>
								</div>
								<div class="fr card fff" idd="${nav.right.id}">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.right.img}"/>
										</div>
										<div class="title">${nav.right.tex}</div>
										<div class="course">
											<span>
												${nav.right.xian}
											</span>
											<span class="oriagn">
												${nav.right.yuan}
											</span>
										</div>
									</a>
								</div>
							</div>
    		`).appendTo('.inner1')
		})
	})

	$.get('json/indexa.json', function (str) {
		var arr = eval(str)
		$(`
    		<div class="custom_top f_cd">
				<div class="name">${arr.wy2.title}</div>
			</div>	
    	`).prependTo('.inner2')

		$.each(arr.wy2.content, function (indexs, navs) {
			$(`
    			<div class="f_cd">
	    			<div class="card imgBox2 f_cd">
						<a href="javacript:;">
							<div class="imgBox imgBox1">
								<img src="${navs.img}" alt="" />
							</div>
						</a>
					</div>
				</div>	
    		`).appendTo('.inner2')

		})
	})

	$.get('json/indexa.json', function (str) {
		var arr = eval(str)
		$(`
    		<div class="custom_top f_cd">
				<div class="name">${arr.wy3.title}</div>
			</div>	
    	`).prependTo('.inner3')

		$(`
    		<div class="f_cd">
				<div class="card imgBox2 f_cd">
					<a href="javacript:;">
						<div class="imgBox imgBox1">
							<img src="${arr.wy3.top}" alt="" />
						</div>
						<div class="title">${arr.wy3.topTitle}</div>
					</a>
				</div>
			</div>		
    	`).appendTo('.inner3')


		$.each(arr.wy3.content, function (index, nav) {
			$(`
    			<div class="f_cd">
								<div class="fl card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.left.img}"/>
										</div>
										<div class="title">${nav.left.tex}</div>
										<div class="course">
											<span>
												${nav.left.xian}
											</span>
											<span class="oriagn">
												${nav.left.yuan}
											</span>
										</div>
									</a>
								</div>
								<div class="fr card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.right.img}"/>
										</div>
										<div class="title">${nav.right.tex}</div>
										<div class="course">
											<span>
												${nav.right.xian}
											</span>
											<span class="oriagn">
												${nav.right.yuan}
											</span>
										</div>
									</a>
								</div>
							</div>
    		`).appendTo('.inner3')
		})
	})

	$.get('json/indexa.json', function (str) {
		var arr = eval(str)
		$(`
    		<div class="custom_top f_cd">
				<div class="name">${arr.wy4.title}</div>
			</div>	
    	`).prependTo('.inner4')

		$(`
    		<div class="f_cd">
    			<div class="card imgBox2 f_cd imgBox2">
					<a href="javacript:;">
						<div class="imgBox imgBox1">
							<img src="${arr.wy4.top}" alt="" />
						</div>
						<div class="title">${arr.wy4.topTitle}</div>
						<div class="course">
							<span>
								${arr.wy4.xian}
							</span>
							<span class="oriagn">
								${arr.wy4.yuan}
							</span>
						</div>
					</a>
				</div>			
			</div>		
    	`).appendTo('.inner4')


		$.each(arr.wy4.content, function (index, nav) {
			$(`
    			<div class="f_cd">
								<div class="fl card">
									<a href="javascript:;">
											<div class="imgBox">
											<img src="${nav.left.img}"/>
										</div>
										<div class="title">${nav.left.tex}</div>
										<div class="course">
											<span>
												${nav.left.xian}
											</span>
											<span class="oriagn">
												${nav.left.yuan}
											</span>
										</div>
									</a>
								</div>
								<div class="fr card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.right.img}"/>
										</div>
										<div class="title">${nav.right.tex}</div>
										<div class="course">
											<span>
												${nav.right.xian}
											</span>
											<span class="oriagn">
												${nav.right.yuan}
											</span>
										</div>
									</a>
								</div>
							</div>
    		`).appendTo('.inner4')
		})


	})

	$.get('json/indexa.json', function (str) {
		var arr = eval(str)
		$(`
    		<div class="custom_top f_cd">
				<div class="name">${arr.wy5.title}</div>
			</div>	
    	`).prependTo('.inner5')

		$(`
    		<div class="f_cd">
				<div class="card imgBox2 f_cd">
					<a href="javacript:;">
						<div class="imgBox imgBox1">
							<img src="${arr.wy5.top}" alt="" />
						</div>
						<div class="title">${arr.wy5.topTitle}</div>
					</a>
				</div>
			</div>		
    	`).appendTo('.inner5')

		$.each(arr.wy5.content, function (index, nav) {
			$(`
    			<div class="f_cd">
								<div class="fl card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.left.img}"/>
										</div>
										<div class="title">${nav.left.tex}</div>
										<div class="course">
											<span>
												${nav.left.xian}
											</span>
											<span class="oriagn">
												${nav.left.yuan}
											</span>
										</div>
									</a>
								</div>
								<div class="fr card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.right.img}"/>
										</div>
										<div class="title">${nav.right.tex}</div>
										<div class="course">
											<span>
												${nav.right.xian}
											</span>
											<span class="oriagn">
												${nav.right.yuan}
											</span>
										</div>
									</a>
								</div>
							</div>
    		`).appendTo('.inner5')
		})
	})

	$.get('json/indexa.json', function (str) {
		var arr = eval(str)
		$(`
    		<div class="custom_top f_cd">
				<div class="name">${arr.wy6.title}</div>
			</div>	
    	`).prependTo('.inner6')
		$.each(arr.wy6.content, function (index, nav) {
			$(`
    			<div class="f_cd">
								<div class="fl card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.left.img}"/>
										</div>
										<div class="title">${nav.left.tex}</div>
										<div class="course">
											<span>
												${nav.left.xian}
											</span>
											<span class="oriagn">
												${nav.left.yuan}
											</span>
										</div>
									</a>
								</div>
								<div class="fr card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.right.img}"/>
										</div>
										<div class="title">${nav.right.tex}</div>
										<div class="course">
											<span>
												${nav.right.xian}
											</span>
											<span class="oriagn">
												${nav.right.yuan}
											</span>
										</div>
									</a>
								</div>
							</div>
    		`).appendTo('.inner6')
		})
	})

	$.get('json/indexa.json', function (str) {
		var arr = eval(str)
		$(`
    		<div class="custom_top f_cd">
				<div class="name">${arr.wy7.title}</div>
			</div>	
    	`).prependTo('.inner7')
		$.each(arr.wy7.content, function (index, nav) {
			$(`
    			<div class="f_cd">
								<div class="fl card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.left.img}"/>
										</div>
										<div class="title">${nav.left.tex}</div>
										<div class="course">
											<span>
												${nav.left.xian}
											</span>
											<span class="oriagn">
												${nav.left.yuan}
											</span>
										</div>
									</a>
								</div>
								<div class="fr card">
									<a href="javascript:;">
										<div class="imgBox">
											<img src="${nav.right.img}"/>
										</div>
										<div class="title">${nav.right.tex}</div>
										<div class="course">
											<span>
												${nav.right.xian}
											</span>
											<span class="oriagn">
												${nav.right.yuan}
											</span>
										</div>
									</a>
								</div>
							</div>
    		`).appendTo('.inner7')
		})
	})
})



$(function () {
	$('.header_app').click(function () {
		window.open('download.html', '_self')
	})

	// $('.firstCateIconSet>li').click(function () {
	// 	var a = $(this).index()
	// 	window.open('details.html?id=' + a + '', '_self')
	// })

	$('.inner1').delegate('.fff', 'click', function () {
		var a = $(this).attr('idd')
		window.open('details.html?id=' + a, '_self')
	})


	$('footer').load("footer.html")



	// 跳转详情页  用事件委托
	// $(".f_cd").delegate(".fl").click(function(){
		
	// 		window.open("details.html","_self")
	// })

})


