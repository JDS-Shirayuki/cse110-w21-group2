# End Stage Develop & Test Decision Records

## Context and Problem Statement

This decision is made very close to the end of quarter. We finished the basic features of our pomo timer with simplified layout design.
What strategy should we choose to accomplish the most of our unifinished plans while securing the project quality?

## Considered Options

* [Basic features & test] - We don't implement any new features anymore and test our finished basic features of the timer intensively.
* [New features prioritized] - Do planned extra features (settings section, multilaguage, user history, usage analyze...) as much as possible with minimal to no testing.
* [New features & test] - Implement extra features in order of simplicity (settings section, multilaguage, user history, usage analyze...). Test intensively after every new feature.

## Decision Outcome

Chosen option: "New features & test", because

* Testing of current features' functionalities should not take so long since the JS logic is simple.
* So we still get some time to do new features.
* Planned new features can greatly improve user experience.
* Planned new features do not rely on each other too much. Difficulties in one feature won't block the development of the other feature.
* Plenty of dummy features on the Internet are there for us to study and simulate (honestly, absolutly not copying!).
* Still, team project may be graded on feature complexity. More complex features might improve the final grade of our team members.
* Any new feature added needs to be performed perfectly. If we do many new features with certian faults, the new features lose its meaning to improve user experience. This is the reason why we still insist testing after new feature even time is pretty constrained.
