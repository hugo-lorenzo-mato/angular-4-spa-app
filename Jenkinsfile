pipeline {
  agent any
  stages {
    stage('1') {
      parallel {
        stage('1') {
          steps {
            echo 'Paso 1'
          }
        }
        stage('1.1') {
          steps {
            pwd(tmp: true)
          }
        }
      }
    }
    stage('2') {
      parallel {
        stage('2') {
          steps {
            sleep 5
          }
        }
        stage('2.1') {
          steps {
            emailext(subject: 'ahora si', body: 'pues parece que esto va', from: 'hugo.lorenzomato@gmail.com', replyTo: 'lobocurrante@gmail.com', to: 'programadorwebs1@gmail.com')
          }
        }
      }
    }
    stage('3') {
      steps {
        bat(script: 'echo \'hugo\'', encoding: 'UTF-8', returnStatus: true, returnStdout: true)
      }
    }
    stage('error') {
      steps {
        pwd(tmp: true)
      }
    }
  }
}