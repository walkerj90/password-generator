 # Password-Generator-03

 This project is an application made primarily in javascript to generate a quasi-random password for the user to use in a professional environment from an HTML page.

 To use this application you can follow the deployment link. Or download the source files and use it.

 ## About this Project and Getting Started
 This application has been deployed to github pages; the following link will take you there. I've also included the repository link below as well.
 Deployed Github Page: https://walkerj90.github.io/password-generator/index.html
 Repository: https://github.com/walkerj90/password-generator.git

 ## Prerequisites
 To use this application as an HTML. All you need is a browser.

 ## Summary 
 This project uses javascript as well as HTML and CSS to create a random password generator. After prompt data is collected a quasi-random password will be generated and put into the text area.

 ## Features
 A button that starts the data collection through prompt.

 A text area that displays the password with the users criteria selected in a quasi-random way.

 ### To Execute Application
If you downloaded the source, make sure all of the files are in the same file directory.

If you clicked the link to the github page it should open in your browser automatically.

### Script Features
* An event listener (onclick)
    * will prompt the user for input between 8-128
    * will validate that the input is a number within range, or is a number
    * if not will return an error to select a number in the range
    * then uses the input to determine the combinations of letters, characters & numbers 
      used.
    * assigns values to the variables using arrays for character, number or alphabet
* A for loop will loop through the prompt until it reaches the number for the password length  
* A password variable takes the value from the for loop, and converts it to a string 
* The string value then populates into the text area for the user using a UserInput function for the variables they have chosen.
* posts into the text box the generated password for the user.