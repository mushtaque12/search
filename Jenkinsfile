
@Library('cip-sharedLib@dev')_

pipeline {
  agent any

  stages{
    stage('Build'){
      steps{
        dockerBuild ''
      }
    }
    stage('Deploying In K8s') {
      agent { label 'helm3' }
      when {
        anyOf{
          branch 'master'
          branch 'develop'
        }
      }
      steps{
        depToDev('')
      }
      post { 
          always { 
              cleanWs()
          }
      }
    }
  }
  post { 
      always { 
          cleanWs()
      }
      success{
        successAlertFlex()
      }
      failure {
        failAlertFlex()
      }
  }
}