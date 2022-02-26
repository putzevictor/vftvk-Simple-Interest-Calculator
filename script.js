
function compute()
{

  am = document.getElementById("amount").value;
  ra = document.getElementById("rate").value;
  ye = document.getElementById("years").value;
  const date = new Date();
  const year = date.getFullYear() + Number(ye);

  document.getElementById("print").innerHTML = "If you deposit <mark>"+am+"</mark>,<br/>at an interest rate of <mark>"+ra+"%</mark>.<br/>You will receive an amount of <mark>"+(am * (ra/100) * ye)+"</mark>,<br/>In the year <mark>"+year+"</mark>";

}
