# Running the application
Application can be ran after providing invoke URL in the .env file. Backend is available at https://github.com/Magatsuken/event-driven-tech-lambda but there is a current backend running on AWS services.

# What does this do?
The application will parse a text file that is dropped into an S3 bucket through a lambda function. The lambda function then stores this data into DynamoDB. On the frontend, the user can view the data in a table. The user can request the document, which calls another lambda function. This lambda function retrieves the data from DynamoDB and stores it as a CSV file in another S3 bucket. The lambda function also returns a download link that the user is able to download the CSV file.

# Stack used
Frontend is React and stylized with React-Bootstrap. Backend uses the AWS Services: S3, Lambda Function, and API Gateway. The database is DynamoDB.

# TODOs
- Complete frontend where user can upload their text file into the S3 bucket instead of manually uploading it
- Complete testing
- Add feature where data can be sorted (DynamoDB is not flexible with queries)
