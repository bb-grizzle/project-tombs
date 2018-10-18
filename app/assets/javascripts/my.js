var q08 = document.getElementById;

//q08: textbox interaction
function q08_focusOut() {
	var q08_val = document.getElementById("q08").value;
	var q08_textWrap = document.querySelectorAll('.text-wrap')[0];
	var iconBg = q08_textWrap.querySelectorAll(".q-icon-bg")[0];
	var icon = q08_textWrap.querySelectorAll(".q-icon")[0];
	var iconBorder = q08_textWrap.querySelectorAll(".icon-border")[0];

	if (q08_val.length > 0) {
		console.log("full");
		iconBg.style.boxShadow = "3px 3px 8px rgba(0,0,0,0.4)";
		icon.style.opacity = "1";
		iconBorder.style.opacity = "1";
		var styleElem = document.head.appendChild(document.createElement("style"));
	
	} else {
		console.log("empty");
		iconBg.style.boxShadow = "1px 1px 3px rgba(0,0,0,0.16)";
		icon.style.opacity = "0.5";
		icon_after_opacity = "0";
		var styleElem = document.head.appendChild(document.createElement("style"));
		styleElem.innerHTML = "#q08_icon_bg:after {opacity: 0;}";
		iconBorder.style.opacity = "0";
	}
}

//question array
var answer = new Array(8);
var user_name;
var birth_y;
var death_y;
var life_percent;
var death_text;
var death_age;
var illust = new Array(6);
var keyword = new Array(6);
var keywordText;

function submit() {
	var question = new Array(8);
	question[0] = document.querySelectorAll(".q01");
	for (var i = 1; i < 7; i++) {
		question[i] = document.getElementById('q0' + (i + 1)).getElementsByTagName('input');
	}
	question[7] = document.getElementById('q08');

	//	answer array
	//answer - q01
	answer = new Array(8);
	answer[0] = new Array(3);
	answer[0][0] = question[0][0].value;
	answer[0][1] = question[0][1].value;
	answer[0][2] = question[0][2].value;

	//answer - q02 ~ q07
	// keyword
	for (var i = 1; i < 7; i++) {
		for (var j = 0; j < question[i].length; j++) {
			if (question[i][j].checked) {
				answer[i] = question[i][j].value;
//				01. 선택 인풋태그의 형제 선택 label 선택
//				02. h5태그 값
				var t = question[i][j].nextSibling.nextSibling;
				keyword[i-1] = t.getElementsByTagName('h5')[0].innerText;
			}
		}
	}
	answer[7] = question[7].value;
	
	//find birth, death year 
	birth_y = parseInt(answer[0][1].substring(0, 4));
	death_y = birth_y + parseInt(answer[0][2])-1;
	
	var d = new Date();
	var n = d.getFullYear();
	var now_age = n - birth_y+1;
	death_age = answer[0][2];
	
//	save data
	user_name = answer[0][0];
	life_percent = parseInt(now_age / death_age * 100);
	death_text = answer[7];
	
}

function printData() {
	//print data
	console.log("USER----------");

	console.log("name : " + name);
	console.log("life_percent : " + life_percent);
	console.log("death_age : " + death_age);
	console.log("death_text : " + death_text);
	
	//illust data
	console.log("ILLUST----------");
	console.log("birth_y : " + birth_y);
	console.log("death_y : " + death_y);
	//answer 01 ~ 06
	for (var i = 0; i < 6; i++) {
		console.log(answer[i + 1]);
	}
	
	//keyword data
	var str = "";
	for(var i=0; i<keyword.length; i++){
		if(i==keyword.length-1){
			str = str + keyword[i];
		}else{
			str = str + keyword[i] + " / ";
		}
	}
	keywordText = str;
	console.log("keywordText : " + keywordText);
}

function drawIllust(){
	for (var i = 0; i < 6; i++) {
		illust[i] = answer[i + 1];
	}
	illust[6] = "q08";
	
	//text
	var profile_name = document.getElementById('profile-name');
	var profile_percent = document.getElementById('profile-percent');
	var profile_message = document.getElementById('profile-message');
	
	profile_name.innerText = user_name;
	profile_percent.innerText = life_percent + "%";
	profile_message.innerHTML = death_text;

	//illust
	var illust_wrap = document.getElementsByClassName('profile-illust')[0].getElementsByTagName('li');
	var ilust_birth_y = document.getElementById('birth_y');
	var ilust_death_y = document.getElementById('death_y');
	var profile_percent = document.getElementById('profile-percent');
	var percent_line = document.getElementById('profile-percent-line-active');
	

	for (var i = 0; i < 7; i++) {
		var icon_img = document.createElement("img");
		icon_img.setAttribute("src", "asset/svg/" + illust[i] + ".svg")
		illust_wrap[i + 1].appendChild(icon_img);
	}
	ilust_birth_y.innerHTML  = birth_y;
	ilust_death_y.innerHTML  = death_y;
	profile_percent.innerHTML = life_percent + "%";
	percent_line.style.width = life_percent + "%";
	
	//keyword
	var profile_keyword = document.getElementById('profile-keyword');
	profile_keyword.innerHTML = keywordText;
}


//print Area
function tombsPrint(){
	var backup = document.body.innerHTML;
}


