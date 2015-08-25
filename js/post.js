var main={}
var pop_join={}
pop_join.open=0
var pop_mypage={}
var pop_modify={}
var pop_workDaily={}
var pop_scheduler={}
var pop_main_map_view={}
$(function(){
	var modify_arrayChair = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","b1","b2","b3","b4","c1","c2","c3","c4","c5","d1","d2","d3","d4","d5","e1","e2","ceo"]
	var modify_onChair = [];
	$("#join_myposition").change(function(){
		var v = $("#join_myposition").val()
		var init = pop_main_map_view.arr
		for(var i = 0 ; i<init.length;i++){
			if(init[i]=="a1" || init[i]=="b1" || init[i]=="d1" || init[i]=="e1" || init[i]=="e2" || init[i]=="ceo"){
				$("#position_mark_"+init[i]).attr("src","img/position_mark_down_off.png")
			}else if(init[i]=="a2" || init[i]=="a3" || init[i]=="a4" || init[i]=="a5" || init[i]=="b2" || init[i]=="b3" || init[i]=="b4" || init[i]=="d2" || init[i]=="d3" || init[i]=="c1" || init[i]=="c2" || init[i]=="c5"){
				$("#position_mark_"+init[i]).attr("src","img/position_mark_right_off.png")
			}else if(init[i]=="a6" || init[i]=="a7" || init[i]=="a8" || init[i]=="a9" || init[i]=="c3" || init[i]=="c4" || init[i]=="d4" || init[i]=="d5"){
				$("#position_mark_"+init[i]).attr("src","img/position_mark_left_off.png")
			}
		}
		if(v=="a1" || v=="b1" || v=="d1" || v=="e1" || v=="e2" || v=="ceo"){
			$("#position_mark_"+v).attr("src","img/position_mark_down_on.png")
		}else if(v=="a2" || v=="a3" || v=="a4" || v=="a5" || v=="b2" || v=="b3" || v=="b4" || v=="d2" || v=="d3" || v=="c1" || v=="c2" || v=="c5"){
			$("#position_mark_"+v).attr("src","img/position_mark_right_on.png")
		}else if(v=="a6" || v=="a7" || v=="a8" || v=="a9" || v=="c3" || v=="c4" || v=="d4" || v=="d5"){
			$("#position_mark_"+v).attr("src","img/position_mark_left_on.png")
		}
	})
	$("#main_map_view").on("pagebeforeshow", function(){
		var v = String(localStorage.main_map_view);
		$("#main_map_view_content").empty();
		html="";
		switch(v){
			case "1":
				$(".map_view_title").text("기획1팀");
				html+='<div class="view_content_append">'+
						'<div class="map_view_text map_view_position_a1 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a1" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a1"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a1"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_a2 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a2" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a2"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a2"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_a3 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a3" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a3"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a3"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_a4 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a4" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a4"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a4"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_a5 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a5" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a5"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a5"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_a6 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a6" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a6"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a6"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_a7 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a7" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a7"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a7"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_a8 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a8" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a8"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a8"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_a9 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_a9" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_a9"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_a9"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<img src="img/map_view_position.gif" id="map_view_img" class="map_view_position_a1 map_view_img_style" style="opacity:0;">'+
						'<img id="main_map_bg" src="img/plan1_bg.gif" width="100%">'+
					'</div>'
				$("#main_map_view_content").append(html)
				break;
			case "2":
				$(".map_view_title").text("기획2팀")
				html+='<div class="view_content_append">'+
						'<div class="map_view_text map_view_position_b1 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_b1" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_b1"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_b1"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_b2 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_b2" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_b2"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_b2"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_b3 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_b3" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_b3"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_b3"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_b4 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_b4" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_b4"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_b4"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<img src="img/map_view_position.gif" id="map_view_img" class="map_view_position_b1 map_view_img_style" style="opacity:0;">'+
						'<img id="main_map_bg" src="img/plan2_bg.gif" width="100%">'+
					'</div>'
				$("#main_map_view_content").append(html)
				break;
			case "5":
				$(".map_view_title").text("제작팀")
				html+='<div class="view_content_append">'+
						'<div class="map_view_text map_view_position_c1 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_c1" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_c1"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_c1"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_c2 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_c2" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_c2"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_c2"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_c3 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_c3" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_c3"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_c3"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_c4 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_c4" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_c4"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_c4"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_c5 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_c5" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_c5"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_c5"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<img src="img/map_view_position.gif" id="map_view_img" class="map_view_position_c1 map_view_img_style" style="opacity:0;">'+
						'<img id="main_map_bg" src="img/prod_bg.gif" width="100%">'+
					'</div>'			
				$("#main_map_view_content").append(html)
				break;
			case "3":
			$(".map_view_title").text("영상팀")
					html+='<div class="view_content_append">'+
						'<div class="map_view_text map_view_position_d1 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_d1" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_d1"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_d1"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_d2 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_d2" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_d2"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_d2"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_d3 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_d3" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_d3"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_d3"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_d4 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_d4" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_d4"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_d4"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_d5 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_d5" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_d5"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_d5"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<img src="img/map_view_position.gif" id="map_view_img" class="map_view_position_d1 map_view_img_style" style="opacity:0;">'+
						'<img id="main_map_bg" src="img/movie_bg.gif" width="100%">'+
					'</div>'
				$("#main_map_view_content").append(html)
				break;
			case "4":
				$(".map_view_title").text("경영팀")
					html+='<div class="view_content_append">'+
						'<div class="map_view_text map_view_position_e1 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_e1" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_e1"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_e1"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="map_view_text map_view_position_e2 map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_e2" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_e2"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_e2"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<img src="img/map_view_position.gif" id="map_view_img" class="map_view_position_e1 map_view_img_style" style="opacity:0;">'+
						'<img id="main_map_bg" src="img/mana_bg.gif" width="100%">'+
					'</div>'
				$("#main_map_view_content").append(html)
				break;
			case "6":
				$(".map_view_title").text("대표실")
				html+='<div class="view_content_append">'+
						'<div class="map_view_text map_view_position_ceo map_view_style">'+
							'<div class="map_view_img">'+
								'<img id="chair_img_ceo" src="" width="100%" height="100%">'+
							'</div>'+
							'<div class="map_view_text_out">'+
								'<div class="red_color map_view_text_in1">'+
									'<div class="map_view_text_in1_1" id="chair_name_ceo"></div>'+
								'</div>'+
								'<div class="red_color map_view_text_in2">'+
									'<div class="map_view_text_in2_1" id="chair_depa_ceo"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<img src="img/map_view_position.gif" id="map_view_img" class="map_view_position_ceo map_view_img_style" style="opacity:0;">'+
						'<img id="main_map_bg" src="img/ceo_bg.gif" width="100%">'+
					'</div>'
			$("#main_map_view_content").append(html)
			break;
		}
		var value = {};
		value.pos=v;
		var url = "http://int.udali.com/udaliM/main_map_view.php";
		$.post(url,value,function(data){
			if(data){
				var str = data.replace(".[{","[{")
				var value = JSON.parse(str);
				var html = "";
				for(var i=0; i<value.length;i++){
					$("#chair_img_"+value[i].chair).attr("src","http://int.udali.com/files/pic/"+value[i].pic)
					$("#chair_depa_"+value[i].chair).html(workStat(value[i].workStat))
					$("#chair_name_"+value[i].chair).html(value[i].name)
				}
			}else{
				alert("해당부서 인적사항이 준비중입니다.");
			}
		})
	})
	$("#pop_join").on("pageshow", function(){
		pop_main_map_view.arr=[]
		$(".common_pos_down").css({"height":$("#position_mark_a1").height()*0.77,"line-height":($("#position_mark_a1").height()*0.77)+"px"})
		$(".common_pos_left").css({"height":$("#position_mark_a1").height()*0.77,"padding-left":$("#position_mark_a2").width()*0.23,"width":$("#position_mark_a2").width()*0.77,"line-height":($("#position_mark_a1").height()*0.77)+"px"})
		$(".common_pos_right").css({"height":$("#position_mark_a1").height()*0.77,"width":$("#position_mark_a2").width()*0.77,"line-height":($("#position_mark_a1").height()*0.77)+"px"})
	})
	$("#pop_modify").on("pageshow", function(){
		$("#modify_job_grade, #modify_department, #modify_work_state, #modify_myposition, #modify_job_state").width($("#pop_modify_name").width())
		for(var i=0;i<modify_onChair.length;i++){
			for(var y=0;y<modify_arrayChair.length;y++){
				if(modify_onChair[i]==modify_arrayChair[y]){
					modify_arrayChair.splice(y,1)
				}
			}
		}
		pop_modify.arr=modify_arrayChair
	})
	$("#modify_myposition").change(function(){
		var v = $("#modify_myposition").val()
		var init = pop_modify.arr
			init.push(pop_modify.myChair)
		for(var i = 0 ; i<init.length;i++){
			if(init[i]=="a1" || init[i]=="b1" || init[i]=="d1" || init[i]=="e1" || init[i]=="e2" || init[i]=="ceo"){
				$("#modify_position_mark_"+init[i]).attr("src","img/position_mark_down_off.png")
			}else if(init[i]=="a2" || init[i]=="a3" || init[i]=="a4" || init[i]=="a5" || init[i]=="b2" || init[i]=="b3" || init[i]=="b4" || init[i]=="d2" || init[i]=="d3" || init[i]=="c1" || init[i]=="c2" || init[i]=="c5"){
				$("#modify_position_mark_"+init[i]).attr("src","img/position_mark_right_off.png")
			}else if(init[i]=="a6" || init[i]=="a7" || init[i]=="a8" || init[i]=="a9" || init[i]=="c3" || init[i]=="c4" || init[i]=="d4" || init[i]=="d5"){
				$("#modify_position_mark_"+init[i]).attr("src","img/position_mark_left_off.png")
			}
		}
		if(v=="a1" || v=="b1" || v=="d1" || v=="e1" || v=="e2" || v=="ceo"){
			$("#modify_position_mark_"+v).attr("src","img/position_mark_down_on.png")
		}else if(v=="a2" || v=="a3" || v=="a4" || v=="a5" || v=="b2" || v=="b3" || v=="b4" || v=="d2" || v=="d3" || v=="c1" || v=="c2" || v=="c5"){
			$("#modify_position_mark_"+v).attr("src","img/position_mark_right_on.png")
		}else if(v=="a6" || v=="a7" || v=="a8" || v=="a9" || v=="c3" || v=="c4" || v=="d4" || v=="d5"){
			$("#modify_position_mark_"+v).attr("src","img/position_mark_left_on.png")
		}
	})
	$("#pop_modify").on("pageshow", function(){
		$(".common_pos_down").css({"height":$("#modify_position_mark_a1").height()*0.77,"line-height":($("#modify_position_mark_a1").height()*0.77)+"px"})
		$(".common_pos_left").css({"height":$("#modify_position_mark_a1").height()*0.77,"padding-left":$("#modify_position_mark_a2").width()*0.23,"width":$("#modify_position_mark_a2").width()*0.77,"line-height":($("#modify_position_mark_a1").height()*0.77)+"px"})
		$(".common_pos_right").css({"height":$("#modify_position_mark_a1").height()*0.77,"width":$("#modify_position_mark_a2").width()*0.77,"line-height":($("#modify_position_mark_a1").height()*0.77)+"px"})
	})
	$("#pop_mypage").on("pageshow", function(){
		$("#pop_mypage_toking").width($("#pop_mypage_job_workState").width())		
	})
	$("#pop_register").on("pageshow", function(){
		$(".register_select_style").width($(".register_input_style").width())
	})
	$("#pop_scheduler_modify").on("pageshow", function(){
		$("#pop_modify_Start, #pop_modify_End").width($("#pop_modify_title").width())
	})
	$("#main_map_view").on("pageshow", function(){
		$(".map_view_text").height($("#map_view_img").height());
	})
	$("#pop_notice").on("pagebeforeshow", function(){
		$("#notice_content").empty();
		$("#pop_notice_footer").attr("pageNumber",10)
		var url = "http://int.udali.com/udaliM/notice.php";
		$.post(url, '', function(data){
			var v = JSON.parse(data)
			for(var i=0;i<v.length;i++){
				var html=""
				var rdate = v[i].rdate;	rdate = rdate.split(" "); rdate = rdate[0].replace("-","/").replace("-","/"); rdate = rdate.substr(2,8);
				html='<div class="notice_list">'+
						'<div class="notice_list_in" onclick="notice_cont(this)" style="width:100%;color:#4f5f6f;text-shadow:0 0 0 white;font-size:13px;text-align:center;">'+
							'<div style="width:100%;height:55px;box-sizing:border-box;border-bottom:1px solid #90a4b4;">'+
								'<div style="width:40%;height:54px;line-height:55px;float:left;white-space: nowrap;overflow:hidden;text-overflow: ellipsis;">'+v[i].subject+'</div>'+
								'<div style="width:15%;height:54px;line-height:55px;float:left;background-color:#edeff0;">'+v[i].name+'</div>'+
								'<div style="width:30%;height:54px;line-height:55px;float:left;">'+rdate+'</div>'+
								'<div style="width:15%;height:54px;line-height:55px;float:left;background-color:#edeff0;">'+v[i].hit+'</div>'+
							'</div>'+
							'<p class="notice_p">'+v[i].cont+'</p>'+
						'</div>'+
					'</div>';
				/*
				html='<div class="pop_notice_list_div">'+
						'<ul class="pop_notice_list_ul" onclick="notice_cont(this)">'+
							'<li class="pop_notice_list_subject pop_notice_font">'+v[i].subject+'</li>'+
							'<li class="pop_notice_list_name pop_notice_font"></li>'+
							'<li class="pop_notice_list_date pop_notice_font">'+rdate+'</li>'+
							'<li class="pop_notice_list_hit pop_notice_font">'+v[i].hit+'</li>'+
						'</ul>'+
						'<p class="notice_p">'+v[i].cont+'</p>'+
					 '</div>'
					 */
				$("#notice_content").append(html);
			}
		})
	})
	$("#pop_scheduler_modify").on("pagebeforeshow", function() {
		var value = {"scheduler_idx":pop_scheduler.Num}
		value.scheduler_idx = pop_scheduler.Num;
		var url = "http://int.udali.com/udaliM/scheduler_modify.php";
		$.post(url, value, function(data){
			var v = JSON.parse(data);
			
			$("#pop_scheduler_modify_title").attr("idxV",v[0].scheduler_idx);
			var sDate = v[0].sDate;
			sDate = sDate.split("/");
			var sDate1 = sDate[1].substr(0,1)==0?sDate[1].substr(1,1):sDate[1];
			var sDate2 = sDate[2].substr(0,1)==0?sDate[2].substr(1,1):sDate[2];
			$("#pop_scheduler_modify_title").val(v[0].title);
			$("#pop_scheduler_modify_dateY > option[value='"+sDate[0]+"']").attr("selected", true);
			$("#pop_scheduler_modify_dateY").prev("span").text(sDate[0]+"년")
			$("#pop_scheduler_modify_dateM > option[value='"+sDate1+"']").attr("selected", true);
			$("#pop_scheduler_modify_dateM").prev("span").text(sDate1+"월")
			$("#pop_scheduler_modify_dateD > option[value='"+sDate2+"']").attr("selected", true);
			$("#pop_scheduler_modify_dateD").prev("span").text(sDate2+"일")

			var sTime = v[0].sTime
			sTime = sTime.replace(" ","_")
			sTime = sTime.substr(0,1)==0?sTime.substr(1,4):sTime
			$("#pop_scheduler_modify_Start > option[value='"+sTime+"']").attr("selected", true);
			var eTime = v[0].eTime
			eTime = eTime.replace(" ","_")
			eTime = eTime.substr(0,1)==0?eTime.substr(1,4):eTime
			$("#pop_scheduler_modify_End > option[value='"+eTime+"']").attr("selected", true);
		})	
	})

	$("#pop_workDaily").on("pageshow", function() {
		$("#workDaily_content").empty();
		$("#pop_workDaily_content").css({"height":$(window).height()-$("#pop_workDaily_footer").height()-52,"margin-bottom":$("#pop_workDaily_footer").height()})
		var url = "http://int.udali.com/udaliM/workDaily.php";
		pop_workDaily.outputN = 0	
		$.post(url, pop_workDaily.outputN, function(data){
			var v = JSON.parse(data)
			for(var i=0;i<v.length;i++){
				var date = v[i].tdate  
				date = date.split("-")
				var subject = v[i].subject
				var num = subject.lastIndexOf("일일업무보고");
				subject = subject.substr(0,num+6)
				html='<div style="width:100%;height:50px;color:#4f5f6f;text-shadow:0 0 0 white;font-size:14px;text-align:center;border-bottom:1px solid #90a4b4">'+
						'<div style="width:40%;height:50px;line-height:55px;float:left;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">'+subject+'</div>'+
						'<div style="width:15%;height:50px;line-height:55px;float:left;background-color:#edeff0;">'+v[i].name+'</div>'+
						'<div style="width:30%;height:50px;line-height:55px;float:left;">'+date[0].substr(2,2)+'/'+date[1]+'/'+date[2].substr(0,2)+'</div>'+
						'<div style="width:15%;height:50px;line-height:55px;float:left;background-color:#de6559;color:white;text-shadow:0 0 0 white;"><img id="workDaily_img'+v[i].idx+'" fileName="'+subject+'" refileName="'+v[i].refilename+'" width="40px" height="40px" src="img/file.gif" onclick="fileDown(this)" style="margin-top: 5px;"></div>'+
					'</div>'
			$("#workDaily_content").append(html)
				/*html='<div class="pop_workDaily_list_div">'+
						'<ul class="pop_workDaily_list_ul">'+
							'<li class="pop_workDaily_list_subject">'+subject+'</li>'+
							'<li class="pop_workDaily_list_name">'+v[i].name+'</li>'+
							'<li class="pop_workDaily_list_date">'+date[0].substr(2,2)+'/'+date[1]+'/'+date[2].substr(0,2)+'</li>'+
							'<li class="pop_workDaily_list_refilename">'+
								'<div class="pop_workDaily_list_img_wrap">'+
									'<img id="workDaily_img'+v[i].idx+'" fileName="'+subject+'" refileName="'+v[i].refilename+'" width="28px" height="28px" src="img/file.gif" onclick="fileDown(this)">'+
								'</div>'+
							'</li>'+
						'</ul>'+
					 '</div>'
				$("#pop_workDaily_content").append(html) */
			}
		})	
	})
	$("#pop_scheduler").on("pagebeforeshow", function() {
		pop_scheduler.valueM=""
		$("#scheduler_content").empty();
		$("#pop_scheduler_content").css({"height":$(window).height()-$("#pop_scheduler_footer").height()-52,"margin-bottom":$("#pop_scheduler_footer").height()})
		var url = "http://int.udali.com/udaliM/scheduler.php";
		var value = {"id":main.id}
		$.post(url, value, function(data){
			var v = JSON.parse(data)
			for(var i=0;i<v.length;i++){
				var date = v[i].sDate;date=date.split("/")
				var date1 = date[1].substr(0,1)==0?date[1].substr(1,1):date[1];
				var date2 = date[2].substr(0,1)==0?date[2].substr(1,1):date[2];
				var sTime = v[i].sTime;sTime = sTime.split(" ")
				var sTime0 = sTime[0].substr(0,1)==0?sTime[0].substr(1,1):sTime[0];
				var sTime1 = sTime[1].substr(0,1)==0?sTime[1].substr(1,1):sTime[1];
				var eTime = v[i].eTime;eTime = eTime.split(" ")
				var eTime0 = eTime[0].substr(0,1)==0?eTime[0].substr(1,1):eTime[0];
				var eTime1 = eTime[1].substr(0,1)==0?eTime[1].substr(1,1):eTime[1];
				var html_m = "" 
				var html_r = "";
				if(main.id==v[i].id){
					html_m ='<div class="scheduler_list_3">'+
						'<div class="scheduler_list_3_1" onclick="schedulerM(\''+v[i].scheduler_idx+'\')">수정</div>'+
						'<div class="scheduler_list_3_2" onclick="schedulerR(\''+v[i].scheduler_idx+'\')">삭제</div>'+
					'</div>'
				}
				var html = "";
				html+='<div class="scheduler_list scheduler_list'+v[i].scheduler_idx+'">'+
						'<div class="scheduler_list_1">'+v[i].title+'</div>'+
						'<div class="scheduler_list_2">'+
								'<div class="scheduler_list_2_img">'+
									'<img src="http://int.udali.com/files/pic/'+v[i].pic+'" width="120px" height="120px">'+
								'</div>'+
								'<div class="scheduler_list_2_1">'+
									'<div class="scheduler_list_2_1_style">'+
										'<span>등록자&nbsp;&nbsp;&nbsp;</span><span>│ '+part(v[i].part_idx)+' '+v[i].name+'</span>'+
									'</div>'+
									'<div class="scheduler_list_2_1_style">'+
										'<span>회의시작</span><span>│ <span class="scheduler_list_color">20'+date[0]+'</span>년 <span class="scheduler_list_color">'+date1+'</span>월 <span class="scheduler_list_color">'+date2+'</span>일 <span class="scheduler_list_color">'+sTime0+'</span>시 <span class="scheduler_list_color">'+sTime1+'</span>분</span>'+
									'</div>'+
									'<div class="scheduler_list_2_1_style1">'+
										'<span>회의종료</span><span>│ <span class="scheduler_list_color"">20'+date[0]+'</span>년 <span class="scheduler_list_color">'+date1+'</span>월 <span class="scheduler_list_color">'+date2+'</span>일 <span class="scheduler_list_color">'+eTime0+'</span>시 <span class="scheduler_list_color">'+eTime1+'</span>분</span>'+
									'</div>'+
								'</div>'+
							'</div>'+
							html_m+
						'</div>'
				/*var date = v[i].sDate;date=date.split("/")
				var date1 = date[1].substr(0,1)==0?date[1].substr(1,1):date[1];
				var date2 = date[2].substr(0,1)==0?date[2].substr(1,1):date[2];
				var sTime = v[i].sTime;sTime = sTime.split(" ")
				var sTime0 = sTime[0].substr(0,1)==0?sTime[0].substr(1,1):sTime[0];
				var sTime1 = sTime[1].substr(0,1)==0?sTime[1].substr(1,1):sTime[1];
				var eTime = v[i].eTime;eTime = eTime.split(" ")
				var eTime0 = eTime[0].substr(0,1)==0?eTime[0].substr(1,1):eTime[0];
				var eTime1 = eTime[1].substr(0,1)==0?eTime[1].substr(1,1):eTime[1];
				var html_m = "" 
				var html_r = "";
				if(main.id==v[i].id){
					html_m = '<li style="width:80px;height:25px;color:white;text-shadow:0 0 0 white;text-align:center;background-color:darkblue;border-radius:5px;margin-top:2.5px;line-height:normal;" onclick="schedulerM(\''+v[i].scheduler_idx+'\')">수정</li>';
					html_r = '<li style="width:80px;height:25px;color:white;text-shadow:0 0 0 white;text-align:center;background-color:darkred;border-radius:5px;margin-top:5px;line-height:normal;" onclick="schedulerR(\''+v[i].scheduler_idx+'\')">삭제</li>';
				}
				html = '<div id="scheduler_list'+v[i].scheduler_idx+'" style="border-bottom:2px solid #023e99;width:100%;height:160px;">'+
					'<ul style="float:left;width:80px;height:160px;background-color:#e0e0e0;">'+
						'<li style="height:100px;width:80px;overflow:hidden;"><img style="height:100px;width:80px;" src="http://int.udali.com/files/pic/'+v[i].pic+'"></li>'+
						html_m+
						html_r+
					'</ul>'+
					'<ul style="background-color:#e0e0e0;float:left;width:calc(100% - 80px);height:160px;padding-left:5%;box-sizing:border-box;list-style-type: none;">'+
						'<li style="height:25%;font-size:12px;color:black;text-shadow:0 0 0 black;line-height:40px;">등록자 : '+part(v[i].part_idx)+' '+v[i].name+'</li>'+
						'<li style="height:25%;font-size:12px;color:black;text-shadow:0 0 0 black;line-height:40px;">회의명 : '+v[i].title+'</li>'+
						'<li style="height:25%;font-size:12px;color:black;text-shadow:0 0 0 black;line-height:40px;">회의시작 : 20'+date[0]+'년 '+date1+'월 '+date2+'일 '+sTime0+'시 '+sTime1+'분</li>'+
						'<li style="height:25%;font-size:12px;color:black;text-shadow:0 0 0 black;line-height:40px;">회의종료 : 20'+date[0]+'년 '+date1+'월 '+date2+'일 '+eTime0+'시 '+eTime1+'분</li>'+
					'</ul>'+
				'</div>'*/
				$("#scheduler_content").append(html)
			}
		})
	})

	$("#pop_join_call_v1").keyup(function(){
		if($("#pop_join_call_v1").val().length==4){
			$("#pop_join_call_v2").focus();
		}
	})
	$(".pop_join_call_num").change(function(){
		$("#pop_join_call_v1").focus();
	})
	$("#pop_join_call_v1").keyup(function(){
		if($("#pop_join_call_v1").val().length==4){
			$("#pop_join_call_v2").focus();
		}
	})

	$("#pop_modify_call_v1").keyup(function(){
		if($("#pop_modify_call_v1").val().length==4){
			$("#pop_modify_call_v2").focus();
		}
	})
	$(".pop_modify_call_num").change(function(){
		$("#pop_modify_call_v1").focus();
	})
	$("#pop_modify_call_v1").keyup(function(){
		if($("#pop_modify_call_v1").val().length==4){
			$("#pop_modify_call_v2").focus();
		}
	})

	$(".pop_join_email_select").change(function(){
		if($(".pop_join_email_select").val()=="in_self"){
			$("#pop_join_email_add").removeAttr("readonly")
			$("#pop_join_email_add").val('')
			$("#pop_join_email_add").focus();
		}else if($(".pop_join_email_select")=="none"){
			$(".pop_join_email_add").val('')
			$(".pop_join_email_add").attr("readonly", true);
			return;
		}else{
			$(".pop_join_email_add").attr("readonly", true);
			$("#pop_join_email_add").val($(".pop_join_email_select").val())
		}
	})

	$(".pop_modify_email_select").change(function(){
		if($(this).val()=="in_self"){
			$(".pop_modify_email_add").removeAttr("readonly")
			$(".pop_modify_email_add").val('')
			$(".pop_modify_email_add").focus();
		}else if($(this).val()=="none"){
			$(".pop_modify_email_add").val('')
			$(".pop_modify_email_add").attr("readonly", true);
			return;
		}else{
			$(".pop_modify_email_add").attr("readonly", true);
			$(".pop_modify_email_add").val($(this).val())
		}
	})

	$("#main").on("pagebeforeshow", function() {
		$("#main_content").html('')
		setTimeout(function(){
			mainLoading()
		},200)
	})
	var arrayChair = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","b1","b2","b3","b4","c1","c2","c3","c4","c5","d1","d2","d3","d4","d5","e1","e2","ceo"]
	var onChair = [];
	$("#pop_join").on("pageshow", function() {
		$("#job_grade, #department, #work_state, #join_myposition, #job_state").width($("#pop_join_name").width())
		for(var i=0;i<onChair.length;i++){
			for(var y=0;y<arrayChair.length;y++){
				if(onChair[i]==arrayChair[y]){
					arrayChair.splice(y,1)
				}
			}
		}
		pop_main_map_view.arr=arrayChair
	})
	$("#pop_join").on("pagebeforeshow", function() {
		var url = "http://int.udali.com/udaliM/chairOrder.php";
		$.post(url, '',function(data){
			var v = JSON.parse(data)
			for(var i=0;i<v.length;i++){
				if(v[i].chair!=0){
					onChair.push(v[i].chair)
					if(v[i].chair=="a1" || v[i].chair=="b1" || v[i].chair=="d1" || v[i].chair=="e1" || v[i].chair=="e2" || v[i].chair=="ceo"){
						$("#position_mark_"+v[i].chair).attr("src","img/position_mark_down.png").removeClass("position_mark_init")
						$("#join_myposition > option[value='"+v[i].chair+"']").remove();
					}else if(v[i].chair=="a2" || v[i].chair=="a3" || v[i].chair=="a4" || v[i].chair=="a5" || v[i].chair=="b2" || v[i].chair=="b3" || v[i].chair=="b4" || v[i].chair=="d2" || v[i].chair=="d3" || v[i].chair=="c1" || v[i].chair=="c2" || v[i].chair=="c5"){
						$("#position_mark_"+v[i].chair).attr("src","img/position_mark_right.png").removeClass("position_mark_init")
						$("#join_myposition > option[value='"+v[i].chair+"']").remove();
					}else if(v[i].chair=="a6" || v[i].chair=="a7" || v[i].chair=="a8" || v[i].chair=="a9" || v[i].chair=="c3" || v[i].chair=="c4" || v[i].chair=="d4" || v[i].chair=="d5"){
						$("#position_mark_"+v[i].chair).attr("src","img/position_mark_left.png").removeClass("position_mark_init")
						$("#join_myposition > option[value='"+v[i].chair+"']").remove();
					}
				}
			}
			
		})
	})

	$("#pop_modify").on( "pagebeforeshow", function() {
		$(".condition_init").attr("src","img/conditionBar_off.gif")
		pop_modify.arr=[]
		//좌석배치
		var url = "http://int.udali.com/udaliM/chairOrder.php";
		$.post(url, '',function(data){
			var v = JSON.parse(data)
			for(var i=0;i<v.length;i++){
				if(v[i].chair!=0){
					modify_onChair.push(v[i].chair)
					if(main.id!=v[i].id){
						if(v[i].chair=="a1" || v[i].chair=="b1" || v[i].chair=="d1" || v[i].chair=="e1" || v[i].chair=="e2" || v[i].chair=="ceo"){
							$("#modify_position_mark_"+v[i].chair).attr("src","img/position_mark_down.png").removeClass("position_mark_init")
							$("#modify_myposition > option[value='"+v[i].chair+"']").remove();
						}else if(v[i].chair=="a2" || v[i].chair=="a3" || v[i].chair=="a4" || v[i].chair=="a5" || v[i].chair=="b2" || v[i].chair=="b3" || v[i].chair=="b4" || v[i].chair=="d2" || v[i].chair=="d3" || v[i].chair=="c1" || v[i].chair=="c2" || v[i].chair=="c5"){
							$("#modify_position_mark_"+v[i].chair).attr("src","img/position_mark_right.png").removeClass("position_mark_init")
							$("#modify_myposition > option[value='"+v[i].chair+"']").remove();
						}else if(v[i].chair=="a6" || v[i].chair=="a7" || v[i].chair=="a8" || v[i].chair=="a9" || v[i].chair=="c3" || v[i].chair=="c4" || v[i].chair=="d4" || v[i].chair=="d5"){
							$("#modify_position_mark_"+v[i].chair).attr("src","img/position_mark_left.png").removeClass("position_mark_init")
							$("#modify_myposition > option[value='"+v[i].chair+"']").remove();
						}
					}else{
						if(v[i].chair=="a1" || v[i].chair=="b1" || v[i].chair=="d1" || v[i].chair=="e1" || v[i].chair=="e2" || v[i].chair=="ceo"){
							$("#modify_position_mark_"+v[i].chair).attr("src","img/position_mark_down_on.png").removeClass("position_mark_init")
						}else if(v[i].chair=="a2" || v[i].chair=="a3" || v[i].chair=="a4" || v[i].chair=="a5" || v[i].chair=="b2" || v[i].chair=="b3" || v[i].chair=="b4" || v[i].chair=="d2" || v[i].chair=="d3" || v[i].chair=="c1" || v[i].chair=="c2" || v[i].chair=="c5"){
							$("#modify_position_mark_"+v[i].chair).attr("src","img/position_mark_right_on.png").removeClass("position_mark_init")
						}else if(v[i].chair=="a6" || v[i].chair=="a7" || v[i].chair=="a8" || v[i].chair=="a9" || v[i].chair=="c3" || v[i].chair=="c4" || v[i].chair=="d4" || v[i].chair=="d5"){
							$("#modify_position_mark_"+v[i].chair).attr("src","img/position_mark_left_on.png").removeClass("position_mark_init")
						}
						$("#modify_myposition > option[value='"+v[i].chair+"']").attr("selected", true);
						pop_modify.myChair = v[i].chair
					}
				}
			}
		})

		var v = pop_mypage.v;
		var path = localStorage.myImg?localStorage.myImg:"http://int.udali.com/files/pic/"+v[0].pic;

		$("#pop_modify_user_picture").css({"width":"192","height":"192","z-index":"9999","box-sizing":"border-box","border":"3px solid #59c2e6","border-radius":"300px"})
		$("#pop_modify_user_picture").attr("src",path)

		//기타 입력값
		var email = v[0].email
		var mobile = v[0].mobile
		$("#pop_modify_pw").val(v[0].pwd)
		$("#pop_modify_pw2").val(v[0].pwd)
		$("#pop_modify_email").val(email.split("@")[0])
		$("#pop_modify_email_add").val(email.split("@")[1])
		$("#pop_modify_name").val(v[0].name)
		$(".pop_modify_call_num > option[value='"+mobile.split("-")[0]+"']").attr("selected", true);
		$(".pop_modify_call_num").filter("span").text(mobile.split("-")[0])
		$("#pop_modify_call_v1").val(mobile.split("-")[1])
		$("#pop_modify_call_v2").val(mobile.split("-")[2])
		$("#pop_modify_p_num").val(v[0].phone)
		$("#pop_modify_nate").val(v[0].nateon)
		if(v[0].birthday!=null&&v[0].birthday!='null'&&v[0].birthday!=''){
			var birth = v[0].birthday;
			birth=birth.split("-")
			$("#pop_modify_month > option[value='"+birth[0]+"']").attr("selected", true);
			$("#pop_modify_month").prev().text(birth[0])
			$("#pop_modify_day > option[value='"+birth[1]+"']").attr("selected", true);
			$("#pop_modify_day").prev().text(birth[1])
			birth = birth[2].substr(1,1)
			if(birth=="양"){
				$("#pop_modify_yang").attr("checked",true)
			}else{
				$("#pop_modify_hm").attr("checked",true)
			}
		}
		$("#modify_job_grade > option[value='"+v[0].level+"']").attr("selected", true);
		$("#modify_department > option[value='"+v[0].part_idx+"']").attr("selected", true);
		$("#modify_job_state>  option[value='"+v[0].stat+"']").attr("selected", true);
		$("#modify_work_state>  option[value='"+v[0].workStat+"']").attr("selected", true);

/*
		$("#modify_work_state").prev().text(workStat(v[0].workStat))		
		$("#modify_job_state").prev().text(jobStat(v[0].stat))
		$("#modify_department").prev().text(part(v[0].part_idx))
		$("#modify_job_grade").prev().text(v[0].level)
		*/
		$("#pop_modify_toking").val(v[0].m_copy)
		if(v[0].condition!="null" || v[0].condition!=0){
			$("#modify_condition1").attr("st",v[0].condition)
			for(var i=1;i<Number(v[0].condition)+1;i++){
				$("#modify_condition"+i).attr("src", "img/conditionBar_on.gif");
			}
		}
	})

	$("#pop_mypage").on("pagebeforeshow", function() {
		$(".mypage_condition_init").attr("src","img/conditionBar_off.gif")
		var value = {}
		value.id = main.id;
		if(value.id=="hwang"){
			$(".ceo_display").show();
		}else{
			$(".ceo_display").hide();
		}
		var url = "http://int.udali.com/udaliM/pop_mypageLoading.php";
		$.post(url, value,function(data){
			var v = JSON.parse(data)
			pop_mypage.v = v
			pop_mypage.mychair = v[0].chair;
			//이미지
			var path = localStorage.myImg?localStorage.myImg:"http://int.udali.com/files/pic/"+v[0].pic+"";

	 		$("#pop_mypage_user_picture").css({"width":"192","height":"192","z-index":"9999","box-sizing":"border-box","border":"3px solid #59c2e6","border-radius":"300px"})
			$("#pop_mypage_user_picture").attr("src",path)
	
			//기타 입력값
			var main_part = part(v[0].part_idx);
			document.getElementById("pop_mypage_job_workState").value = v[0].workStat
			$("#pop_mypage_toking").val(v[0].m_copy==""?"-":v[0].m_copy)
			if(v[0].condition!="null" || v[0].condition!=0){
				for(var i=1;i<Number(v[0].condition)+1;i++){
					$("#mypage_condition"+i).attr("src", "img/conditionBar_on.gif");
				}
			}	
		})
	})

	//쉐도우
	$("#main_map_shadow, #main_map_close_btn").click(function(){
		$("#main_map_shadow").hide()
		$("#main_map_shadow_in").hide()
	})
	
	//로그인 아이디 중복
	$("#pop_join_id").blur(function(){
		var value = {'id':$("#pop_join_id").val()};
		var url = "http://int.udali.com/udaliM/checkID.php";
		$.post(url, value,function(data){
			if(data=="yes"){
				alert("id가 중복됩니다.");
				$("#pop_join_id").val('');
				$("#pop_join_id").focus();
			}
		})
	})

	//pop_join이미지 넣기
	$("#pop_join_user_picture").click(function(){
		navigator.camera.getPicture( cameraSuccess, cameraError, { 
			quality: 40, 
			destinationType: navigator.camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
		});		
		function cameraSuccess(img){
			pop_join.img = img;
			var path = img;
			path = path.replace("%", "%25");
			/*
			window.resolveLocalFileSystemURI(img, function(fileEntry) {
				fileEntry.file(function(fileObj) {
					if(fileObj.size>512000){
						alert("500KB보다 크다")
					}
				});
			});
			*/
			//이미지 출력
			$("#pop_join_user_picture").css({"width":"192","height":"192","z-index":"9999","box-sizing":"border-box","border":"3px solid #59c2e6","border-radius":"300px"})
			$("#pop_join_user_picture").attr("src",path)
			
			localStorage.myImg = path
			 /*var myImage = new Image();
			 canvas = document.getElementById("getCanvas");
			 if (canvas.getContext) {
			    ctx = canvas.getContext("2d");
			    myImage.onload = function() {
					var imgV = new Image();
					imgV.src= $("#pop_join_user_picture").attr("src")
					if(imgV.naturalWidth>imgV.naturalHeight){
						var valueW = (imgV.naturalWidth/imgV.naturalHeight)*192
						var valueWP = valueW-valueW/2-96
						ctx.drawImage(myImage, -valueWP, 0, valueW, 192);//가로가 커서 세로에 맞춤
					}else if(imgV.naturalWidth<imgV.naturalHeight){
						var valueH = (imgV.naturalHeight/imgV.naturalWidth)*192
						var valueHP = valueH-valueH/2-96
						ctx.drawImage(myImage, 0, -valueHP, 192, valueH);//세로가 커서 가로에 맞춤
					}else{
						ctx.drawImage(myImage, 0, 0, 192, 192);//같음
					}
			    changeImage();
				}
			 myImage.src = path
 			 localStorage.myImg = path
			 $("#getCanvas").css({"display":"block"});
			 }
			function changeImage() {
				ctx.strokeStyle = "#ffffff";
				ctx.lineWidth = "100";
				ctx.beginPath();
				ctx.arc(96, 96, 140, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.stroke();
			}*/

		}
		function cameraError(ms){
			alert("다시 시도해 주세요.")
		}		
	})


/*	//pop_mypage이미지 넣기
	$("#pop_mypage_user_picture, #getCanvas1").click(function(){
		navigator.camera.getPicture( cameraSuccess, cameraError, { 
			quality: 40, 
			destinationType: navigator.camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
		});		
		function cameraSuccess(img){
			//이미지 데이터 진송
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=main.id+'.jpg';
            options.mimeType="image/*";
 
            var params = new Object();
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(img, "http://int.udali.com/udaliM/imgUpload.php", win, fail, options);

			function win(r) {
				return;
			}
	 			function fail(error) {
				alert("사진전송이 실패하였습니다. </br> 다시 시도해주세요.");
			}
			//이미지 출력
			var path = img;
			path = path.replace("%", "%25");

			$("#pop_mypage_user_picture").css({"width":"192","height":"192"})
			$("#pop_mypage_user_picture").hide();
			$("#pop_mypage_user_picture").attr("src",path)

			 var myImage = new Image();
			 canvas = document.getElementById("getCanvas1");
			 if (canvas.getContext) {
			   ctx = canvas.getContext("2d");
			   myImage.onload = function() {
					var imgV = new Image();
					imgV.src= $("#pop_mypage_user_picture").attr("src")
					if(imgV.naturalWidth>imgV.naturalHeight){
						var valueW = (imgV.naturalWidth/imgV.naturalHeight)*192
						var valueWP = valueW-valueW/2-96
						ctx.drawImage(myImage, -valueWP, 0, valueW, 192);//가로가 커서 세로에 맞춤
					}else if(imgV.naturalWidth<imgV.naturalHeight){
						var valueH = (imgV.naturalHeight/imgV.naturalWidth)*192
						var valueHP = valueH-valueH/2-96
						ctx.drawImage(myImage, 0, -valueHP, 192, valueH);//세로가 커서 가로에 맞춤
					}else{
						ctx.drawImage(myImage, 0, 0, 192, 192);//같음
					}
			   changeImage();
			 }
			 myImage.src = $("#pop_mypage_user_picture").attr("src")
			 $("#getCanvas1").css({"z-index":"9999","display":""});
			 }
			function changeImage() {
				ctx.strokeStyle = "#ffffff";
				ctx.lineWidth = "100";
				ctx.beginPath();
				ctx.arc(96, 96, 140, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.stroke();
			}
		}
		function cameraError(ms){
			alert("다시 시도해 주세요.")
		}		
	})*/

	//pop_modify이미지 넣기
	$("#pop_modify_user_picture").click(function(){
		$(".pop_modify_btn").attr("onclick","modify(0)");
		navigator.camera.getPicture( cameraSuccess, cameraError, {
			quality: 40,
			destinationType: navigator.camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
		});
		function cameraSuccess(img){
			var options = new FileUploadOptions();
			options.fileKey="file";
			options.fileName=main.id+'.jpg';
			options.mimeType="image/*";
			
			var params = new Object();
			options.params = params;
			options.chunkedMode = false;

			var ft = new FileTransfer();
			ft.upload(img, "http://int.udali.com/udaliM/imgUpload.php", win, fail, options);

			function win(r) {
				if(r.response==1){
					setTimeout(function(){
						localStorage.myImg=path;
						$(".pop_modify_btn").attr("onclick","modify(1)");
					},1000)
				}
			}
	 
			function fail(error) {
				$(".pop_modify_btn").attr("onclick","modify(1)");
				alert("사진전송이 실패하였습니다. \n다시 시도해주세요.");
			}

			var path = img;
			path = path.replace("%", "%25");
			//이미지 출력
			localStorage.myImg = path
			$("#pop_modify_user_picture").css({"width":"192","height":"192","z-index":"9999","box-sizing":"border-box","border":"3px solid #59c2e6","border-radius":"300px"})
			$("#pop_modify_user_picture").attr("src",path)
			

		}
		function cameraError(ms){
			alert("다시 시도해 주세요.")
		}		
	})
})

