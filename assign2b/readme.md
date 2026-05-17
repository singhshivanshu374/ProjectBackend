2. Setup & Execution Commands

You can save these steps in your README.md to execute the environment later.
Step	Command	Description

1	docker build -t my-admin-dash .	 Builds the image using the Dockerfile in the current folder.
2	docker images	 Verifies that your image was created successfully.
3	docker run -d -p 8080:80 my-admin-dash	 Starts the container. It maps your computer's port 8080 to the container's port 80.
4	docker ps	 Checks if the container is currently running.
5	docker stop <container_id>	Stops the running container.

3. How to View Your Work

Once you run Step 3, open your browser and go to:
http://localhost:8080