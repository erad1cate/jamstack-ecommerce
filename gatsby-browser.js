import "./src/styles/site.css"
import "./src/layouts/layout.css"
import Amplify, { API } from 'aws-amplify'
import awsmobile from './src/aws-exports'
Amplify.configure(awsmobile)
API.configure(awsmobile)