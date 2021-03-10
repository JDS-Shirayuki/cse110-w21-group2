# Retrospective Meeting  03/09/2021
Attendance: Yichen Yang, Zhichao Liu, Guo Chen, Hang Wang, Haoyang Xie, Yunding Wu (all members were present)
Time: 10:00 PM, U.S. West Coast Time
Medium: Zoom Meeting
Meeting Type: Retrospective

# 1. Conclusion of accomplished work contents:
Created the user input page, and the timer page, with designed UI.
In the user input page, the user can choose/enter the informations including type, note, # of pomo cycles, and click start/quick start button to begin the pomo project. 
All the information that the user input will be recorded and translated to the timer page. 
In the timer page, the timer will automatically run with the water animation filling up. When each cycle (25min) is completed, the timer will enter the break cycle (long or short decided by the passing cycles), and the cycle slider is added with animation.
Create the transition between two pages: when the user clicks the start button in the first page, it will enter the timer page and the timer is running. When the user clicks the end button in the timer page, he/she will return to the input page. And the information of current pomo status will be displayed in a box. 
Add a music display button in the top-right corner.
Creating the pipeline that pushes any codes to the branch will send an email to notify the reviewer. And the code senders have to write the type, reason, details about their works.
Simplified the music player to avoid distraction
Added button at timer-completed stage to return back to main page
Added database of inspirational quotes. The space under progress bar can now automatically change quotes every minute. 
Modified border animation to fit with the in-circle filler animation.

# 2. Evaluation of finished work (positive/negative sides):
Positive:
Good UI design
Improved user experience based on simplicity
Complete features of a basic pomo timer
Vivid animations showing the pomo progress
Negative:
Music player button is not properly adjusted
CSS layout under different devices/browser/resolution is still inconsistent
Planned feature not finished: User authentication and usage recording
Planned feature not finished: Analyze (actually a simple visualization) of the usage history
Planned feature not finished: Settings (includes: Language/Time period of one pomo/About US/Contact Info/Version and update page)

# 3. Plans to fix the negative sides:
First of all, we need to emphasize the time constraints of the project and prioritize the accomplishment of the already-planned features. Then, we need to:
Spend a little time to adjust the newly simplified music player button
Unit tests cannot help the css thing here. We need to try different settings of page layouts (like replacing pixel numbers with proportional settings when implementing a layout)
A demo of the pump-out login interface is already finished. We can now register the Google Firebase to do the user authentication work and store the usage data corresponding to each user online
Draw an interface of the analyze (or call it visualization) page first. A brief statistical graph of usage history will be displayed in this feature. The statistical graph can sort usage history by different settings you choose before starting the timer
Implement a pump-out interface just like what we did in the login feature. Javascript code ensuring the language change, pomo period change, about us page, contact info, version page will be performed for these features to come true.
