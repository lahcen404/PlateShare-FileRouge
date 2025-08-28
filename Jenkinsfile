pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                echo 'Cleaning up the workspace before checkout...'
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                echo 'Checking out code from source control...'
                // This will checkout the code from the repository configured in the Jenkins job SCM
                checkout scm
            }
        }

        stage('Build and Deploy with Docker Compose') {
            steps {
                script {
                    echo 'Stopping any old containers...'
                    // Run docker-compose down safely (ignore errors if no containers exist)
                    sh 'docker-compose down || true'

                    echo 'Building new images and starting all services...'
                    // Build and start containers in detached mode
                    sh 'docker-compose up --build -d'
                }
            }
        }
    }
}
