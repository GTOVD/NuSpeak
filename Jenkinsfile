pipeline {
    agent any

    stages {
        stage("build") {
            steps{
                echo "building the application"
                sh 'php --version'
                sh 'composer install'
                sh 'composer --version'
                sh 'cp .env.example .env'
                sh 'php artisan key:generate'
            }
        }
        stage("test") {
            steps{
                echo "testing the application"
                sh 'php artisan test'
            }
        }
        stage("deploy") {
            steps{
                echo "deploying the application"
            }
        }
    }
}

