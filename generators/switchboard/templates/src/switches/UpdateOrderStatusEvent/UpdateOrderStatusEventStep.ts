import { EventOperator } from '@ns8/ns8-switchboard-operator';
import { EventSwitch, NamedOrderUpdate, SwitchContext } from 'ns8-switchboard-interfaces';
import { QueueClient } from '@ns8/protect-sdk-switchboard';
import { OrderUpdate } from 'ns8-protect-models';

/**
 * This is the stateless function that will execute the actual <%- platformName %> switch logic.
 */
export class UpdateOrderStatusEventStep implements EventSwitch {
  async handle(switchContext: SwitchContext): Promise<NamedOrderUpdate> {
    const queueClient = new QueueClient(switchContext);
    await queueClient.createUpdateOrderStatusEvent();
    return {} as NamedOrderUpdate;
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
