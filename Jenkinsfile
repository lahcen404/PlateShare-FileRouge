pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                echo 'Cleaning workspace...'
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                echo 'Checking out code from Git...'
                checkout scm
            }
        }

        stage('Build & Test') {
            steps {
                echo 'Running build and tests...'
                sh 'echo "Build/test commands go here"'
            }
        }
    }
}
