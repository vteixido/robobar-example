pipeline {
    agent any
    nodeVersion='node-14.18.2'
    options {
        ansiColor('xtern')
    }
    stages {
        stage('Test') {
           steps {
             nodejs(nodeVersion) {
                 sh 'yarn install'
                 sh 'yarn cy:ci || true '
             }
           }
           post {
              always {
                  junit 'results/*.xml'
              }
           }
        }
    }
}