function part(v){
	switch(Number(v)){
		case 0:
			return "대표";	break;
		case 6:
			return "SNS";	break;
		case 1:
			return "경영지원팀";	break;
		case 2:
			return "기획1팀";	break;
		case 3:
			return "기획2팀";	break;
		case 4:
			return "기획3팀";	break;
		case 5:
			return "기획4팀";	break;
		case 15:
			return "남양 UX팀";	break;
		case 14:
			return "남양 개발팀";	break;
		case 13:
			return "남양 기획팀";	break;
		case 16:
			return "남양 디자인팀";	break;
		case 11:
			return "남양 아이팀";	break;
		case 10:
			return "뉴비지니스팀";	break;
		case 7:
			return "제작팀";	break;
		case 9:
			return "페이스북팀";	break;
		case 8:
			return "프로그램팀";	break;
	}
}
function jobStat(v){
	switch(Number(v)){
		case 1:
			return "대기";	break;
		case 2:
			return "재직";	break;
		case 3:
			return "퇴사";	break;
	}
}
function workStat(v){
	switch(Number(v)){
		case 1:
			return "근무중";	break;
		case 2:
			return "외근중";	break;
		case 3:
			return "야근중";	break;
		case 4:
			return "퇴근";	break;
		case 5:
			return "휴가";	break;
	}
}

