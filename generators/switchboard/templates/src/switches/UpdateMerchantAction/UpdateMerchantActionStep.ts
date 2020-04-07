import { UpdateMerchantActionOperator } from '@ns8/ns8-switchboard-operator';
import { SwitchContext, UpdateMerchantActionSwitch } from 'ns8-switchboard-interfaces';

import { MerchantUpdate } from 'ns8-protect-models';

const convertMerchant = (switchContext: SwitchContext): MerchantUpdate => {
  throw new Error(`not implemented ${switchContext}`);
};

/**
 * This is the stateless function that will execute the actual <%- platformName %> switch logic.
 */
export class UpdateMerchantActionStep implements UpdateMerchantActionSwitch {
  // eslint-disable-next-line class-methods-use-this
  async update(switchContext: SwitchContext): Promise<MerchantUpdate> {
    return convertMerchant(switchContext);
  }
}

/**
 * This is the lambda that will execute the the step function.
 * This is the method that the serverless context will execute,
 * where this method name must match the corresponding method defined in `serverless.yml`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateMerchantAction: (event: any) => Promise<any> = ((): any =>
  new UpdateMerchantActionOperator([new UpdateMerchantActionStep()]).handle)();
