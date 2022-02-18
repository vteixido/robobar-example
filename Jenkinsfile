pipeline {
    agent any
    options {
        ansiColor('xtern')
    }
    stages {
        stage('Test') {
           steps {
             nodejs('node-14.18.2') {
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
        stage('Security') {
            steps {
                sh '/usr/local/bin/trivy fs --format json --output trivy-results.json .'
            }
            post {
                always {
                    recordIssues(tools: [trivy(pattern: 'trivy-results.json')])
                }
            }
        }
    }
}