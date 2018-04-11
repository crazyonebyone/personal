;
(function(win, $, doc) {
	var showFont1 = $(".showFont1")[0];
	var showFont2 = $(".showFont2")[0];
	var allContent = $('.allContent');
	var opaci = 1;
	$(function() {
//		跳转控制
		$(".toFirst").click(function(){
			$("html,body").animate({scrollTop:0})
		})
		$(".toMyMmusic").click(function(){
			$("html,body").animate({scrollTop:$("#myMusic").offset().top-$(win).height()/4})
		})
		$(".toDream").click(function(){
			$("html,body").animate({scrollTop:$(".myPlan").offset().top-$(win).height()/4})
		})
		$(".toProject").click(function(){
			$("html,body").animate({scrollTop:$(".myProject").offset().top-$(win).height()/4})
		})
		$(".toLife").click(function(){
			$("html,body").animate({scrollTop:$(".photoWall").offset().top-$(win).height()/4})
		})
		$(".toContact").click(function(){
			$("html,body").animate({scrollTop:$(".footerText").offset().top-$(win).height()/4})
		})

//		页面滚动效果
		var sreenHight = $(window).height();
		var dreamListOffset =$(".planList").offset().top;
		var dreamList = $(".planList li");
		var photoWall = $(".photoWall").offset().top-$(win).height();
		$("#Content").css("height", sreenHight + "px");
		$(".page2").css("height", sreenHight + "px");
		$(".page3").css("height", sreenHight + "px");
		var sf1 = showFont1.offsetLeft;
		var sf2 = showFont2.offsetLeft;
		window.addEventListener("scroll", function() {
			var docScoT = $(document).scrollTop();
			console.log(docScoT)
			if(docScoT > 0 && docScoT < 1100) {
				//字体左右滚动
				if(docScoT > 0 && docScoT < 100) {
					$(".Scoll-down").css("opacity", .7);
					showFont1.style.left = (sf1 + 200) + "px";
					showFont2.style.left = (sf2 - 200) + "px";
				} else if(docScoT > 100 && docScoT < 200) {
					$(".Scoll-down").css("opacity", .5);
					showFont1.style.left = (sf1 + 300) + "px";
					showFont2.style.left = (sf2 - 300) + "px";
				} else if(docScoT > 200 && docScoT < 300) {
					$(".Scoll-down").css("opacity", .3);
					showFont1.style.left = (sf1 + 400) + "px";
					showFont2.style.left = (sf2 - 400) + "px";
				} else if(docScoT > 300 && docScoT < 400) {
					$(".Scoll-down").css("opacity", .1);
					showFont1.style.left = (sf1 + 500) + "px";
					showFont2.style.left = (sf2 - 500) + "px";
				} else if(docScoT > 400 && docScoT < 500) {
					$(".Scoll-down").css("opacity", 0);
					showFont1.style.left = (sf1 + 600) + "px";
					showFont2.style.left = (sf2 - 600) + "px";
				} else if(docScoT > 500 && docScoT < 600) {
					$(".Scoll-down").css("opacity", 0);
					showFont1.style.left = (sf1 + 700) + "px";
					showFont2.style.left = (sf2 - 700) + "px";
				} else if(docScoT > 600 && docScoT < 700) {
					$(".Scoll-down").css("opacity", 0);
					showFont1.style.left = (sf1 + 800) + "px";
					showFont2.style.left = (sf2 - 800) + "px";
				} else if(docScoT > 700 && docScoT < 800) {
					$(".Scoll-down").css("opacity", 0);
					showFont1.style.left = (sf1 + 900) + "px";
					showFont2.style.left = (sf2 - 900) + "px";
				} else if(docScoT > 800 && docScoT < 900) {
					$(".Scoll-down").css("opacity", 0);
					showFont1.style.left = (sf1 + 1000) + "px";
					showFont2.style.left = (sf2 - 1000) + "px";
				}

			} else if(docScoT <= 0) {
				//到0时复位
				opaci = 1;
				$(".Scoll-down").css("opacity", opaci);
				showFont1.style.left = "-200px";
				showFont2.style.left = "800px";
			} else {
				opaci = 0;
				$(".Scoll-down").css("opacity", "0");
			}

			if(docScoT >= 250) {

				$(".Header").css("padding-top", "40px");
				$(".nav-hr").css("top", "75px");
				$(".container .nav-right").css("width", "40%");
				$(".footer-label").css("top", "30px");
				$(".footer-links").css("opacity", "0");

				$(".Connect-left").hover(function() {
					//		console.log($(this).children(".footer-label"));	
					$(this).children(".footer-label").css({
						"left": "-20px",
						"top": "0px"
					});
					$(this).children(".footer-links").css("opacity", "1");
				}, function() {
					$(this).children(".footer-label").css({
						"left": "0px",
						"top": "30px"
					});
					$(this).children(".footer-links").css("opacity", "0");
				})

				$(".Connect-right").hover(function() {
					//		console.log($(this).children(".footer-label"));
					$(this).children(".footer-label").css({
						"left": "20px",
						"top": "0px"
					});
					$(this).children(".footer-links").css("opacity", "1");
				}, function() {
					$(this).children(".footer-label").css({
						"left": "0px",
						"top": "30px"
					});
					$(this).children(".footer-links").css("opacity", "0");
				})

			} else if(docScoT < 250) {
				$(".Header").css("padding-top", "70px");
				$(".nav-hr").css("top", "105px");
				$(".container .nav-right").css("width", "30%");
				$(".footer-label").css("top", "0px");
				$(".footer-links").css("opacity", "1");
				//	$(".Connect-left").unbind("hover");
				$(".Connect-left").unbind('mouseenter').unbind('mouseleave');
				$(".Connect-right").unbind('mouseenter').unbind('mouseleave');
			}

			//到500上下阴影改变颜色
			if(docScoT > 450&&docScoT<1400) {
				$(".ShadowUpG").css("opacity", "1");
				$(".ShadowdownG").css("opacity", "1");
				$(".page2").css("background", "linear-gradient(rgba(53,112,62,0),rgba(53,112,62,.5))")

			} else if(docScoT < 450 ||docScoT>1400) {
				$(".ShadowUpG").css("opacity", "0");
				$(".ShadowdownG").css("opacity", "0");

			}
			//到2000时模糊效果
			if(docScoT > 2000) {
				$(".planBgShow img").eq(0).css({"left":"-1.4%"})
				$(".planBgShow img").eq(1).css({"left":"0%"})
				$(".planBgShow img").eq(2).css({"left":"0%"})
			}else{
				$(".planBgShow img").eq(0).css({"left":"0"})
				$(".planBgShow img").eq(1).css({"left":"0"})
				$(".planBgShow img").eq(2).css({"left":"0"})
			}
			if(docScoT > 2100){
				$(".planBgShow img").eq(0).css({"left":"-2.8%"})
				$(".planBgShow img").eq(1).css({"left":"-1.4%"})
				$(".planBgShow img").eq(2).css({"left":"0%"})
			}
			if(docScoT>dreamListOffset){
				dreamList.each(function(){
					var offsetTop =$(this).offset().top-$(win).height()+200;
					var those=$(this);
					if(docScoT>offsetTop){
						$(this).find(".dreamImg img").each(function(i,e){
							var that= $(this);
							setTimeout(function(){
								that.show();
							},that.index()*70)
							setTimeout(function(){
								dreamList.find(".dreamText").css("opacity","1");
							},those.find(".dreamImg img").length*70)
						})
					}else{
						$(this).find(".dreamImg img").each(function(i,e){
							var that= $(this);
							setTimeout(function(){
								that.hide();
							},that.index()*70)
							those.find(".dreamText").css("opacity","0");
						})
					}
				})
			}
			
			//黄色背景放大
			if(docScoT>$(".worked").offset().top-$(win).height()+200){
				$(".worksBg").addClass("worksBgAc");
				$(".ShadowdownG").css({"background":"linear-gradient(rgba(0,0,0,0),rgb(152, 109, 83))","opacity":1});
				$(".ShadowUpG").css({"background":"linear-gradient(rgb(206, 148, 113),rgba(0,0,0,0))","opacity":1});
				$(".Shadowdown").css("background","transparent");
				$(".ShadowUp").css("background","transparent");
				
//				$(".myProject").css("background","#ce9471");
//				$(".worked").css("background"," linear-gradient(to bottom, rgba(206,148,113,0) 0%,rgba(206,148,113,0.58) 26%,rgba(206,148,113,1) 45%)");
			}else{
				$(".worksBg").removeClass("worksBgAc");
				$(".ShadowdownG").css({"background":"linear-gradient(rgba(63,99,69,0),rgba(63,99,69,0.7))"});
				$(".ShadowUpG").css({"background":"linear-gradient(rgba(63,99,69,.7),rgba(63,99,69,0))"});
				$(".Shadowdown").css("background","linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.9))");
				$(".ShadowUp").css("background","linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,0))");
//				$(".myProject,.worked").css("background","none");
			}
			
			if(docScoT>$(".photoWall").offset().top){
				$(".worksBg").css("opacity","0");
				$(".ShadowdownG").css({"background":"linear-gradient(rgba(63,99,69,0),rgba(63,99,69,0.7))","opacity":0});
				$(".ShadowUpG").css({"background":"linear-gradient(rgba(63,99,69,.7),rgba(63,99,69,0))","opacity":0});
				$(".Shadowdown").css("background","linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.9))");
				$(".ShadowUp").css("background","linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,0))");
			}else{
				$(".worksBg").css("opacity","1");
			}
//			else{
//				dreamList.each(function(){
//					var offsetTop =$(this).offset().top-$(win).height()+200;
//					var those=$(this);
//					if(docScoT<offsetTop){
//						$(this).find(".dreamImg img").each(function(i,e){
//							var that= $(this);
//							setTimeout(function(){
//								that.hide();
//							},that.index()*70)
//							setTimeout(function(){
//								dreamList.find(".dreamText").css("opacity","0");
//							},those.find(".dreamImg img").length*70)
//						})
//					}
//				})
//			}

			function sd() {
				var e = event || window.event;
				var sf1 = showFont1.offsetLeft;
				var sf2 = showFont2.offsetLeft;

				if(e.wheelDelta > 0) {
					opaci += 0.1;
					$(".Scoll-down").css("opacity", opaci);
					sf1 -= 100;
					sf2 += 100;
					showFont1.style.left = sf1 + "px";
					showFont2.style.left = sf2 + "px"
				} else if(e.wheelDelta < 0) {
					//				console.log("下");
					opaci -= 0.4;
					$(".Scoll-down").css("opacity", opaci);
					sf1 += 100;
					sf2 -= 100;
					showFont1.style.left = sf1 + "px";
					showFont2.style.left = sf2 + "px"
				}

			}

		});
		
		//菜单控制
		var isOpen = false;
	    $(".MenuBth").click(function() {
	        if (isOpen) {
	            menuClose();
	            isOpen = false;
	        } else {
	            menuOpen();
	            isOpen = true;
	        }
	    });

//		作品滚动
		$(".projectShow").mouseenter(function(e){
			var that = this;
			$(win).on("mousewheel",function(t){
				var ev= event||window.event||t
				var maxScrollL=$(".projectList li").length*($(".projectList li").eq(0).width()+parseFloat($(".projectList li").eq(0).css("margin-right")))-$(win).width()
				console.log($(".projectList li").eq(0).width()+parseFloat($(".projectList li").eq(0).css("margin-right")))
				preventDefault(ev);
				if(ev.wheelDelta>0){
					if($(".projectShow").scrollLeft()>0)
						$(".projectShow").scrollLeft($(".projectShow")[0].scrollLeft-50);
					else	
						$(win).unbind("mousewheel");
				}else{
					if($(".projectShow").scrollLeft()<maxScrollL)
						$(".projectShow").scrollLeft($(".projectShow")[0].scrollLeft+50);
					else
						$(win).unbind("mousewheel");
				}
			})
			
		})
		$(".projectShow").mouseleave(function(e){
			$(win).unbind("mousewheel");
		})
		
		
		
	});
	
//	//播放按钮
//	$("#CaiPlayer").on("load",function(){
//		console.log(22222)
//	})
//	win.onload=function(){
//		console.log(2)
//		$("#musicAudioPlayAndPause").click(function(){
//			console.log(2)
//			playOrPaused(this);
//		})
//	}
	//阻止默认事件
	function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault){
    	e.preventDefault();e.stopPropagation()
    }
        
    e.returnValue = false;
}

	//定义音频
	var audio;
	(function() {
		//初始化页面
		$.ajax({
			type: "get",
			url: "audio/AudioList.json",
			async: true,
			success: function(datas) {
				var firstSong = JSON.stringify(datas[0])
				var newData = {
					firstData: JSON.parse(firstSong),
					data: datas,
					playId: 1,
					choosePlay: function(songModel) {
						newData.firstData.imgSrc = songModel.imgSrc;
						newData.firstData.writer = songModel.writer;
						newData.firstData.songName = songModel.songName;
						newData.firstData.audiosrcSrc = songModel.audiosrcSrc;
						newData.playId = songModel.id;
						setTimeout(function() {
							newData.playOrPaused();
						}, 20)
					},
					playOrPaused:function(obj) {
						if(audio.paused) {
							audio.play();
							progressTimer = window.setInterval(audioProgress, 100);
							document.getElementById("musicAudioPlayAndPause").setAttribute("src", "images/Paush.png");
							return;
						}
						audio.pause();
						document.getElementById("musicAudioPlayAndPause").setAttribute("src", "images/Play.png")
					}
					
				};
				new Vue({
					el: "#player",
					data: newData
				});
				audio = document.getElementById("CaiPlayer");
			}
		});
	})();
	
	//菜单开关
	function menuOpen(){
		$(".MenuBth span").eq(0).css("transform","translateY("+$(".MenuBth").height()/3.75+"px) rotate(45deg) ");
		$(".MenuBth span").eq(2).css("transform", "translateY("+-$(".MenuBth").height()/3.75+"px) rotate(-45deg)");
		$(".MenuBth span").eq(1).css("opacity","0");
		$(".mobile-menu").addClass("menuAc");
		$(".xsMenu").fadeIn(500);
	}
	function menuClose(){
		$(".MenuBth span").eq(0).css("transform","translateY(0) rotate(0) ");
		$(".MenuBth span").eq(2).css("transform", "translateY(0) rotate(0)");
		$(".MenuBth span").eq(1).css("opacity","1");
		$(".mobile-menu").removeClass("menuAc");
		$(".xsMenu").fadeOut(500);
	}
	
	//阻止浏览器默认事件
	(function(){
		this.obj = $(".prevent");
		this.obj.each(function(){
			$(this)[0].addEventListener("touchmove", function (event) {
				var ev = event||window.event;
				ev.preventDefault();
			})
		})
		
	})();
	
	//更新进度条当前值
	function updateProgressVal() {
		var progressVal = audio.currentTime / audio.duration * 100;
		$(".progress_con>span")[0].style.width = progressVal + "%";
	}
	//更新当前时间
	function getCurrentTime() {
		var currentTime = audio.currentTime;
		var totalTime = parseInt(currentTime / 60);
		var seconds = parseInt(currentTime % 60);
		if(totalTime == 0) {
			if(seconds > 9) {
				totalTime = "00:" + seconds;
			} else {
				totalTime = "00:0" + seconds;
			}
		} else {
			var totalTimePre, totalTimeNext;
			if(totalTime > 9) {
				totalTimePre = totalTime;
			} else {
				totalTimePre = "0" + totalTime;
			}
			if(seconds > 9) {
				totalTimeNext = seconds;
			} else {
				totalTimeNext = "0" + seconds;
			}
			totalTime = totalTimePre + ":" + totalTimeNext;
		}
		$(".playTime").html(totalTime);
	}
	//暂停或播放
	var progressTimer;
//
//	function playOrPaused(obj) {
//		if(audio.paused) {
//			audio.play();
//			progressTimer = window.setInterval(audioProgress, 100);
//			document.getElementById("musicAudioPlayAndPause").setAttribute("src", "images/Paush.png");
//			return;
//		}
//		audio.pause();
//		document.getElementById("musicAudioPlayAndPause").setAttribute("src", "images/Play.png")
//	}

	function audioProgress() {
		if(audio.currentTime < audio.duration) {
			if(audio.played) {
				//更新当前时间
				getCurrentTime();
				//更新进度条
				updateProgressVal();
			}
		} else {
			clearInterval(progressTimer);
		}
	}
	

}(window, jQuery, document))