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
        stage('1.2') {
          steps {
            isUnix()
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
            emailext(subject: 'ahora si', body: 'pues parece que esto va', from: 'hugo.lorenzomato@gmail.com', to: 'lobocurrante@gmail.com')
          }
        }
      }
    }
    stage('3') {
      steps {
        bat(script: 'echo \'hugo\'', encoding: 'UTF-8', returnStatus: true, returnStdout: true)
      }
    }
    stage('4') {
      steps {
        pwd(tmp: true)
      }
    }
    stage('5') {
      parallel {
        stage('5') {
          steps {
            writeFile(file: 'hugotestjenkins.txt', text: 'Correcto', encoding: 'UTF-8')
          }
        }
        stage('') {
          steps {
            mail(subject: 'Ejecución proceso completada', body: 'Se ha completado la ejecución del proceso', charset: 'UTF-8', from: 'hugo.lorenzomato@gmail.com', to: 'hlorenzo@enxenio.es')
          }
        }
      }
    }
  }
}