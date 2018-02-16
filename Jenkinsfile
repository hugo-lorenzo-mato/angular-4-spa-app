pipeline {
  agent any
  stages {
    stage('1') {
      steps {
        echo 'Paso 1'
      }
    }
    stage('2') {
      steps {
        sleep 5
      }
    }
    stage('3') {
      steps {
        bat(script: 'echo \'hugo\'', encoding: 'UTF-8', returnStatus: true, returnStdout: true)
      }
    }
  }
}