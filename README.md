# projectInvia
## Automated Ui test using TestCafe (https://www.ab-in-den-urlaub.de/)
 
### Steps for running the test case 
1. Create a repository in Github named "projectInvia" and clone it to your local directory
2. Install node.js.
3. Install the respective latest version of dependencies mentioned in package.json file.
4. Create a json file by running the command "npm init" in cmd while in same project directory
5. Change the line scripts with following line "test": "testcafe chrome Tests/**/*" 
6. Create a folder "Tests" inside your project directory and copy the test files from repo in it.
7. Push the changes to GitHub (exclude node_modules files).

### Integration with CircleCI
1. Create a folder .circleci with file config.yml. For more information (https://devexpress.github.io/testcafe/documentation/continuous-integration/circleci.html)
2. Replace the text of config.yml with mentioned in this repository.
3. Log in to CircleCI using your GitHub account. If this is the first time you are using CircleCI, you will start from an empty workspace. Add the following project "projectInvia" in it.
4. Click on button "start building" to trigger a build.
5. Check the test results.
