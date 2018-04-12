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

toggleMenu();


const xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function() {
	if (xhr1.readyState === 4 && xhr1.status === 200) {
		const fundsArray = JSON.parse(xhr1.response);
		fundsApp.funds = fundsArray;
		console.log(fundsArray);
		
		drawChart(fundsApp.funds);
	 
	}
		
};

google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback();
      function drawChart(fundsArray) {

      const data = new google.visualization.DataTable();
    	  data.addColumn('string', 'fundName');
          data.addColumn('number', 'fundAmount');
          data.addColumn('number', 'fundId');
          console.log(fundsArray);
          fundsArray.forEach(function(item){
        	  data.addRows([
        		  [item.fundName, item.fundAmount, item.id]
        	  ]);
          });
          console.log(fundsArray);
         
        const options = {
        	chartArea: {
        		width: '85%',
        		height: '85%',
        	},
        	legend: {position: 'none'},
        	backgroundColor: { 
        		fill: 'transparent'},
        	colors: [
           		'#6A99CB',
            	'#FA9856',
            	'#F27370',
            	'#ACBD86',
            	'#F7B32D'
            ]
        };
     
       
      const chart = new google.visualization.PieChart(document.getElementById('piechart'));
      google.visualization.events.addListener(chart, 'select', selectHandler);

        chart.draw(data, options);
      
        function selectHandler() {
        	var selection = chart.getSelection();
        	console.log(selection);
        	if (!selection.length) return;
        	const value = data.getValue(selection[0].row || 0, 2);
        	const fundDetails = document.createElement('div');
        	fundDetails.className = "fund__details";
        	const mainBottomRight = document.querySelector('.main__bottom__right');
        	
        	
        	
        	const xhr2 = new XMLHttpRequest();
        	xhr2.onreadystatechange = function() {
        		if (xhr2.readyState === 4 && xhr2.status === 200) {
        			const fund = JSON.parse(xhr2.response);
        			
        			const fundDetailsHeader = document.createElement('div');
        			fundDetailsHeader.className = "fund__details__header";
        			const fundNameText = createElement('p', fund.fundName);
        			fundNameText.className = "fund__details__header__text";
        			const fundNameEditButton = createElement('button', "edit");
        			fundDetailsHeader.appendChild(fundNameText);
        			fundDetailsHeader.appendChild(fundNameEditButton);
        			
        			
        			const fundBalanceDiv = document.createElement('div');
        			fundBalanceDiv.className = "fund__details__balance";
        			const fundBalanceAmount = createElement('h2', "Balance: " + fund.fundAmount);
        			const addToFundButton = createElement('button', "+");
        			const removeFromFundButton = createElement('button', "-"); 
        			fundBalanceDiv.appendChild(fundBalanceAmount);
        			fundBalanceDiv.appendChild(addToFundButton);
        			fundBalanceDiv.appendChild(removeFromFundButton);
        			
        			const fundMileMarkerDiv = document.createElement('div');
        			const mileMarkerAmount = createElement('h2', "Mile Marker: 2000");
        			const addToMileMarkerButton = createElement('button', "+");
        			const removeFromMileMarkerButton = createElement('button', "-"); 
        			fundMileMarkerDiv.appendChild(mileMarkerAmount);
        			fundMileMarkerDiv.appendChild(addToMileMarkerButton);
        			fundMileMarkerDiv.appendChild(removeFromMileMarkerButton);
        			
        			const mileMarkerProgress = document.createElement('div');
        			mileMarkerProgress.className = "meter";
        			const mileMarkerProgressSpan = document.createElement('span');
        			mileMarkerProgress.appendChild(mileMarkerProgressSpan);
        			
        			
        			fundDetails.appendChild(fundDetailsHeader);
        			fundDetails.appendChild(fundBalanceDiv);
        			fundDetails.appendChild(fundMileMarkerDiv);
        			fundDetails.appendChild(mileMarkerProgress);
        			mainBottomRight.replaceChild(fundDetails, mainBottomRight.childNodes[1]);
        			
        			
        		}
        	};
        	
        	xhr2.open('GET', 'http://localhost:8080/funds/' + value, true);
        	xhr2.send();
        }
      } 
      window.addEventListener('load', evt => {
    	  xhr1.open('GET', 'http://localhost:8080/account/1/funds', true);
    	  xhr1.send();
      });
      
      function createElement(elem, textValue) {
    		const newElem = document.createElement(elem)
    		newElem.innerText = textValue

    		return newElem
    	}