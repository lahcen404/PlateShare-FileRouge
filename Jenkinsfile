// This is the final, simplified Jenkins pipeline for your project
pipeline {
    // Run on any available machine
    agent any

    // Pipeline options
    options {
        // This prevents Jenkins from doing an automatic checkout before the pipeline starts,
        skipDefaultCheckout(true)
    }

    // Define the stages of our build process
    stages {
        // Stage 1: Clean the Workspace
        stage('Clean Workspace') {
            steps {
                echo 'Cleaning up the workspace before checkout...'
                // This step deletes all files from the previous build to ensure a clean start.
                cleanWs()
            }
        }

        // Stage 2: Get the latest code from your repository
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from source control...'
                // 'checkout scm' uses the Git repository you configured in the Jenkins job
                checkout scm
            }
        }

        // Stage 3: Build and Deploy the entire application
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
