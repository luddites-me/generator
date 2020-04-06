import { EventOperator } from '@ns8/ns8-switchboard-operator';
import { EventSwitch } from 'ns8-switchboard-interfaces';
import { NamedOrderUpdate } from 'ns8-switchboard-interfaces';
import { SwitchContext } from 'ns8-switchboard-interfaces';
import { OrderUpdate } from 'ns8-protect-models';

const convertOrder = (switchContext: SwitchContext): NamedOrderUpdate => {
  throw new Error(`not implemented ${switchContext}`);
};

/**
 * This is the stateless function that will execute the actual <%- platformName %> switch logic.
 */
export class UpdateOrderStatusEventStep implements EventSwitch {
  // eslint-disable-next-line class-methods-use-this
  async handle(switchContext: SwitchContext): Promise<NamedOrderUpdate> {
    return convertOrder(switchContext);
  }
}

/**
 * This is the lambda that will execute the the step function.
 * This is the method that the serverless context will execute,
 * where this method name must match the corresponding method defined in `serverless.yml`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateOrderStatusEvent: (event: any) => Promise<OrderUpdate> = ((): any =>
  new EventOperator([new UpdateOrderStatusEventStep()]).handle)();