//로그인 검증 후 전송
function login(){
	//검증
	if($("#Lid").val()==""){
		$("#Lid").focus()
		alert("id를 입력해주세요");
		return;
	}
	if($("#Lpw").val()==""){
		$("#Lpw").focus()
		alert("암호를 입력해주세요");
		return;
	}
	
	//아이디 암호 php.php 전송
	var value={'Lid':$("#Lid").val(),'Lpw':$("#Lpw").val()};
	var url = "http://int.udali.com/udaliM/login.php";
	$.post(url, value,function(data){
		if(data=="0"){
			$("#Lid").val('')
			$("#Lpw").val('')
			$("#Lid").focus()
			alert("아이디나 패스워드가 틀렸습니다.")
			return;
		}
		localStorage.id=$("#Lid").val()
		localStorage.pw=$("#Lpw").val()
		localStorage.autoLogin="on"
		main.id=$("#Lid").val()
		localStorage.myImg="http://int.udali.com/files/pic/"+main.id+".jpg";
		location.href="#main";
	})
}

//아이디와 암호 찾기
function check(v){
	var value={};
	if(v=="id"){
		value.type="id";
		if($("#m_num").val().match("-")!=null){
			value.m_num=$("#m_num").val();
		}else{
			alert("올바른 전화번호 형식이 아닙니다. \n예)010-0000-0000");
			$("#m_num").focus();
			return;
		}
	}else{
		value.type="pw";
		if($("#m_id").val()==""){
			alert("ID를 입력해주세요.")
			$("#m_id").focus();
			return;
		}
		if($("#m_num2").val().match("-")!=null){
			value.m_id=$("#m_id").val();
			value.m_num2=$("#m_num2").val();
		}else{
			alert("올바른 전화번호 형식이 아닙니다. \n예)010-0000-0000");			
			$("#m_num2").focus();
			return;
		}
	}
	var url = "http://int.udali.com/udaliM/check.php";;
	$.post(url, value,function(data){
		alert(data)
		if(data=="error"){
			alert("입력하신 정보가 잘못되었습니다.");
		}else{
			alert("가입하신 이메일로 전송되었습니다.");
		}
		$("#m_id").val('');
		$("#m_num").val('');
		$("#m_num2").val('');
	})
}

