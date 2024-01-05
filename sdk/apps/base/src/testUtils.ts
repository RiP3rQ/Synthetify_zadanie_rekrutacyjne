import { TEST_RELAY_ENDPOINT } from '../../../commonTestUtils'
import { AppBaseInitialize, ClientBaseInitialize } from './initializeTypes'

export const testAppBaseInitialize: AppBaseInitialize = {
  appMetadata: {
    additionalInfo: 'test-additional-info',
    footerContent: `By connecting, you agree to Common's Terms of Service and to its Privacy Policy`,
    description: 'test-app-description',
    icon: 'test-app-icon',
    name: 'test-app-name'
  },
  network: 'test-network',
  persistent: false,
  persistentSessionId: undefined,
  timeout: undefined,
  url: TEST_RELAY_ENDPOINT
}

export const testClientBaseInitialize: ClientBaseInitialize = {
  timeout: undefined,
  url: TEST_RELAY_ENDPOINT
}
