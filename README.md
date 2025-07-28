**\*To Run React app locally\***


Pre-Requisite: vscode, node.js installed on the system

Set Env variables



1\. Clone Repo (https://github.com/asurve2804/react_app.git) and open in vscode

2\. cd react-login-crud-demo

3\. npm install

4\. npm start

5\. site will open in localhost/port





**\*To Run Cypress Automation Framework\***


Pre-Requisite: vscode, node.js installed on the system

Set Env variables



Use the above localhost url in cypress.config.js->url:""

1\. Clone Repo (https://github.com/asurve2804/REMWASTE.git) and open in vscode

2\. npm install

3\. To run cypress test in headless: npx cypress run --spec "spec path"

 	For our project you can use this command:

 	a) npx cypress run --spec "cypress/e2e/BDD/login.feature"

 	b) npx cypress run --spec "cypress/e2e/BDD/homePage.feature"

 

 	to run both the apecs use

 	npx cypress run

4\. To run cypress in headed mode

 	a) npx cypress open

 	b) Select E2E Testing

 	c) Select browser to run test

 	d) Select test to run



**\*To run REST Assured Framework\***



Pre-Requisite: intellij, java, jdk installed on the system

Set Env variables



	a) Clone Repo (https://github.com/asurve2804/REMWASTE_Api.git)

    b) Open in Intellij

    c) Navigate to src/test/java open CrudTest

	d) Right click on file and run

