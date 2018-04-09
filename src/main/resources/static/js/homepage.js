const toggleMenu = () => {
	const navButton = document.querySelector(".header__nav__button");
	const navMenu = document.querySelector(".header__nav");
	if (navButton) navButton.addEventListener('click', () =>{
		navMenu.classList.toggle("show__menu");
	});
};

toggleMenu()


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

      const data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     10],
          ['Commute',  2],
          ['Eat',      2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        const options = {
          // title: 'My Daily Activities',
          backgroundColor: { fill: 'transparent'},
          colors: [
            '#6A99CB',
            '#F27370',
            '#FA9856',
            '#ACBD86',
            '#F7B32D'
            ]
        };
     
       
      const chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      
google.visualization.events.addListener(chart, 'select', selectHandler);

function selectHandler() {
  var selection = chart.getSelection();
  const otherside = document.querySelector('.main__bottom__right');
  const value = data.getValue(selection[0].row || 0, selection[0].column || 0); 
  var t = document.createTextNode(value);
  otherside.replaceChild(t, otherside.childNodes[0]);
}
      }
      