## Sprint Review Meeting  03/09/2021
# Attendance: Yichen Yang, Zhichao Liu, Guo Chen, Hang Wang, Haoyang Xie, Yunding Wu (all members were present)
# Time: 8:00 PM, U.S. West Coast Time
# Medium: Zoom Meeting
# Meeting Type: Sprint Review

Process review:
Feature/Layout Planning
Design features and layouts coherent to the main (and only) goal of the timer: keep user focused, prevent any distraction
Evaluate whether the current features/layouts are effective. If so, decide whether to modify the features/layouts or remove them completely
Product manager (Yichen Yang) suggests an initial set of new features. Other members add suggestions on features and point out their concerns
User interface designer (Guo Chen) makes a brief sketch of the page layouts
Members go through the temporary plan to check the validity of design logics and make a brief evaluation on the user experience. If everything goes green, the plan is finalized
Assignment of work
Product manager assigns work based on members’ roles and abilities
Members can also acquire their favorable tasks and reject the unwanted ones after initial assignment
Coding
Browse the Internet for dummies of desired features
Or, study the html/css/js components of a published website through browsers
Check definitions and official documents of mentioned techniques in examples
Code only based on the definitions and official documents
Local Testing/Debugging
Each member runs developing code on local IDE and mock rest api server
Write unit tests to check code logic
Test finished pages on different devices/browsers/screen resolutions
Initiate personal debugging if any issue occurred during the above processes
Code review & Merging
Members make pull requests on their finished parts.
Pipeline automatically assigns finished code to our code reviewers ---- Zhichao Liu and Yunding Wu
They make sure the code style is consistent and merge the changes
Merged work debug
Write unit tests to check code logic on merged code
Test finished pages on different devices/browsers/screen resolutions
Code reviewers start debugging if any issue occurred during the above processes
Review/evaluation of finished features
Team members discuss the positive and negative sides of the finished application after using it.
Conclude difficulties of team work
Make new plans to resolve the above negative points. A new sprint sequence starts here.

Things done by the 1st sprint: 
Created the user input page, and the timer page, with designed UI.
In the user input page, the user can choose/enter the informations including type, note, # of pomo cycles, and click start/quick start button to begin the pomo project. 
All the information that the user input will be recorded and translated to the timer page. 
In the timer page, the timer will automatically run with the water animation filling up. When each cycle (25min) is completed, the timer will enter the break cycle (long or short decided by the passing cycles), and the cycle slider is added with animation.
Create the transition between two pages: when the user clicks the start button in the first page, it will enter the timer page and the timer is running. When the user clicks the end button in the timer page, he/she will return to the input page. And the information of current pomo status will be displayed in a box. 
Add a music display button in the top-right corner.
Creating the pipeline that pushes any codes to the branch will send an email to notify the reviewer. And the code senders have to write the type, reason, details about their works.

Progress since the 2nd sprint: 
Simplified the music player to avoid distraction
Added button at timer-completed stage to return back to main page
Added database of inspirational quotes. The space under progress bar can now automatically change quotes every minute. 
Modified border animation to fit with the in-circle filler animation.

Improvements between two sprints:
Improved user experience by simplifying interface and reducing distraction
Assignment of tasks became more equal and reasonable
Team members are more engaged in communication now
Better documentation of technical work
More effective usage of Internet to boost learning of html/css/js techniques
