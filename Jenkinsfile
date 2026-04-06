pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/lakshmi-254/virtual-travel-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t travel-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop travel-app || exit 0'
                bat 'docker rm travel-app || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:80 --name travel-app travel-app'
            }
        }
    }
}