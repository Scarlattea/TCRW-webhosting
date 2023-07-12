pipeline {
    agent {
        label 'Magozo-builder'
    }

    stages {
        stage('Checkout SCM') 
        {
            steps 
            {
                // Get some code from a GitHub repository
                git 'https://github.com/Scarlattea/TCRW-webhosting.git'
            }
        }
        stage('Build')
        {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS-Magozo-Only') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }
    }
}