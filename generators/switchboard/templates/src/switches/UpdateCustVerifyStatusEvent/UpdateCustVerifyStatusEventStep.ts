import { EventOperator } from '@ns8/ns8-switchboard-operator';
import { EventSwitch, SwitchContext } from 'ns8-switchboard-interfaces';

/**
 * This is the stateless function that will execute the actual <%- platformName %> switch logic.
 */
export class UpdateCustVerifyStatusEventStep implements EventSwitch {
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-explicit-any
  async handle(switchContext: SwitchContext): Promise<any> {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { platformId } = switchContext.data;

    return {};
  }
}

/**
 * This is the lambda that will execute the the step function.
 * This is the method that the serverless context will execute,
 * where this method name must match the corresponding method defined in `serverless.yml`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateCustVerifyStatusEvent: (event: any) => Promise<any> = ((): any =>
  new EventOperator([new UpdateCustVerifyStatusEventStep()]).handle)();
