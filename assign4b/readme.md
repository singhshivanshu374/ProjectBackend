AWS Elastic Beanstalk Deployment Guide
Step 1: Prepare Your Application

Before uploading to AWS, you must package your code.

    Ensure your project folder contains server.js, package.json, and your public/ folder.

    Select all files and Compress/Zip them into a single file (e.g., archive.zip).

        Note: Do not include the node_modules folder in your zip; AWS will install dependencies automatically.

Step 2: Create an Elastic Beanstalk Environment

    Log in to your AWS Management Console.

    Search for Elastic Beanstalk in the top search bar.

    Click Create Application.

    Configure Environment:

        Application Name: my-admin-dashboard

        Platform: Select Node.js.

        Platform Branch: Keep the default (usually Node.js 20 or 22).

    Application Code: * Select Upload your code.

        Choose Local file and upload your archive.zip.

Step 3: Configure Service Access

    For Service Role, choose "Create and use new service role."

    For EC2 key pair, you can leave it blank unless you want to SSH into the server later.

    For EC2 instance profile, select a role that has WebTier permissions (usually aws-elasticbeanstalk-ec2-role).

Step 4: Review and Launch

    Skip through the optional networking/database steps (Elastic Beanstalk will create a default VPC and Subnet for you automatically).

    Click Submit.

    Wait 3–5 minutes while AWS provisions your EC2 instance, Security Groups, and Load Balancer.

Step 5: Access Your App

    Once the environment health turns Green (OK), you will see a Domain URL at the top (e.g., my-app.us-east-1.elasticbeanstalk.com).

    Click the link to view your live hosted application.

Key AWS Concepts to Learn

    VPC (Virtual Private Cloud): A private network in the cloud where your server lives. Beanstalk sets this up so your app is isolated and secure.

    EC2 (Elastic Compute Cloud): The actual virtual server (the "computer") that runs your Node.js code.

    S3 (Simple Storage Service): Where your uploaded .zip file is stored.

    Security Groups: Virtual firewalls that allow web traffic (Port 80) to reach your application.

Terminal Commands (Optional: AWS CLI)

If you prefer using the terminal instead of the website, use these commands:
Step	Command	Description

1	eb init	Initializes the AWS Beanstalk project.
2	eb create my-env	Creates the environment and VPC.
3	eb deploy	Pushes updated code to the live server.
4	eb open	Opens the hosted URL in your browser.