# cypress-test-sample

### Cypress Test example

- This is a repo for cypress automation test framework.
- Base url is https://www.docker.com/
- To start running the cypress test locally, please look at the instruction

### Instruction
1. git clone this repo
2. run *npm install* in terminal
3. to run the test and export the result html file, run *cypress.test*
4. now you should see the terminal and a cypress chrome browser start running the test
5. after 3 tests are completed, it will generate the mocha report jsons
6. next step is merging all the mochawesome json to out pout and generate a mocha result html
7. the command also open up chrome with the generated mocha result html
