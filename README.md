# New Employee Traning System(NETS)
Second-year Software Project
# Problem in Brief
The company is currently experiencing challenges in acquiring knowledge from departing senior employees, and there is currently no effective physical solution in place to store or transfer knowledge efficiently. Consequently, the company has made the decision to develop a new system to address this problem. Moreover, the client lacks software to effectively manage their valuable knowledge. Initially, newly hired employees encounter difficulties in adapting to new IT systems and company protocols due to resistance to change and communication barriers. The company faces challenges in effectively communicating rules and protocols to new employees, resulting in unproductive time loss and increased stress for employees struggling to comprehend the transferred knowledge. As a result, the client is interested in creating its own knowledge transfer system to facilitate better interaction with new employees.
# Aim
New Employee Training System (NETS) is designed to provide knowledge about the working environment, procedures, and what exactly newly hired employees need to do in their particular job position in an efficient and interesting manner by organizing all essential learning materials in one central location.
# Objectives
1. To facilitate users by providing a login system based on Google integration to login easily
2. To provide a facility for managing chapters and accepting the new chapter request from the employee
3. To manage learning materials (KT sessions, Articles) and quizzes for the users
4. To gain knowledge of the specific job area of a particular newly hired employee by referring to learning materials
5. To get the submissions of project and submitted answers to quizzes and grades
6. To provide a feature to add comments and ratings on learning materials
7. To provide a platform to Get employee ideas and solve their questions through discussion forums
8. To facilitate hired employees by providing guidance request ticket feature to get senior employee’s help
9. To generate user reports and overview reports of hired employees and ratings and review reports of the content creator
10. To give the badges to the employees who achieve the goal and show how many points they need to beat the first employee by the leader board
# Proposed Solution
Below are the main and sub-modules we created from the proposed solution
Department &Job title module 
Profile overview
Chapter module 
Content Module 
Feedback and Discussion Forum Module
Notification Module
Evaluation Module 
Leaderboard module 
Authentication & permission module
Guidance Module

# User Roles
1. Hired Employees
2. Supervisors
3. Content Creators
4. System Admin
5. Super Admin
# Inputs
1. Employee Details
2. Department Details and Job titles under the department
3. Chapter and Unit details
  Articles and Knowledge Transferring (KT) sessions
  Quizzes
4. Ratings and Comments
# Process
Login into the System
Showing Dashboard and Profile Pages
Manage Department and Job Titles
Manage Chapters
Manage Units
Manage Learning Materials and Discussion Forums, Quizzes
Send Notifications and Showing alert messages
Comment, Ratings and Guidance request
Evaluate quiz
Calculating score difference and rank
Offering badges
# Outputs
1. Dashboard 
2. Chapter
3. Units
    KT Sessions
    Quizzes
    Articles
    Discussion Forums
4. Final Ratings
    Articles
    KT Sessions
5. Reports
   Chapter Report - Supervisor, Hired Employee
   Overview Report - Supervisor, Hired Employee
   Rating Report - Supervisor, Content creator
   Quiz Report - Supervisor
7. Alerts
8. Profile Details of all user roles
9. Leaderboard - Hired Employee, Supervisor
10. Quiz Result
11. Quiz Review
12. Project Assignment
13. Edit Logs - Super Admin
# Use Case Diagram:
  https://lucid.app/lucidspark/69a0efbd-30d3-48f4-b706-4609e2e6e299/edit?invitationId=inv_9b6ea09e-1948-42c3-a4ab-0f6939bf1754&page=0_0#
# ER Diagram: 
  https://miro.com/app/board/uXjVP02lgdg=/

# My Responsibility
1. Evaluation module
  * Evaluate quizzes - Hired Employee
  * Review the quiz results - Hired Employee
  * Enable grading submissions by referring to pending submissions - Supervisor
  * View feedback on the submission - Hired EMployee
  * View project score - Supervisor
  * View score edit log - Super Admin
  * View reports: chapter report(Hired Employee,Supervisor), overview report(Hired Employee,Supervisor), ratings report(Content Creator, Supervisor), quiz report(Supervisor)
3. Leaderboard module (Hired Employee, Supervisor)
  * Rank of employee
  * Offer badges
  * View score to beat rank 1 by hired employee
