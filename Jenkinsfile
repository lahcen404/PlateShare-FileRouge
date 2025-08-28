// This Jenkins pipeline is specifically for building the backend application.
pipeline {
    // Run on any available machine
    agent any

    // Define the tools needed for this build.
    // These must be configured in Jenkins > Manage Jenkins > Tools.
    tools {
        jdk 'jdk21'
        maven 'maven3'
    }

    // Define the stages of our build process
    stages {
        // Stage 1: Clean the Workspace
        stage('Clean Workspace') {
            steps {
                echo 'Cleaning up the workspace before checkout...'
                // This step deletes all files from the previous build
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

        // Stage 3: Build the Spring Boot Backend
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

        // Stage 4: Archive the build artifact
        stage('Archive Artifact') {
            steps {
                echo 'Archiving the build artifact...'
                // This saves the compiled .jar file with the build results in Jenkins
                archiveArtifacts artifacts: 'PlateShare-BackEnd/target/*.jar', fingerprint: true
            }
        }
    }
}