//pop_join오늘 나의 컨디션 박스 선택
function joboxClick(n){
	$(".condition_init").attr("src","img/conditionBar_off.gif");
	$("#join_condition1").attr("st",n);
	for(var i=1;i<n+1;i++){
		$("#join_condition"+i).attr("src","img/conditionBar_on.gif");
	}
}
//pop_mypage오늘 나의 컨디션 박스 선택
function mpboxClick(n){
	$(".condition_init").attr("src","img/conditionBar_off.gif");
	$("#join_condition1").attr("st",n)
	for(var i=1;i<n+1;i++){
		$("#join_condition"+i).attr("src","img/conditionBar_on.gif");
	}
}
function myboxClick(n){
	$(".mypage_condition_init").attr("src","img/conditionBar_off.gif");
	$("#mypage_condition1").attr("st",n)
	for(var i=1;i<n+1;i++){
		$("#mypage_condition"+i).attr("src","img/conditionBar_on.gif");
	}
}
//pop_modify오늘 나의 컨디션 박스 선택
function mfboxClick(n){
	$(".condition_init").attr("src","img/conditionBar_off.gif");
	$("#modify_condition1").attr("st",n)
	for(var i=1;i<n+1;i++){
		$("#modify_condition"+i).attr("src","img/conditionBar_on.gif");
	}
}

