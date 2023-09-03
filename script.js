const dateObj = new Date();

const year = String(dateObj.getFullYear());
const month = String(dateObj.getMonth() + 1).padStart(2, "0");
const day = String(dateObj.getDate()).padStart(2, "0");

function val() {
  const uDate = document.getElementById("UserDate").value;
  const uMonth = document.getElementById("UserMonth").value;
  const uYear = document.getElementById("UserYear").value;

  if (
    uYear > year ||
    uMonth > 12 ||
    uDate > 31 ||
    (uYear == year && uMonth > month)
  ) {
    var nodeList = document.querySelectorAll(".text, .InpField");
    //    var nodeList2 = document.querySelectorAll("InpField");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "hsl(0, 100%, 67%)";
      nodeList[i].style.border = "1px solid hsl(0, 100%, 67%)";
    }
  } else {
    var nodeList = document.querySelectorAll(".text, .InpField");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "hsl(0, 1%, 44%)";
      nodeList[i].style.border = "1px solid hsl(0, 1%, 44%)";
    }
    Ans();
  }
  function Ans() {
    document.querySelector(".calAns2").innerHTML = Math.abs(day - uDate);
    document.querySelector(".calAns1").innerHTML = Math.abs(month - uMonth);
    document.querySelector(".calAns").innerHTML = year - uYear;
  }
}
