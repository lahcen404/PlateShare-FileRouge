pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        COMPOSE_CMD = 'docker-compose'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                echo 'Cleaning workspace...'
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Detect Docker Compose Version') {
            steps {
                script {
                    def hasComposeV1 = sh(script: 'command -v docker-compose', returnStatus: true) == 0
                    if (!hasComposeV1) {
                        def hasComposeV2 = sh(script: 'docker compose version', returnStatus: true) == 0
                        if (hasComposeV2) {
                            env.COMPOSE_CMD = 'docker compose'
                            echo "Using Docker Compose v2"
                        } else {
                            error "Neither 'docker-compose' nor 'docker compose' is available on this Jenkins agent."
                        }
                    } else {
                        echo "Using Docker Compose v1"
                    }
                }
            }
        }

        stage('Build and Deploy with Docker Compose') {
            steps {
                script {
                    echo 'Stopping old containers...'
                    sh "${COMPOSE_CMD} down"

                    echo 'Building and starting containers...'
                    sh "${COMPOSE_CMD} up --build -d"
                }
            }
        }
    }
}