//사원가입
function join(){
	if($("#pop_join_user_picture").attr("src")=="img/basicPhoto.gif"){
		alert("사진을 넣어주세요.");
		return;
	}
	if($("#pop_join_id").val()==""){
		alert("id를 입력해주세요.");
		$("#pop_join_id").focus();
		return;
	}
	if($("#pop_join_id").val().length < 2) {
		alert("2글자 이상 작성해주세요.");		
		$("#pop_join_id").val("")
		$("#pop_join_id").focus();
		return;
	}
	if($("#pop_join_pw").val()==""){
		alert("암호를 입력해주세요.");
		$("#pop_join_pw").focus();
		return;
	}
	if($("#pop_join_pw").val().length < 8) {
		alert("암호는 8자이상 작성해주세요.");		
		$("#pop_join_pw").val("")
		$("#pop_join_pw2").val("");
		$("#pop_join_pw").focus();
		return;
	}
	if($("#pop_join_pw").val()!=$("#pop_join_pw2").val()){
		alert("패스워드가 다릅니다.")
		$("#pop_join_pw").focus();
		$("#pop_join_pw").val("");
		$("#pop_join_pw2").val("");
		return;
	}
	if($("#pop_join_email").val()==""){
		alert("email을 입력해주세요.")
		$("#pop_join_email").focus();
		return;
	}
	if($("#pop_join_email_add").val()==""){
		alert("email을 선택해주세요.")
		$(".pop_join_email_select").focus();
		return;
	}

	if(IsName($("#pop_join_name").val())) {
		alert("한글만 입력해 주세요");
		$("#pop_join_name").val("")
		$("#pop_join_name").focus();
		return;
	}
	if($("#pop_join_name").val()==""){
		alert("이름을 입력해주세요");
		$("#pop_join_name").focus();
		return;
	}
	if($(".pop_join_call_num").val()=="none"){
		alert("전화번호를 선택해주세요")
		$(".pop_join_call_num").focus();
		return;
	}
	if($("#pop_join_call_v1").val()==""||$("#pop_join_call_v1").val().length<3){
		alert("전화번호를 입력해주세요")
		$("#pop_join_call_v1").focus();
		return;
	}
	if($("#pop_join_call_v2").val()==""||$("#pop_join_call_v2").val().length<4){
		alert("전화번호를 입력해주세요")
		$("#pop_join_call_v2").focus();
		return;
	}
	if($("#pop_join_p_num").val()==""){
		alert("회사 전호번호를 입력해주세요. 예) 4575");
		$("#pop_join_p_num").focus();
		return;
	}else if($("#pop_join_p_num").val().length>5){
		$("#pop_join_p_num").focus();
		alert("회사 전호번호 끝 4자리만 입력해주세요. 예) 4575");
		return;
	}
	if($('#pop_join_nate').val()==""){
		alert("nate on 아이디를 입력해주세요");
		$('#pop_join_nate').focus();
		return
	}else if($('#pop_join_nate').val().match("@")=="@"){
		var key= $('#pop_join_nate').val().split("@")[0];
		$('#pop_join_nate').val(key);
	}
	if(($("#pop_join_yang").is(":checked")==false) && ($("#pop_join_hm").is(":checked")==false)){
		alert("생일에 양력 또는 음력을 선택해주세요.")
		$("#pop_join_yang").focus()
		return;
	}
	if($("#job_grade").val()=="직급"){
		alert("직급을 선택해주세요.")
		$("#job_grade").focus();
		return;
	}
	if($("#department").val()=="소속부서"){
		alert("소속부서를 선택해주세요")
		$("#department").focus();
		return;
	}
	if($("#job_state").val()=="상태"){
		alert("현재 재직상태를 선택해주세요.")
		$("#job_state").focus();
		return;
	}
	if($("#work_state").val()=="현재근무상태"){
		alert("현재 근무상태를 선택해주세요.")
		$("#work_state").focus();
		return;
	}
	if($("#pop_join_toking").val()==""){
		alert("나의 한마디를 입력해주세요.");
		$("#pop_join_toking").focus();
		return;
	}
	if($("#join_condition1").attr("st")==undefined){
		alert("오늘의 컨디션을 선택해주세요.");
		return;
	}
	var birth;
	if($("#pop_join_yang").is(":checked")==false){
		birth = "(음)"
	}else{
		birth = "(양)"
	}
	birth = $("#pop_join_month").val()+"-"+$("#pop_join_day").val()+"-"+birth;
	var chair;
	if($("#join_myposition").val()=="현재근무상태"){
		chair=0
	}else{
		chair=$("#join_myposition").val()
	}

	//정보 전송
	var value={'id':$("#pop_join_id").val(),
			  'pw':$("#pop_join_pw").val(),
			  'email':$("#pop_join_email").val()+'@'+$("#pop_join_email_add").val(),	 
			  'name':$("#pop_join_name").val(),
			  'mobile':$(".pop_join_call_num option:selected").val()+'-'+$("#pop_join_call_v1").val()+'-'+$("#pop_join_call_v2").val(),
			  'phone':$("#pop_join_p_num").val(),
			  'nate':$("#pop_join_nate").val()+'@nate.com',
			  'grade':$("#job_grade").val(),
			  'department':$("#department").val(),
			  'job_state':$("#job_state").val(),
			  'work_state':$("#work_state").val(),
			  'toking':$("#pop_join_toking").val(),
			  'condition':$("#box1").attr("st"),
			  'chair':chair,
			  'pic':$("#pop_join_id").val()+'.jpg',
			  'birthday':birth };
	var url = "http://int.udali.com/udaliM/join.php";
	$.post(url, value,function(data){
		if(data=="1"){
			//이미지 업로드
			var imgU = pop_join.img
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=$("#pop_join_id").val()+'.jpg';
            options.mimeType="image/*";
 
            var params = new Object();
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(imgU, "http://int.udali.com/udaliM/imgUpload.php", win, fail, options);

			function win(r) {
				if(r.response==1){
					var path = imgU.replace("%", "%25");
					localStorage.myImg = path
				}
				return;
			}
	 
			function fail(error) {
				alert("사진전송이 실패하였습니다. </br> 다시 시도해주세요.");
			}
			setTimeout(function(){
				location.href="#index";			
			},300)
		}else if(data=="0"){
			alert("가입이 실패했습니다. 다시 입력해주세요.");
		}
	})

}

