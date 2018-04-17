window.fundsApp = {
  funds: [],
};
fundsApp.newFundForm = document.querySelector(".fund-input-form");

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

let closeButtonMilesStone = document.querySelector('.close-button-miles-stone')
                    
closeButtonMilesStone.addEventListener('click', toggleModalMilesStone)

function toggleModalMilesStone(){
    let modalMilesStone = document.querySelector('.modal-progess')
    modalMilesStone.classList.toggle("show-modal-miles-stone");

}








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

        // fundNameEditButton.innerHTML= "<img
		// class='fund__name__edit__button__img'
		// src='./images/pencil-icon.png'></img>"
        fundNameEditButton.className = "fund__name__edit__button";
        fundDetailsHeader.appendChild(fundNameText);
        fundDetailsHeader.appendChild(fundNameEditButton);

        const fundBalanceDiv = document.createElement('div');
		fundBalanceDiv.className = "fund__details__balance";
		const indvidualFundAmnt = fund.fundAmount.toFixed(2);
		
		const fundBalanceAmount = createElement('h2', "Balance: " + indvidualFundAmnt);
		fundBalanceAmount.id = "fundAmountBefore";
		const addToFundButton = createElement('button', "+");
		addToFundButton.id = "add__to__fund__button";
		fundBalanceDiv.appendChild(fundBalanceAmount);

		fundBalanceDiv.appendChild(addToFundButton);
		const decrFundButton = createElement('button', "-");
		decrFundButton.id = "remove__from__fund__button";
		fundBalanceDiv.appendChild(decrFundButton);
		
	    const fundDetailsUnassignedFundsDiv = document.createElement('div');
		const unAsAmnt = createElement('h3', "Unassigned Funds Available: " + fund.account.unassignedFundAmount.toFixed(2));
		fundDetailsUnassignedFundsDiv.appendChild(unAsAmnt);
		fundDetailsUnassignedFundsDiv.id = "unassigned_funds_in_fund";
		
		let editFundAmntModal = document.querySelector(".edit-fund-amount-modal")
		let decrFundAmntModal = document.querySelector(".decrease-fund-amount-modal")
        			
        			function toggleEditFundAmntModal() {
        				editFundAmntModal.classList.toggle("show-edit-fund-modal");   
        			}

        			function toggleDecrFundAmntModal() {
            			decrFundAmntModal.classList.toggle("show-edit-fund-modal");   
            		}

        			addToFundButton.addEventListener("click", toggleEditFundAmntModal);
        			decrFundButton.addEventListener("click", toggleDecrFundAmntModal);

        			let closeButtonFundAmount = document.querySelector(".close-edit-fund-button")
        			closeButtonFundAmount.addEventListener("click", toggleEditFundAmntModal);

        			let closeButtonDecrFundAmount = document.querySelector(".close-decr-fund-button")
        			closeButtonDecrFundAmount.addEventListener("click", toggleDecrFundAmntModal);


                    const fundMileMarkerDiv = document.createElement('div');
                    fundMileMarkerDiv.className = "fund__details__mile__marker";

                    const mileMarkerAmount = createElement('h2', "Mile Marker: " + fund.mileMarker);
                    const addToMileMarkerButton = createElement('button', "edit");
                    addToMileMarkerButton.className = "add__to__mile__button";
                    fundMileMarkerDiv.appendChild(mileMarkerAmount);
                    fundMileMarkerDiv.appendChild(addToMileMarkerButton);

                    const mileMarkerProgressDiv = document.createElement('div');
                    const mileMarkerProgressText = createElement('h2', "Progress:");
                    const mileMarkerProgress = document.createElement('div');
                    mileMarkerProgress.className = "meter";
                    const mileMarkerProgressSpan = document.createElement('span');
                    mileMarkerProgress.appendChild(mileMarkerProgressSpan);
                    mileMarkerProgressDiv.appendChild(mileMarkerProgressText);
                    mileMarkerProgressDiv.appendChild(mileMarkerProgress);

                    const bottomButtonDiv = document.createElement('div');
                    const backToOverviewButton = createElement('button', "Back");
                    backToOverviewButton.className = "back-to-overview";
                    const deleteFundButton = createElement('button', "Delete");
                    deleteFundButton.className = "delete-fund-button";
                    bottomButtonDiv.appendChild(backToOverviewButton);
                    bottomButtonDiv.appendChild(deleteFundButton);


                    fundDetails.appendChild(fundDetailsHeader);
                    fundDetails.appendChild(fundBalanceDiv);
                    fundDetails.appendChild(fundDetailsUnassignedFundsDiv);
                    fundDetails.appendChild(fundMileMarkerDiv);
                    fundDetails.appendChild(mileMarkerProgressDiv);
                    fundDetails.appendChild(bottomButtonDiv);
                    mainBottomRight.replaceChild(fundDetails, mainBottomRight.childNodes[1]);
                    backToOverview();
                    addMileMarker();
                    removeFund();

                    // modal functionality is here
                    

                    const modalProgressContainer = document.querySelector('.modal-content-progress')
                    const lastChild = modalProgressContainer.lastElementChild
                    lastChild.replaceWith(mileMarkerProgressDiv)

                    let milesStoneEditButton = document.querySelector('.add__to__mile__button')

                    let modalMilesStone = document.querySelector('.modal-progess')
                    milesStoneEditButton.addEventListener('click',toggleModalMilesStone)

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
   	 	
    	let addMileButton;
   	 if (addMileButton = document.querySelector('.edit-milestone-button'))
   	  addMileButton.addEventListener('click', (e) => {
   		  e.preventDefault();
   		  const xhr3 = new XMLHttpRequest();
         	xhr3.onreadystatechange = function() {
         		if (xhr3.readyState === 4 && xhr3.status === 200) {
         			const fund = JSON.parse(xhr3.response);
         			const mileMarkerDiv = document.querySelector(".fund__details__mile__marker");
                    const mileMarkerAmount = createElement('h2', "Mile Marker: " + fund.mileMarker);
         			mileMarkerDiv.replaceChild(mileMarkerAmount, mileMarkerDiv.childNodes[0]);
//     				editMileMarkerButton = createElement('button', "edit");
//     				editMileMarkerButton.className = "edit__mile__button";
//     				mileMarkerDiv.appendChild(editMileMarkerButton);
         			addMileButton.toggleModalMilesStone;
         			const mileMarkerProgress = document.querySelector(".meter");
         			const progressWidth = (fund.fundAmount/fund.mileMarker)*100;
       			console.log(progressWidth);
       			mileMarkerProgress.style.setProperty("--progress-width", progressWidth + "%");

         			
         			
         		}
         	}
         	const fundId = fundsApp.selectedId;
         	const mileMarkerEditNumber = document.querySelector('#mileStone').value;
         	
         	xhr3.open('POST', 'http://localhost:8080/funds/' + fundId + '/addMile/' + mileMarkerEditNumber , true);
         	xhr3.send();
   	  });
     }

    function createElement(elem, textValue) {
      const newElem = document.createElement(elem)
      newElem.innerText = textValue

      return newElem
  }


  



  

