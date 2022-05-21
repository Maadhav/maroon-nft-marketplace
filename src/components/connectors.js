// Instanciate your other connectors.
import {UAuthMoralisConnector} from '@uauth/moralis'

export const injected = {}

export const walletconnect = {provider: 'walletconnect'}

UAuthMoralisConnector.setUAuthOptions({
  clientID: 'uauth_example_spa_id',
  // clientSecret: process.env.REACT_APP_CLIENT_SECRET!,
  redirectUri: 'http://localhost:3000/callback',
  // postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,
  fallbackIssuer: 'http://localhost:3000',

  // Scope must include openid and wallet
  scope: 'openid wallet',

  // Injected and walletconnect connectors are required
  connectors: {injected, walletconnect},
});

const uauth = {connector: UAuthMoralisConnector};

const connectors = {
  injected,
  walletconnect,
  uauth,
}

export default connectors