//한글 검증
function IsName(str){
	if((str.search(/[a-zA-Z0-9`~!@#$%^&*()-_=+\{\}]/) != -1)) {return true;}
	else{return false;}
}


//사원가입
function save(){
	/*if($("#pop_mypage_user_picture").attr("src")=="img/basicPhoto.png"){
		alert("사진을 넣어주세요.");
		return;
	}*/
	if($("#pop_mypage_job_workState").val()=="현재근무상태상태"){
		alert("현재근무상태를 선택해주세요.")
		$("#pop_mypage_job_workState").focus();
		return;
	}
	if($("#pop_mypage_toking").val()==""){
		alert("나의 한마디를 입력해주세요.");
		$("#pop_join_toking").focus();
		return;
	}
	if($("#mypage_condition1").attr("st")==undefined){
		alert("오늘의 컨디션을 선택해주세요.");
		return;
	}

	//데이터 전송
	var value={'id':main.id,
			  'work_state':$("#pop_mypage_job_workState").val(),
			  'toking':$("#pop_mypage_toking").val(),
			  'condition':$("#mypage_condition1").attr("st")
		   };
	var url = "http://int.udali.com/udaliM/mypage.php";
	$.post(url, value,function(data){
		if(data=="1"){
			location.href="#main";
		}else if(data=="0"){
			alert("업데이트가 실패했습니다. 다시 시도해주세요.");
		}
	})
}



function mainLoading(){
	//main페이지 목록불러오기
	var v = {"id":main.id}
	var url = "http://int.udali.com/udaliM/main.php";
	$.post(url, v,function(data){
		var value = JSON.parse(data)
		/*for(var i=0; i<value.length;i++){
			alert(value[i].user_idx+" "+value[i].part_idx+" "+value[i].name+" "+value[i].id+
					+" "+value[i].mobile+" "+value[i].phone+" "+value[i].birthday+" "+value[i].m_level+
					+" "+value[i].stat+" "+value[i].level+" "+value[i].pic+" "+value[i].nateon+
					+" "+value[i].m_copy+" "+value[i].condition+" "+value[i].chair+" "+value[i].rdate)
		}*/
		var html = "";
		var main_part, main_workStat
		for(var i=0,len=value.length; i<len;i++){
			main_part = part(value[i].part_idx);
			main_workStat = workStat(value[i].workStat);
			var mypic;
			if(main.id==value[i].id){
				mypic = localStorage.myImg?localStorage.myImg:"http://int.udali.com/files/pic/"+value[i].pic;
			}else{
				mypic = "http://int.udali.com/files/pic/"+value[i].pic;
			}

			var con_html = html_condition(value[i].condition);

			var class_type;
				html+='<div class="main_pofile" style="">'+
					'<div class="main_profile_first" onclick=showPro("'+value[i].id+'")>'+
						'<div class="main_profile_first_1">'+
							'<div class="main_profile_first_1_1">'+
								'<img class="main_profile_first_1_1_img" id="imgS'+i+'" src="'+mypic+'">'+
							'</div>'+
							'<div class="main_profile_first_1_2">'+value[i].name+'</div>'+
						'</div>'+
						'<div class="main_profile_first_2">'+
							'<div class="main_profile_first_2_1">'+((value[i].m_copy!="")?value[i].m_copy:"-")+'</div>'+
							'<div class="main_profile_first_2_2">'+
								'<div class="main_profile_first_2_2_1">'+
									'<div class="main_profile_first_2_2_1_1">'+
										'<span class="main_profile_first_2_2_1_1_text">직급 │</span> <span class="main_profile_first_2_2_1_1_text1">'+value[i].level+'</span>'+
									'</div>'+
									'<div class="main_profile_first_2_2_1_2">'+
										'<span class="main_profile_first_2_2_1_1_text">소속 │</span>  <span class="main_profile_first_2_2_1_1_text1">'+main_part+'</span>'+
									'</div>'+
									'<div class="main_profile_first_2_2_1_3">'+
										'<span class="main_profile_first_2_2_1_1_text">상태 │</span> <span class="main_profile_first_2_2_1_1_text2">'+main_workStat+'</span>'+
									'</div>'+
								'</div>'+
								'<div class="main_profile_first_2_2_2">'+
									'<div class="main_profile_condition">'+
										'<div class="main_profile_condition_text">컨디션</div>'+
										'<div class="main_profile_condition_1">'+
											con_html+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="main_profile_second">'+
						'<a href="tel:'+value[i].mobile+'"><div class="main_profile_second_1">MOBILE</div></a>'+
						'<a href="tel:070-4902-'+value[i].phone+'"><div class="main_profile_second_2">사내 전화 (개인)</div></a>'+
					'</div>'+
				'</div>'
			/*html+='<div class="profile" idd="'+value[i].id+'" id="profile'+i+'">'+
				'<div class="profile_first" onclick=showPro(this)>'+
					'<div class="profile_first_1">'+
						'<img class="profile_pic" id="imgS'+i+'" src="'+mypic+'">'+
					'</div>'+
					'<div class="profile_first_2 main_font"><span class="main_line_height">'+main_part+'</span></div>'+
					'<div class="profile_first_3 main_font"><span class="main_line_height">'+main_workStat+'</span></div>'+
				'</div>'+
				'<div class="profile_second" onclick=showPro(this)>'+
					'<div class="profile_second_1 main_font">'+
						'<div class="main_p_icon"></div>'+
						'<span class="main_p_wrap">'+
							'<div class="main_p">'+((value[i].m_copy!="")?value[i].m_copy:"-")+'</div>'+
						'</span>'+
					'</div>'+
					'<div class="profile_second_2 main_font"><span class="main_line_height">'+value[i].level+' : '+value[i].name+'</span></div>'+
					'<div class="profile_second_3"></div>'+
					'<div class="main_profile_condition" id="condition_value'+i+'" value="'+value[i].condition+'">'+  
					'<div class="profile_second_4 main_font"><span class="main_line_height">오늘의 컨디션</span></div>'+
					'</div>'+
				'</div>'+
				'<div class="profile_third">'+
					'<div class="profile_third_1">'+
						'<a href="tel:'+value[i].mobile+'"><img class="main_mobile_icon" src="img/mobile.gif"></a>'+
					'</div>'+
					'<div class="profile_third_2">'+
						'<a href="tel:070-4902-'+value[i].phone+'"><img class="main_call_icon" src="img/call.gif"></a>'+
					'</div>'+
				'</div>'+
			'</div>';*/
		}
		$("#main_content").append(html);
		setTimeout(function(){
			for(var i=0; i<value.length;i++){
				if($("#imgS"+i).width()<$("#imgS"+i).height()){
					$("#imgS"+i).css({"margin-top":-($("#imgS"+i).height()-120)/2});
				}else{
					$("#imgS"+i).css({"height":"120px"});
				}
			}
		},200)
	
		setTimeout(function(){
			$("#loading").css("display","none");
		},1500)
	})					
}

function modify(n){
	if(n==1){
		if($("#pop_modify_pw").val()==""){
			alert("암호를 입력해주세요.");
			$("#pop_modify_pw").focus();
			return;
		}
		if($("#pop_modify_pw").val().length < 8) {
			alert("암호는 8자이상 작성해주세요.");		
			$("#pop_modify_pw").val("")
			$("#pop_modify_pw2").val("");
			$("#pop_modify_pw").focus();
			return;
		}
		if($("#pop_modify_pw").val()!=$("#pop_modify_pw2").val()){
			alert("패스워드가 다릅니다.")
			$("#pop_modify_pw").focus();
			$("#pop_modify_pw").val("");
			$("#pop_modify_pw2").val("");
			return;
		}
		if($("#pop_modify_email").val()==""){
			alert("email을 입력해주세요.")
			$("#pop_modify_email").focus();
			return;
		}
		if(IsName($("#pop_modify_name").val())) {
			alert("한글만 입력해 주세요");
			$("#pop_modify_name").val("")
			$("#pop_modify_name").focus();
			return;
		}
		if($("#pop_modify_name").val()==""){
			alert("이름을 입력해주세요");
			$("#pop_modify_name").focus();
			return;
		}
		if($("#pop_modify_m_num").val()==""){
			alert("개인 전화번호를 입력해주세요.");
			$("#pop_modify_m_num").focus();
			return;
		}
		if($("#pop_modify_p_num").val()==""){
			alert("회사 전호번호를 입력해주세요. 예) 4575");
			$("#pop_modify_p_num").focus();
			return;
		}else if($("#pop_modify_p_num").val().length>5){
			$("#pop_modify_p_num").focus();
			alert("회사 전호번호 끝 4자리만 입력해주세요. 예) 4575");
			return;
		}
		if($('#pop_modify_nate').val()==""){
			alert("nate on 아이디를 입력해주세요");
			$('#pop_modify_nate').focus();
			return
		}else if($('#pop_modify_nate').val().match("@")=="@"){
			var key= $('#pop_modify_nate').val().split("@")[0];
			$('#pop_modify_nate').val(key);
		}
		if(($("#pop_modify_yang").is(":checked")==false) && ($("#pop_modify_hm").is(":checked")==false)){
			alert("생일에 양력 또는 음력을 선택해주세요.")
			$("#pop_modify_yang").focus()
			return;
		}
		if($("#modify_job_grade").val()=="직급"){
			alert("직급을 선택해주세요.")
			$("#modify_job_grade").focus();
			return;
		}
		if($("#modify_department").val()=="소속부서"){
			alert("소속부서를 선택해주세요")
			$("#modify_department").focus();
			return;
		}
		if($("#modify_job_state").val()=="상태"){
			alert("현재 재직상태를 선택해주세요.")
			$("#modify_job_state").focus();
			return;
		}
		if($("#modify_work_state").val()=="현재근무상태"){
			alert("현재 근무상태를 선택해주세요.")
			$("#modify_work_state").focus();
			return;
		}
		if($("#pop_modify_toking").val()==""){
			alert("나의 한마디를 입력해주세요.");
			$("#pop_modify_toking").focus();
			return;
		}

		var birth;
		if($("#pop_modify_yang").is(":checked")==false){
			birth = "(음)"
		}else{
			birth = "(양)"
		}
		birth = $("#pop_modify_month").val()+"-"+$("#pop_modify_day").val()+"-"+birth;
		var nate = $("#pop_modify_nate").val().match("@")?$("#pop_modify_nate").val():$("#pop_modify_nate").val()+'@nate.com';
		var chair;
		if($("#modify_myposition").val()=="현재근무상태"){
			chair=0
		}else{
			chair=$("#modify_myposition").val()
		}
		//정보 전송
		var value={'id':main.id,
						  'pw':$("#pop_modify_pw").val(),
						  'email':$("#pop_modify_email").val()+'@'+$("#pop_modify_email_add").val(),	 
						  'name':$("#pop_modify_name").val(),
						  'mobile':$(".pop_modify_call_num option:selected").val()+'-'+$("#pop_modify_call_v1").val()+'-'+$("#pop_modify_call_v2").val(),
						  'phone':$("#pop_modify_p_num").val(),
						  'nate':nate,
						  'grade':$("#modify_job_grade").val(),
						  'department':$("#modify_department").val(),
						  'job_state':$("#modify_job_state").val(),
						  'work_state':$("#modify_work_state").val(),
						  'toking':$("#pop_modify_toking").val(),
						  'condition':$("#modify_condition1").attr("st"),
						  'chair':chair,
						  'pic':main.id+'.jpg',
						  'birthday':birth
						 };

		var url = "http://int.udali.com/udaliM/modify.php";
		$.post(url, value,function(data){
			if(data==1){
				location.href="#main";
			}else{
				alert("전송이 실패하였습니다.");
			}
		})
	}else{
		alert("파일을 전송중입니다.\n잠시후 다시 시도해주세요.");
	}
}

function mainMap(v){
	localStorage.main_map_view=v
	location.href="#main_map_view";
}

function viewCloseBtn(){
	$("#main_map_shadow").hide()
	$("#main_map_shadow_in").hide()
}

function showPro(v){
	$(".condition_init").attr("src","img/conditionBar_off.gif")
	var value = {}
	value.id = v;
	var url = "http://int.udali.com/udaliM/pop_profile.php";
	$.post(url, value,function(data){
		var v = JSON.parse(data)
		//이미지
		var pic = v[0].pic
		pic = pic.split(".")[0]
		if(pic!=main.id){
			var path = "http://int.udali.com/files/pic/"+v[0].pic;
		}else{
			var path = localStorage.myImg
		}
		$("#getprofilePhoto").css({"width":"192","height":"192","z-index":"9999","box-sizing":"border-box","border":"3px solid #59c2e6","border-radius":"300px"})
		$("#getprofilePhoto").attr("src",path)
		//기타 입력값
		var main_part = part(v[0].part_idx);
		var main_workStat = workStat(v[0].workStat);
		$("#pop_profile_1").val(v[0].level+" : "+v[0].name)
		$("#pop_profile_2").val(main_part)
		$("#pop_profile_3").val(main_workStat)
		$("#pop_profile_4").val((v[0].m_copy)?v[0].m_copy:"나의 한마디")
		if(v[0].condition!="null" || v[0].condition!=0){
			for(var i=0;i<Number(v[0].condition)+1;i++){
				$("#profile_condition"+i).attr("src","img/conditionBar_on.gif")
			}
			location.href="#pop_profile"
		}else{
			location.href="#pop_profile"
		}
	})
}

//숫자키 검증
function showKeyCode(event,e) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if( ( keyID >=48 && keyID <= 57 ) || ( keyID >=96 && keyID <= 105 ) )
	{
		return;
	}
	else
	{
		alert("숫자키만 입력해주세요.")
		$(e).val('')	
	}
	/* 48~57:일반 숫자키 코드, 96~105:숫자키패드 숫자키 코드 */
}

function koreanCheck(){
	var str=$("#pop_join_email").val();
	for (var i = 0; i < str.length; i++) {
		if (escape(str.charAt(i)).length >= 4) {
			alert("한글사용은 불가능합니다.");
			$("#pop_join_email").val('')
			$("#pop_join_email").focus()
		} else {
			if (escape(str.charAt(i)) == "%0D") {
				alert("한글사용은 불가능합니다.");
				$("#pop_join_email").val('')
				$("#pop_join_email").focus()
			}
		}
	}
}

function fileDown(v){
	var name = $(v).attr("filename");
	name = name.substr(1,name.lastIndexOf("]")-1)
	name = name+$(v).attr("refilename").substr(2,6)
	var name_sub = $(v).attr("refilename").split(".")[1]
	name = name+"."+name_sub;
	var fileTransfer = new FileTransfer();
	fileTransfer.download(
		"http://int.udali.com/bbs_Diary/files/"+$(v).attr("refileName"),
		cordova.file.externalRootDirectory+"workDaily/"+name,
		function(entry) {
			alert("다운로드를 시작하겠습니다.");
		},
		function(error) {
			alert("다운로드를 실패하였습니다. \n 다시 시도해 주세요.");
		}
	);
}

function moreDailyList(){
	++pop_workDaily.outputN
	var url = "http://int.udali.com/udaliM/workDaily.php";
	$.post(url, pop_workDaily,function(data){
		var v = JSON.parse(data)
		for(var i=0;i<v.length;i++){
			var date = v[i].tdate  
			date = date.split("-")
			var subject = v[i].subject
			var num = subject.lastIndexOf("일일업무보고");
			subject = subject.substr(0,num+6)
			html='<div style="width:100%;height:50px;color:#4f5f6f;text-shadow:0 0 0 white;font-size:14px;text-align:center;border-bottom:1px solid #90a4b4">'+
					'<div style="width:40%;height:50px;line-height:55px;float:left;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">'+subject+'</div>'+
					'<div style="width:15%;height:50px;line-height:55px;float:left;background-color:#edeff0;">'+v[i].name+'</div>'+
					'<div style="width:30%;height:50px;line-height:55px;float:left;">'+date[0].substr(2,2)+'/'+date[1]+'/'+date[2].substr(0,2)+'</div>'+
					'<div style="width:15%;height:50px;line-height:55px;float:left;background-color:#de6559;color:white;text-shadow:0 0 0 white;"><img id="workDaily_img'+v[i].idx+'" fileName="'+subject+'" refileName="'+v[i].refilename+'" width="40px" height="40px" src="img/file.gif" onclick="fileDown(this)" style="margin-top: 5px;"></div>'+
				'</div>'
			$("#workDaily_content").append(html)
			/*html='<div class="pop_workDaily_list_div">'+
					'<ul class="pop_workDaily_list_ul">'+
						'<li class="pop_workDaily_list_subject">'+subject+'</li>'+
						'<li class="pop_workDaily_list_name">'+v[i].name+'</li>'+
						'<li class="pop_workDaily_list_date">'+date[0].substr(2,2)+'/'+date[1]+'/'+date[2].substr(0,2)+'</li>'+
						'<li class="pop_workDaily_list_refilename">'+
							'<div class="pop_workDaily_list_img_wrap">'+
								'<img id="workDaily_img'+v[i].idx+'" refileName="'+v[i].refilename+'" width="28px" height="28px" src="img/file.gif" onclick="fileDown(this)">'+
							'</div>'+
						'</li>'+
					'</ul>'+
				 '</div>'*/
			$("#workDaily_content").append(html)
		}
	})
}

function pop_scheduler_register(){
	if($("#pop_register_title").val()==""){
		alert("제목을 입력해주세요.")
		return;
	}
	if($("#pop_register_dateY").val()=="no"){
		alert("년도를 선택해주세요.");
		return;
	}
	if($("#pop_register_dateM").val()=="no"){
		alert("달을 선택해주세요.");
		return;
	}
	if($("#pop_register_dateD").val()=="no"){
		alert("일을 선택해주세요.");
		return;
	}
	if($("#pop_register_Start").val()=="no"){
		alert("시작시간을 선택해주세요.");
		return;
	}
	if($("#pop_register_Start").val()=="no"){
		alert("시작분을 선택해주세요.");
		return;
	}
	
	var todayY = $("#pop_register_dateY").val()
	var todayM = $("#pop_register_dateM").val().length==1?"0"+$("#pop_register_dateM").val():$("#pop_register_dateM").val()
	var todayD = $("#pop_register_dateD").val().length==1?"0"+$("#pop_register_dateD").val():$("#pop_register_dateD").val()
	var today = todayY+"/"+todayM+"/"+todayD
	var nowD = new Date()
	var year = nowD.getFullYear()
	var month = (nowD.getMonth()+1)
		month = String(month).length==1?"0"+String(month):month
	var day = nowD.getDate()
		day = String(day).length==1?"0"+String(day):day
	nowD = String(year).substr(2,2)+"/"+month+"/"+day

	var dateM = $("#pop_register_dateM").val().length>1?$("#pop_register_dateM").val():"0"+$("#pop_register_dateM").val()
	var dateD =	$("#pop_register_dateD").val().length>1?$("#pop_register_dateD").val():"0"+$("#pop_register_dateD").val()
	var stimeH = $("#pop_register_Start").val().split("_")[0]
	var stimeM = $("#pop_register_Start").val().split("_")[1]
	var etimeH = $("#pop_register_End").val().split("_")[0]
	var etimeM = $("#pop_register_End").val().split("_")[1]
	stimeH = stimeH.length>1?stimeH:"0"+stimeH
	stimeM = stimeM
	etimeH = etimeH.length>1?etimeH:"0"+etimeH
	etimeM = etimeM

	if(today<nowD){//내가 설정한 날짜보다 오늘날짜 같거나 커야함
		alert("날짜를 다시 설정해주세요.");
		return;
	}else{
		var startT = stimeH+"/"+stimeM
		var endT = etimeH+"/"+etimeM
		if(endT<startT){
			alert("시작, 종료시간을 다시 설정해주세요.");
			return;
		}
	}

	var value = {
				"id":main.id,
				"title":$("#pop_register_title").val(),
				"sDate":$("#pop_register_dateY").val()+"/"+dateM+"/"+dateD,
				"sTime":stimeH+" "+stimeM,
				"eTime":etimeH+" "+etimeM
				}
	var url = "http://int.udali.com/udaliM/scheduler_register.php";
	$.post(url,value,function(data){
		var v = JSON.parse(data)
		if(data=="1"){
			location.href="#pop_scheduler"
		}else{
			alert("등록실패 다시 시도해주세요.")
		}
	})

}

function schedulerM(v){
	pop_scheduler.Num = v;
	location.href="#pop_scheduler_modify";
}

function schedulerR(v){
	if (confirm("정말 삭제하시겠습니까??") == true){
		var value = {"scheduler_idx":v}
		var url = "http://int.udali.com/udaliM/scheduler_delete.php";
		$.post(url,value,function(data){
			var v = JSON.parse(data)
			if(data=="0"){
				$(".scheduler_list"+value.scheduler_idx).remove()
			}else{
				alert("삭제실패 다시 시도해주세요.")
			}
		})
	}else{  
		return;
	}
	
}

function pop_scheduler_modify(){
	var todayY = $("#pop_scheduler_modify_dateY").val()
	var todayM = $("#pop_scheduler_modify_dateM").val().length==1?"0"+$("#pop_scheduler_modify_dateM").val():$("#pop_scheduler_modify_dateM").val()
	var todayD = $("#pop_scheduler_modify_dateD").val().length==1?"0"+$("#pop_scheduler_modify_dateD").val():$("#pop_scheduler_modify_dateD").val()
	var today = todayY+"/"+todayM+"/"+todayD
	var nowD = new Date()
	var year = nowD.getFullYear()
	var month = (nowD.getMonth()+1)
		month = String(month).length==1?"0"+String(month):month
	var day = nowD.getDate()
		day = String(day).length==1?"0"+String(day):day
	nowD = String(year).substr(2,2)+"/"+month+"/"+day

	var dateM = $("#pop_scheduler_modify_dateM").val().length>1?$("#pop_scheduler_modify_dateM").val():"0"+$("#pop_scheduler_modify_dateM").val()
	var dateD =	$("#pop_scheduler_modify_dateD").val().length>1?$("#pop_scheduler_modify_dateD").val():"0"+$("#pop_scheduler_modify_dateD").val()
	var stimeH = $("#pop_scheduler_modify_Start").val().split("_")[0]
	var stimeM = $("#pop_scheduler_modify_Start").val().split("_")[1]
	var etimeH = $("#pop_scheduler_modify_End").val().split("_")[0]
	var etimeM = $("#pop_scheduler_modify_End").val().split("_")[1]
	stimeH = stimeH.length>1?stimeH:"0"+stimeH
	stimeM = stimeM
	etimeH = etimeH.length>1?etimeH:"0"+etimeH
	etimeM = etimeM

	if(today<nowD){//내가 설정한 날짜보다 오늘날짜 같거나 커야함
		alert("날짜를 다시 설정해주세요.");
		return;
	}else{
		var startT = stimeH+"/"+stimeM
		var endT = etimeH+"/"+etimeM
		if(endT<startT){
			alert("시작, 종료시간을 다시 설정해주세요.");
			return;
		}
	}

	var value = {
				"scheduler_idx":$("#pop_scheduler_modify_title").attr("idxV"),
				"id":main.id,
				"title":$("#pop_scheduler_modify_title").val(),
				"sDate":$("#pop_scheduler_modify_dateY").val()+"/"+dateM+"/"+dateD,
				"sTime":stimeH+" "+stimeM,
				"eTime":etimeH+" "+etimeM
				}
	var url = "http://int.udali.com/udaliM/scheduler_modify_update.php";
	$.post(url,value,function(data){
		var v = JSON.parse(data)
		if(data=="1"){
			location.href="#pop_scheduler"
		}else{
			alert("등록실패 다시 시도해주세요.")
		}
	})

}

function joinOpen(){
	++pop_join.open
	if(pop_join.open==10){
		alert("회원가입 모드 권한을 부여합니다.")
		$(".pop_join_hidden").show()
	}
}
//pop_notice 더보기 버튼
function moreNoticeList(){
	var value={
		"pageNumber":$(".pop_notice_footer").attr("pageNumber")
	}
	var num = $(".pop_notice_footer").attr("pageNumber");
	$(".pop_notice_footer").attr("pageNumber",Number($(".pop_notice_footer").attr("pageNumber"))+10);
	var url = "http://int.udali.com/udaliM/notice.php";
	$.post(url, value, function(data){
		if(data==1){
			alert("불러올 자료가 없습니다.")
			return;
		}
		var v = JSON.parse(data)
		for(var i=0;i<v.length;i++){
			var html=""
			var rdate = v[i].rdate;	rdate = rdate.split(" "); rdate = rdate[0].replace("-","/").replace("-","/"); rdate = rdate.substr(2,8);
				html='<div class="notice_list">'+
						'<div class="notice_list_in" onclick="notice_cont(this)" style="width:100%;color:#4f5f6f;text-shadow:0 0 0 white;font-size:13px;text-align:center;">'+
							'<div style="width:100%;height:55px;box-sizing:border-box;border-bottom:1px solid #90a4b4;">'+
								'<div style="width:40%;height:54px;line-height:55px;float:left;white-space: nowrap;overflow:hidden;text-overflow: ellipsis;">'+v[i].subject+'</div>'+
								'<div style="width:15%;height:54px;line-height:55px;float:left;background-color:#edeff0;">'+v[i].name+'</div>'+
								'<div style="width:30%;height:54px;line-height:55px;float:left;">'+rdate+'</div>'+
								'<div style="width:15%;height:54px;line-height:55px;float:left;background-color:#edeff0;">'+v[i].hit+'</div>'+
							'</div>'+
							'<p class="notice_p">'+v[i].cont+'</p>'+
						'</div>'+
					'</div>';
			$("#notice_content").append(html)
		}
	})
}

//content 열기
function notice_cont(v){
	$(".notice_list_in").children("div").children("div").css({"height":"54px","line-height":"55px"});
	$(".notice_list_in").children("div").css("border","0px solid #59c2e6");
	$(".notice_list_in").children("div").css("border-bottom","1px solid #90a4b4");
	if($(v).children("p").css("display")=="none"){
		$(".notice_p").hide();
		$(v).children("p").show()
		$(v).children("div").children("div").css({"height":"49px","line-height":"49px"});
		$(v).children("div").css("border","3px solid #59c2e6");
	}else{
		$(v).children("p").hide()
		$(v).children("div").children("div").css({"height":"54px","line-height":"55px"});
		$(v).children("div").css("border","0px solid #59c2e6");
		$(v).children("div").css("border-bottom","1px solid #90a4b4");
	}
}


function html_condition(v){
	var html_condi = "";
	switch(Number(v)){
		case 0:
			html_condi+='<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'
		return html_condi;
			break
		case 1:
			html_condi+='<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'
		return html_condi;
			break
		case 2:
			html_condi+='<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'
		return html_condi;
			break
		case 3:
			html_condi+='<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'
		return html_condi;
			break
		case 4:
			html_condi+='<div class="main_profile_condition_bar"><img src="img/condition_off.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'
		return html_condi;
			break
		case 5:
			html_condi+='<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'+
						'<div class="main_profile_condition_bar"><img src="img/condition_on.gif" class="main_profile_condition_barI"></div>'
		return html_condi;
			break
	}
}

function profile_full_img(v){
	$("body").css("overflow","hidden")
	$("#profile_shadow_img").attr("src",$(v).attr("src"))
	$("#pop_profile").attr("data-position","fixed")
	$("#profile_shadow").css({"display":"block","overflow":"hidden","top":0,"position":"fixed"});
	$("#profile_shadow").width($(this).width())
	$("#profile_shadow").height($(this).height())

	var imgV = new Image();
	imgV.src= $("#profile_shadow_img").attr("src")
	ratio = imgV.naturalWidth/imgV.naturalHeight
	ratioW = $(this).width()/$(this).height()

	//사진크기가 디바이스 보다 클경우
	if(ratio>ratioW){
		$("#profile_shadow_img").width("100%");
		$("#profile_shadow_img").css("margin-top",($(window).height()/2-$("#profile_shadow_img").height()/2))

	//사진크기가 디바이스 보다 작을경우
	}else if(ratio<ratioW){
		$("#profile_shadow_img").height("100%");
		$("#profile_shadow_img").css("margin-left",($(window).width()/2-$("#profile_shadow_img").width()/2))
	//같을 경우
	}else{
		$("#profile_shadow_img").width("100%");
		$("#profile_shadow_img").height("100%");
	}
}

function profile_full_img_close(){
	$("#pop_profile").attr("data-position","fixed")
	$("#profile_shadow").css({"display":"none","overflow":""});
	$("#profile_shadow_img").css({"margin":"","width":"","height":""})
	$("body").css("overflow","")
}