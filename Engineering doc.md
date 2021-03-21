# Project Architecture & Code Set Up
In the repository, we have 2 branches “main” and “feat”. “feat” contains newly pushed work over old contents, and “main” contains the approved merged work after intensive testing. In either branch, the directory admin contains meeting notes, group rules, and videos; source contains all our source code; specs contains decisions, pipelines, and flowcharts we made.

To make a new change in our repo, you need to first take up an issue. Then someone can make a pull request to merge the new solution into the “feat” branch and close the issue. After code style reviewing and functionality testing, the change will be merged into “main” branch.


# Explanation of Code Layout
You can find a detailed explanation of our code layout in the following video:

https://youtu.be/R1THK_nSE7Y

# Testing Strategy & Coverage
For testing strategy, we extensively utilized manual testing instead of unit testing when examining our final product. We do manual testing for the following reasons:

1.	We produced very few quantitively scalable results during the process of timer functions.

2.	Most of the to-be-tested effects are very intuitive.

3.	This is a user experience focused project. Manual testing executed by human can give us a better idea of how our user feel about our development product, and how to improve it.

We have covered all of the quantitively scalable results and button executions in terms of testing. The only thing we did't cover is the page layout display inconsistency under certain browsers and devices. We look forward for the next team to improve in the future!


# CI/CD Pipeline
Our CI/CD pipeline mainly contains 2 parts: A code grammar validator and a code-review assigner.

When a teammate wants to make a new pull request into the “feat” branch, he/she needs to select a type of this request and give a brief description of the new code. After sending the pull request, the grammar checker will check whether the given code satisfies the HTML CSS and JavaScript Grammars.

The code-review assigner will assign 2 code reviewers Zhichao and Yunding to manually check whether the given code satisfies the coding style rules made inside our group, or whether the given code contains intuitive problems.

If the provided code passes both the validator and the manual check, code reviewers will push new changed to the “main” branch.


# Links
Link to published app:

https://jds-shirayuki.github.io/cse110-w21-group2/source/index.html

To save your time checking all functionalities, we have accelerated the completion time of each pomo. Have fun reviewing our project!
