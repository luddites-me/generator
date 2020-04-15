import { EventOperator } from '@ns8/ns8-switchboard-operator';
import { EventSwitch, SwitchContext } from 'ns8-switchboard-interfaces';
import { QueueClient } from '@ns8/protect-sdk-switchboard';

/**
 * This is the stateless function that will execute the actual protect-switchboard-sap switch logic.
 */
export class UpdateOrderRiskEventStep implements EventSwitch {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async handle(switchContext: SwitchContext): Promise<any> {
    const queueClient = new QueueClient(switchContext);
    return queueClient.createUpdateOrderRiskEvent();
  }
}

/**
 * This is the lambda that will execute the the step function.
 * This is the method that the serverless context will execute,
 * where this method name must match the corresponding method defined in `serverless.yml`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateOrderRiskEvent: (event: any) => Promise<any> = ((): any =>
  new EventOperator([new UpdateOrderRiskEventStep()]).handle)();
