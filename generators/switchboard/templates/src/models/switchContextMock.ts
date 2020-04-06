import { SwitchContext, DataType } from 'ns8-switchboard-interfaces';
import {
  /*
  SubjectType,
  IntegrationPlatformType,
  MerchantStatus,
  InterceptOption,
  WhitePagesThresholdStatus,
  Risk,
  Status,
  Profile,
  ServiceIntegrationType,
  ServiceIntegration,
  Contact, */
  Merchant,
} from 'ns8-protect-models';

/**
 * Utility for generating a SwitchContext for use in unit tests
 * @param data - unstructured data that gets passed into the switch context
 * @returns a fully populated SwitchContext
 */
export const getSwitchboardContextMock = (data: any): SwitchContext =>
  new SwitchContext({
    data,
    merchant: new Merchant({
      /* FIXME: make mock merchant for this integration */
    }),
    apiBaseUrl: new URL('https://test-protect.ns8.com/'),
    type: DataType.LOCAL,
  });

export const orderDataMock: any = {
  order: {
    FIXME: true,
    platform: 'specific',
    properties: 'here',
  },
  session: {
    ip: '162.211.148.172',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
    screenHeight: '900',
    screenWidth: '1440',
  },
  username: 'default',
};

export const getSwitchboardOrderDataContextMock = (): SwitchContext => getSwitchboardContextMock(orderDataMock);
