import { CreateOrderActionOperator } from '@ns8/ns8-switchboard-operator';
import { CreateOrderActionSwitch, SwitchContext } from 'ns8-switchboard-interfaces';
import { Order } from 'ns8-protect-models';
import { toOrder } from '@ns8/protect-sdk-switchboard';

/**
 * This is the stateless function that will execute the actual <%- platformName %> switch logic.
 */
export class CreateOrderActionStep implements CreateOrderActionSwitch {
  // eslint-disable-next-line class-methods-use-this
  async create(switchContext: SwitchContext): Promise<Order> {
    // if the property names are all aligned, this method will do everything you need.
    // otherwise, look at the use cases in the switchboard SDK and customize this as needed.
    return toOrder(switchContext.data);
  }
}

/**
 * This is the lambda that will execute the the step function.
 * This is the method that the serverless context will execute,
 * where this method name must match the corresponding method defined in `serverless.yml`
 */
export const CreateOrderAction: (event: SwitchContext) => Promise<Order> = ((): ((
  event: SwitchContext,
) => Promise<Order>) => new CreateOrderActionOperator([new CreateOrderActionStep()]).handle)();
