pipeline {
    agent any

    stages {
        stage("build") {
            steps{
                echo "building the application"

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

