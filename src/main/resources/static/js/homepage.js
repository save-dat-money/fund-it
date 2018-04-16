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
// const unassignedFundAmount = getUnassignedFundAmount();
// console.log(unassignedFundAmount);
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
        	fundsApp.selectedId = value;
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
// fundNameEditButton.innerHTML= "<img class='fund__name__edit__button__img'
// src='./images/pencil-icon.png'></img>"
        			fundNameEditButton.className = "fund__name__edit__button";
        			fundDetailsHeader.appendChild(fundNameText);
        			fundDetailsHeader.appendChild(fundNameEditButton);
        			
        			
        			const fundBalanceDiv = document.createElement('div');
        			fundBalanceDiv.className = "fund__details__balance";
        			const indvidualFundAmnt = fund.fundAmount
        			indvidualFundAmnt.className = "fundAmountBefore";
        			const fundBalanceAmount = createElement('h2', "Balance: " + indvidualFundAmnt);
// fundBalanceAmount.className = "fundAmountBefore";
        			const addToFundButton = createElement('button', "edit fund amount");
        			addToFundButton.id = "add__to__fund__button";
        			fundBalanceDiv.appendChild(fundBalanceAmount);
        			fundBalanceDiv.appendChild(addToFundButton);
        		// let addToFundButton =
				// document.querySelector('#add__to__fund__button') // figure
				// out what this does

        			let editFundAmntModal = document.querySelector(".edit-fund-amount-modal")
        			function toggleEditFundAmntModal() {
        			editFundAmntModal.classList.toggle("show-edit-fund-modal");   
        			}

        			addToFundButton.addEventListener("click", toggleEditFundAmntModal);

        			let closeButtonFundAmount = document.querySelector(".close-edit-fund-button")
        			closeButtonFundAmount.addEventListener("click", toggleEditFundAmntModal);

        			
        			
        			
        			const fundMileMarkerDiv = document.createElement('div');
        			fundMileMarkerDiv.className = "fund__details__mile__marker";
        			const mileMarkerAmountText = createElement('h2', "Mile Marker: ");
        			if (fund.mileMarker > 0) {
              			const mileMarkerAmount = createElement('h2', fund.mileMarker);
              			const editMileMarkerButton = createElement('button', "edit");
              			fundMileMarkerDiv.appendChild(mileMarkerAmountText);
              			fundMileMarkerDiv.appendChild(mileMarkerAmount);
              			fundMileMarkerDiv.appendChild(editMileMarkerButton);
              			editMileMarkerButton.className = "add__mile__button";
        			}else {
        				const addMileMarkerButton = createElement('button', "add");
        				addMileMarkerButton.className = "add__mile__button";
              			fundMileMarkerDiv.appendChild(mileMarkerAmountText);
        				fundMileMarkerDiv.appendChild(addMileMarkerButton);
        			}
        			
        			const mileMarkerProgressDiv = document.createElement('div');
        			const mileMarkerProgressText = createElement('h2', "Progress:");
        			const mileMarkerProgress = document.createElement('div');
        			mileMarkerProgress.className = "meter";
        			const progressWidth = fund.mileMarker/fund.fundAmount;
        			mileMarkerProgress.style.setProperty("--progress-width", progressWidth);
        			const mileMarkerProgressSpan = document.createElement('span');
        			mileMarkerProgress.appendChild(mileMarkerProgressSpan);
        			mileMarkerProgressDiv.appendChild(mileMarkerProgressText);
        			mileMarkerProgressDiv.appendChild(mileMarkerProgress);
        			
        			const bottomButtonDiv = document.createElement('div');
        			const backToOverviewButton = createElement('button', "Back");
        			const deleteFundButton = createElement('button', "Delete");
        			bottomButtonDiv.appendChild(backToOverviewButton);
        			bottomButtonDiv.appendChild(deleteFundButton);
        			
        			
        			fundDetails.appendChild(fundDetailsHeader);
        			fundDetails.appendChild(fundBalanceDiv);
        			fundDetails.appendChild(fundMileMarkerDiv);
        			fundDetails.appendChild(mileMarkerProgressDiv);
        			fundDetails.appendChild(bottomButtonDiv);
        			mainBottomRight.replaceChild(fundDetails, mainBottomRight.childNodes[1]);
        			addMileMarker();
        			
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
      
      const addMileMarker = () => {
    	  const addMileButton = document.querySelector('.add__mile__button');
    	  addMileButton.addEventListener('click', () => {
    		  const xhr3 = new XMLHttpRequest();
          	xhr3.onreadystatechange = function() {
          		if (xhr3.readyState === 4 && xhr3.status === 200) {
          			const fund = JSON.parse(xhr3.response);
          			
          			const mileMarkerDiv = document.querySelector(".fund__details__mile__marker");
          			const mileMarkerAmount = createElement('h2', fund.mileMarker);
          			mileMarkerDiv.replaceChild(mileMarkerAmount, mileMarkerDiv.childNodes[1]);
          			const editMileMarkerButton = createElement('button', "edit");
          			mileMarkerDiv.appendChild(editMileMarkerButton);

          			
          			
          		}
          	}
          	const fundId = fundsApp.selectedId;
          	xhr3.open('POST', 'http://localhost:8080/funds/' + fundId + '/addMile', true);
          	xhr3.send();
    	  });
      }
     
      
      function createElement(elem, textValue) {
    		const newElem = document.createElement(elem)
    		newElem.innerText = textValue

    		return newElem
    	}