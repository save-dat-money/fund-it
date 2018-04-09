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

// describe("mocking ajax", function() {

	// beforeEach(function() {
 //      jasmine.Ajax.install();
 //    });

 //    afterEach(function() {
 //      jasmine.Ajax.uninstall();
 //    });


    // it("specifying response when you need it", function() {
    //   var doneFn = jasmine.createSpy("success");

    //  var xhr = new XMLHttpRequest();
    //   xhr.onreadystatechange = function(args) {
    //     if (this.readyState == this.DONE) {
    //       doneFn(this.responseText);
    //     }
    //   };

    //   xhr.open("GET", 'http://localhost:8080/account/1/funds');
    //   xhr.send();

    //   expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://localhost:8080/account/1/funds');
    //   expect(doneFn).not.toHaveBeenCalled



    //   	jasmine.Ajax.requests.mostRecent().response({

    //   					"status": 200,
    //   						 "contentType": 'text/plain',
    //   						 	 "responseText": 'awesome response'
    //   	});
    //   	 expect(doneFn).toHaveBeenCalledWith('awesome response');
  
  // })
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