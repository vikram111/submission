###### Problem Statement
Create a program that prints the numbers from 50 to 500. For multiples of three print ‘Breakfast’ instead of the number and for multiples of five print ‘Lunch’. 
For numbers which are multiples of both three and five print ‘Brunch’.

###### Solution
The solution aims to solve the problem in a generic way by providing a function runMainClassifier that takes in a dictionary input called params.

The params objects has the following required attributes <br/>
startNum: _integer_, <br/>
endNum: _integer_, <br/>
factor1: _integer_, <br/>
factor2: _integer_, <br/>
classification1: _string_, <br/>
classification2: _string_ , <br/>
combinedClassification: _string_ <br/>

if the number is a multiple of factor1 the output is classification1, multiple of factor2 output is classification2, multiple of factor1 and factor2 then the output is combinedClassification.


###### Run instructions
_npm install_ <br/>
_npm start_

###### Test instructions
Mocha.js has been used as the test framework

Command: <br/>
_npm test_
