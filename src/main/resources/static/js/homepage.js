window.fundsApp = {
		funds: [],
};

const toggleMenu = () => {
	const navButton = document.querySelector(".header__nav__button");
	const navMenu = document.querySelector(".header__nav");
	if (navButton) navButton.addEventListener('click', () =>{
		navMenu.classList.toggle("show__menu");
	});
};

toggleMenu()


const xhr1 = new XMLHttpRequest()
xhr1.onreadystatechange = function() {
	if (xhr1.readyState === 4 && xhr1.status === 200) {
		const fundsArray = JSON.parse(xhr1.response)
		fundsApp.funds = fundsArray;
		console.log(fundsArray);
		
		drawChart(fundsArray);
	 
	}
		
}

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback();
      function drawChart(fundsArray) {

      const data = new google.visualization.DataTable();
    	  data.addColumn('string', 'fundName');
          data.addColumn('number', 'fundAmount');
          console.log(fundsArray);
          fundsArray.forEach(function(item){
        	  data.addRows([
        		  [item.fundName, item.fundAmount]
        	  ])
          });
          console.log(fundsArray);
         
        const options = {
        	chartArea: {
        		width: '85%',
        		height: '85%',
        	},
        	legend: {position: 'none'},
        	backgroundColor: { fill: 'transparent'},
        	colors: [
           		'#6A99CB',
            	'#FA9856',
            	'#F27370',
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
//The event listener is so that it reloads repeatedly
window.addEventListener('load', evt => {
      xhr1.open('GET', 'http://localhost:8080/account/1/funds', true)
      xhr1.send()
})