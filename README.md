#Updater HW

**Why did you choose this testing strategy to test the above scenario?**
It was the simplest and most straightforward way to complete the requested scenario in the shortest amount of time.

**Why did you choose the particular framework you used? Are there drawbacks to it?**
I chose Cypress because it is what I am most familiar with and it allowed me to create a solution in just a few hours while on vacation. 
There are some drawbacks for everything, sure... but I think Cypress made this very simple to set up and get working.

**What is your strategy to integrate this to a CI/CD pipeline?**
It would be to set up a github action/workflow to run this test any time changes are pushed to it. The workflow would be: 
1. Trigger Job
2. Check out Repo
3. App Compile/Run
3. Cypress Run
4. Post Checkout Clean Up and Reporting

**How does your approach scale as the number of test cases grow and how easy will
it be to maintain as feature and business requirements change?**
The approach would be much different as with more test cases comes more repetitive actions. I would begin by creating customized
Cypress commands to comply with the DRY development philosophy. This shift would make it much easier to use and add to as
requirements shift.

**What additional testing approaches/methodologies would you use given the time
and resources?**
I would have definately added more XHR and promise based waits to reduce flakeyness. I would have also make use of APIs requests
to further improve coverage and efficiency. I would have added more relevant or valid assertions.
