import { config } from '@vue/test-utils';

export { mount as customMount } from '@vue/test-utils'
// Mock global Vue properties or plugins if needed
config.global.mocks = {}