import auth0 from 'auth0-js'
import authInfo from '@/auth_config.json'

import { createApp } from 'vue'


// exchange the object with your own from the setup step above.
let webAuth = new auth0.WebAuth({
    domain: authInfo.domain,
    clientID: authInfo.clientId,
    redirectUri: window.location.origin + '/authCB',
    audience: 'https://' + authInfo.domain + '/api/v2/', 
    responseType: 'token id_token',
    scope: 'openid profile'
})

let auth = createApp({
  computed: {
    token: {
      get: function() { return localStorage.getItem('id_token') },
      set: function(id_token) { localStorage.setItem('id_token', id_token) }
    },
    accessToken: {
      get: function() { return localStorage.getItem('access_token') },
      set: function(accessToken) { localStorage.setItem('access_token', accessToken) }
    },
    expiresAt: {
      get: function() { return localStorage.getItem('expires_at') },
      set: function(expiresIn) {
        let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
        localStorage.setItem('expires_at', expiresAt)
      }
    },
    user: {
      get: function() { return JSON.parse(localStorage.getItem('user')) },
      set: function(user) { localStorage.setItem('user', JSON.stringify(user)) }
    }
  },
  methods: {
    login() { webAuth.authorize() },
    logout() {
      return new Promise((resolve, reject) => { 
        localStorage.removeItem('user')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expires_at')
        localStorage.removeItem('access_token')

        webAuth.logout({
            clientID: authInfo.clientId,
            returnTo: window.location.origin
        })
      })
    },
    isAuthenticated() { return new Date().getTime() < this.expiresAt },
    handleAuthentication() {
      return new Promise((resolve, reject) => {  
        webAuth.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.expiresAt = authResult.expiresIn
            this.accessToken = authResult.accessToken

            this.token = authResult.idToken
            this.user = authResult.idTokenPayload
            
            resolve()
          } else if (err) {
            this.logout()
            reject(err)
          }
        })
      })
    }
  }
})

export default auth