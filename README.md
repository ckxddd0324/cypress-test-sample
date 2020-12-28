# cypress-test-sample

### Cypress Test example

- This is a repo for cypress automation test framework.
- Base url is https://www.docker.com/
- To start running the cypress test locally, please look at the instruction

### Instruction

1. git clone this repo
2. run _npm install_ in terminal
3. to run the test and export the result html file, run _cypress.test_
4. now you should see the terminal and a cypress chrome browser start running the test
5. after 3 tests are completed, it will generate the mocha report jsons
6. next step is merging all the mochawesome json to out pout and generate a mocha result html
7. the command also open up chrome with the generated mocha result html

Questions
Bug Report!
Q: What is an excellent bug report you created at a previous company which was of a high priority, high severity in a build about to be deployed to production? (Please write the bug report below)

A: This bug report was included the step to reproduce, build version, env of the issue was found and env of the issue for reproduce. Also including data that to reproduce the issue, screenshot of the bug, or video of how to reproduce the issue. If it is possible, i will include user information, such as user name so the engineer can impersonate the user to reproduce the issue on staging env. Or provide information such as in the code or database.

Bug Report Follow up
Q: For the created bug report example you created in the previous question, what happened and how did you navigate the bug lifecycle, bug discussion?

A: So once the engineer has started investigate the issue or start the developing to fix the issue. I will start looking into other ways to reproduce the issue, maybe it can be reproduce the same issue with different steps or setup. And next step I will start looking into the existing autoamtion test cases, if we have missed test to coverage this issue or if the existing test does not able to catch this issue. If there is no test coverage for this issue, I will look into ways to automation this, either on API or UI level. Even explore the option of asking the engineer to do it unit test level. If the existing test fails to catch the issue, will look into why and fix the test to cover this issue. Last step, once the enginner has the fix to the issue, I will go into the test branch to manaully to test the issue, try to reproduce with the same step and reproduce the step in different step. Then run the automation test to check if the test able to catch issue and pass on the fix. Last it is to release the fixed version to production. Document the issue in the retro and checklist if this issue since it is high severity and high priority.
