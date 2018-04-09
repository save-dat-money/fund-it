// // // //my javascript will go here 
describe('appendElement', function() {
    it('returns added element to Header', function() {
    	const bodyTest = document.createElement('h1')
    	const testCreated = createElement('p','I am here')
      appendElement(bodyTest, testCreated)
    	const testToEqual = bodyTest

    	const toAddResult = document.createElement('h1')
    	const toCreate = document.createElement('p')
    	const toCreateText = document.createTextNode('I am here')	
    	toCreate.appendChild(toCreateText)

    	toAddResult.appendChild(toCreate)
    	const result = toAddResult

    	expect(testToEqual).toEqual(result)

    });
});

describe('addFund', function() {
  beforeEach(function(){
    let mockHtml = `<section class="main__bottom__right">
          <span class="fundContainer">
            <h3>Funds:</h3>
          </span>
          <article class="fund-input-form">
            <h3>Add Fund:</h3>

            <form method="POST">
              <div>
                <label>Fund:</label> <input id="fund_input" type="text" id="fundName" required="true" />
              </div>
              <div>
                <input type="button" class="fund-add-button"  value="Submit"></input>
              </div>
            </form>

          </article>
        </section>`
        mockDocument = document.createElement('div')
        mockDocument.innerHTML = mockHtml
        document.body.appendChild(mockDocument)

    // let dummyElement = document.createElement('div');
    // document.getElementById = jasmine.createSpy('HTML Element').andReturn(dummyElement);

  })

  it('adds a new fund', function () {
    spyOn(window, 'addFund').and.callThrough()


    createAddFundButton()
    addFundButton = document.querySelector('.fund-add-button')
    addFundButton.click()
    
    expect(window.addFund).toHaveBeenCalled()
  })
})

// beforeEach(function() {
//   // spyOn(XMLHttpRequest.prototype, 'open').andCallThrough(); // Jasmine 1.x
//   spyOn(XMLHttpRequest.prototype, 'open').and.callThrough(); // Jasmine 2.x
//   spyOn(XMLHttpRequest.prototype, 'send');
// });



// it('boo yaah', function() {
//   podcast.load_feed('http://localhost:8080/account/1/funds');

//   expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
// });
// describe('mocking ajax', function() {

// 	beforeEach(function() {
//       jasmine.Ajax.install();
//     });

//     afterEach(function() {
//       jasmine.Ajax.uninstall();
//     });

//     //Trigger ajax code
//   funds.search(' ', {
//     onSuccess: onSuccess,
//     onFailure: onFailure
// });

// request = jasmine.Ajax.requests.mostRecent();


//     it('specifying response when you need it', function() {
//       var doneFn = jasmine.createSpy('success');
//       jasmine.Ajax.withMock(function() {
//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function(args) {
//         if (this.readyState == this.DONE) {
//           doneFn(this.responseText);
//         }
//       };

//       xhr.open('GET', 'http://localhost:8080/account/1/funds');
//       xhr.send();

//       expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://localhost:8080/account/1/funds');
//       expect(doneFn).not.toHaveBeenCalled



//       	jasmine.Ajax.requests.mostRecent().response({

//       					"status": 200,
//       						 "contentType": 'text/plain',
//       						 	 "responseText": 'awesome response'
//       	});
//       	 expect(doneFn).toHaveBeenCalledWith('awesome response');
//     });
//   });
// });

// function createElement(elem, textValue) {
//        const newElem = document.createElement(elem)
//        newElem.innerText = textValue

//        return newElem
//      }

//      function appendElement(parent, child) {
//        parent.appendChild(child)
//      }

     // const bodyTest = document.createElement('h1')
     //   const testCreated = createElementNow('p','I am here')
     // appendElement(bodyTest,testCreated)
     // const testToEqual = bodyTest

     //   const toAddResult = document.createElement('h1')
     //   const toCreate = document.createElement('p')
     //   const toCreateText = document.createTextNode('I am here')
     //   toCreate.appendChild(toCreateText)
     // toAddResult.appendChild(toCreate)

     //   const result = toAddResult

     //   expect(testToEqual).toEqual(result)