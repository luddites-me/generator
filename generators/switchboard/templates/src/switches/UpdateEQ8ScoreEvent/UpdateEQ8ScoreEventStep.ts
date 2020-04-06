import { EventOperator } from '@ns8/ns8-switchboard-operator';
import { EventSwitch, SwitchContext } from 'ns8-switchboard-interfaces';

type PlatformOrder = unknown;

const getPlatformOrder = (switchContext: SwitchContext): Promise<PlatformOrder> => {
  throw new Error(`not implemented ${switchContext}`);
};

/**
 * This is the stateless function that will execute the actual protect-switchboard-sap switch logic.
 */
export class UpdateEQ8ScoreEventStep implements EventSwitch {
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-explicit-any
  async handle(switchContext: SwitchContext): Promise<any> {
    const result = await getPlatformOrder(switchContext);
    const protectData = switchContext.data;
    return { result, protectData };
  }
}

/**
 * This is the lambda that will execute the the step function.
 * This is the method that the serverless context will execute,
 * where this method name must match the corresponding method defined in `serverless.yml`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UpdateEQ8ScoreEvent: (event: any) => Promise<any> = ((): any =>
  new EventOperator([new UpdateEQ8ScoreEventStep()]).handle)();
