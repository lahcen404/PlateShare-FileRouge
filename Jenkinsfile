pipeline {
    // Run on any available machine
    agent any

    // Define the tools needed for this build.
    tools {
        jdk 'jdk17'
        maven 'maven3'
    }

    // Define the stages of our build process
    stages {
        // Stage 1: Get the latest code from your repository
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from source control...'
                // 'checkout scm' uses the Git repository you configured in the Jenkins job
                checkout scm
            }
        }

        // Stage 2: Build the Spring Boot Backend
        stage('Build Backend') {
            steps {
                // Change directory into the backend folder
                dir('PlateShare-BackEnd') {
                    echo 'Building the Spring Boot backend...'
                    // Run the Maven package command to build the .jar file
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        // Stage 3: Build the Angular Frontend
        stage('Build Frontend') {
            steps {
                // Change directory into the frontend folder
                dir('PlateShare-FrontEnd') {
                    echo 'Building the Angular frontend...'

                    // runs the build commands, and then the container is removed.
                    sh '''
                        docker run --rm -v ${PWD}:/app -w /app node:20-alpine sh -c "npm install && npm run build -- --configuration production"
                    '''
                }
            }
        }

        // Stage 4: Run the entire application with Docker Compose
        stage('Deploy with Docker Compose') {
            steps {
                script {
                    echo 'Stopping any old containers and starting the new ones...'
                    // This command stops any old versions of our app
                    sh 'docker-compose down'
                    
                    // This command builds new Docker images and starts everything
                    sh 'docker-compose up --build -d'
                }
            }
        }
    }
}
