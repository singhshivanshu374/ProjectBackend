GitHub Version Control Setup Guide
Step 1: Account Creation

    Go to GitHub.com.

    Sign up using your email and verify your account.

Step 2: Create a Remote Repository

    Click the + icon in the top right corner and select New repository.

    Give it a name (e.g., my-assignment-repo).

    Set it to Public and click Create repository.

    Copy the Repository URL (it looks like https://github.com/username/repo-name.git).

Step 3: Git Commands to Push Code

Open your terminal or command prompt inside your project folder and run these commands in order:
Step	Command	Description
1	git init	 Initializes a local Git repository.
2	git add .	 Adds all files in the folder to the staging area.
3	git commit -m "Initial commit"	 Records your changes with a message.
4	git branch -M main	 Renames the default branch to 'main'.
5	git remote add origin YOUR_URL	 Links your local folder to the GitHub repo.
6	git push -u origin main	 Pushes your code to GitHub.