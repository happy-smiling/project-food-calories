var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);



function toBMIProgram(numberWeight,numberHeight){
    document.getElementById('box-ResultBMI').style.display = 'block';
    let value = numberWeight / ((numberHeight / 100) ** 2)
    document.getElementById('resultBmi').innerHTML = 'BMI คือ: '+ value.toFixed(2)

    if (value.toFixed(2) >= 40) {
        document.getElementById('resultMessage').innerHTML = "ผลลัพธ์ของคุณ คือ โรคอ้วนขั้นสูงสุด"
    } else if (value.toFixed(2) > 34 & value.toFixed(2) < 40) {
        document.getElementById('resultMessage').innerHTML = "ผลลัพธ์ของคุณ คือ โรคอ้วนระดับ 2 คุณเสี่ยงต่อการเกิดโรคที่มากับความอ้วน หากคุณมีเส้นรอบเอวมากกว่าเกณฑ์ปกติคุณจะเสี่ยงต่อการเกิดโรคสูง คุณต้องควบคุมอาหาร และออกกำลังกายอย่างจริงจัง"
    } else if (value.toFixed(2) > 28.4 & value.toFixed(2) < 35) {
        document.getElementById('resultMessage').innerHTML = "ผลลัพธ์ของคุณ คือ โรคอ้วนระดับ 1 และหากคุณมีเส้นรอบเอวมากกว่า 90 ซม.(ชาย) 80 ซม.(หญิง) คุณจะมีโอกาศเกิดโรคความดัน เบาหวานสูง จำเป็นต้องควบคุมอาหาร และออกกำลังกาย"
    } else if (value.toFixed(2) > 23.5 & value.toFixed(2) < 28.5) {
        document.getElementById('resultMessage').innerHTML = "ผลลัพธ์ของคุณ คือ น้ำหนักเกิน หากคุณมีกรรมพันธ์เป็นโรคเบาหวานหรือไขมันในเลือดสูงต้องพยายามลดน้ำหนักให้ดัชนีมวลกายต่ำกว่า 23"
    } else if (value.toFixed(2) > 18.4 & value.toFixed(2) < 23.5) {
        document.getElementById('resultMessage').innerHTML = "ผลลัพธ์ของคุณ คือ น้ำหนักปกติ และมีปริมาณไขมันอยู่ในเกณฑ์ปกติ มักจะไม่ค่อยมีโรคร้าย อุบัติการณ์ของโรคเบาหวาน ความดันโลหิตสูงต่ำกว่าผู้ที่อ้วนกว่านี้"
    } else if (value.toFixed(2) < 18.5) {
        document.getElementById('resultMessage').innerHTML = "ผลลัพธ์ของคุณ คือ น้ำหนักน้อยเกินไป ซึ่งอาจจะเกิดจากนักกีฬาที่ออกกำลังกายมาก และได้รับสารอาหารไม่เพียงพอ วิธีแก้ไขต้องรับประทานอาหารที่มีคุณภาพ และมีปริมาณพลังงานเพียงพอ และออกกำลังกายอย่างเหมาะสม"
    } else {
        document.getElementById('resultBmi').innerHTML = ""
        document.getElementById('resultMessage').innerHTML = ""
    }
}

function CleanDataBMI(){
    document.getElementById('inputWeight').value = ''; 
    document.getElementById('inputHeight').value = '';
    document.getElementById('box-ResultBMI').style.display = 'none';
}

function toBMRProgram(optionGender,numberWeight,numberHeight,numberAge,ActivityExercise){

    document.getElementById('box-ResultBMR').style.display = 'block';
    let resultBMR = 0
    let calculatorTDEE = 0 

    if (optionGender == "Boy"){
        resultBMR = 66 + (13.7 * numberWeight)+ (5 * numberHeight) - (6.8 * numberAge);
    } else if (optionGender == "Girl"){
        resultBMR = 665 + (9.6 * numberWeight) + (1.8 * numberHeight) - (4.7 * numberAge);
    } else {
        resultBMR = ""
    }

    document.getElementById('resultBMR').innerHTML = 'BMR (Basal Metabolic Rate) <br> พลังงานที่จำเป็นพื้นฐานในการมีชีวิต คือ '+ resultBMR.toFixed(0) + ' กิโลแคลอรี่'

    if (ActivityExercise == "Exercise01"){
        calculatorTDEE = resultBMR.toFixed(0) * 1.2
    } else if (ActivityExercise == "Exercise02"){
        calculatorTDEE = resultBMR.toFixed(0) * 1.375
    } else if (ActivityExercise == "Exercise03"){
        calculatorTDEE = resultBMR.toFixed(0) * 1.55
    } else if (ActivityExercise == "Exercise04"){
        calculatorTDEE = resultBMR.toFixed(0) * 1.725
    } else if (ActivityExercise == "Exercise05"){
        calculatorTDEE = resultBMR.toFixed(0) * 1.9
    } else {
        calculatorTDEE = ""
    }

    document.getElementById('resultTDEE').innerHTML = 'TDEE (Total Daily Energy Expenditure) <br> พลังงานที่คุณใช้ในแต่ละวัน คือ '+ calculatorTDEE.toFixed(0) + ' กิโลแคลอรี่'
}


function CleanDataBMR(){
    document.getElementById('selectGender').value = "เลือกเพศ";
    document.getElementById('inputYourWeight').value = ''; 
    document.getElementById('inputYourHeight').value = '';
    document.getElementById('inputYourAge').value = '';
    document.getElementById('box-ResultBMR').style.display = 'none';
}