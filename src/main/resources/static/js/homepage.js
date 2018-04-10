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
		const res = JSON.parse(xhr1.response)
		
		drawChart(res)
	}
		
}

google.charts.load('current', {'packages':['corechart']});

      function drawChart(res) {

      const data = new google.visualization.DataTable();
    	  data.addColumn('string', 'fundName');
          data.addColumn('number', 'fundAmount');
          console.log(res);
          res.forEach(function(item){
        	  data.addRows([
        		  [item.fundName, item.fundAmount]
        	  ])
          });
        const options = {
        	chartArea: {
        		width: '85%',
        		height: '85%',
        	},
        	legend: {position: 'none'},
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
      
      xhr1.open('GET', 'http://localhost:8080/account/1/funds', true)
      xhr1.send()