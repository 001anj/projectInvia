# projectInvia
## Automated Ui test using TestCafe (https://www.ab-in-den-urlaub.de/)
 
### Steps for running the test case 
1. Create a repository in Github named "projectInvia" and clone it to your local directory
2. Install node.js.
3. Install the respective latest version of dependencies mentioned in package.json file.
4. Create a json file by running the command "npm init" in cmd while in same project directory
5. Change the line scripts with following line "test": "testcafe chrome:headless Tests/**/* -e --reporter allure" 
6. Create a folder "Tests" inside your project directory and copy the test files from repo in it.
7. Run the test locally using commandline while being on same directory i.e. npm test

## Test report with Allure.
1. Run two commands after execution of test to view allure report
 a) allure generate allure/allure-results --clean 
 b) allure open allure/allure-report
