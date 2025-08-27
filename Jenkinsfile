// This is a simplified and more robust Jenkins pipeline for your project
pipeline {
    agent {
        docker {
            image 'docker/compose:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
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

        // Stage 2: Build and Deploy the entire application
        // This single stage uses docker-compose to build the images and run the containers.
        stage('Build and Deploy with Docker Compose') {
            steps {
                script {
                    echo 'Stopping any old containers...'
                    sh 'docker-compose down'

                    echo 'Building new images and starting all services...'
                    sh 'docker-compose up --build -d'
                }
            }
        }
    }
}
