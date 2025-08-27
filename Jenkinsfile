pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/lahcen404/PlateShare-FileRouge.git'
            }
        }
        stage('Build and Deploy') {
            steps {
                script {
                    // Use 'bat' for Windows commands
                    bat 'docker-compose down'
                    bat 'docker-compose up --build -d'
                }
            }
        }
    }
}