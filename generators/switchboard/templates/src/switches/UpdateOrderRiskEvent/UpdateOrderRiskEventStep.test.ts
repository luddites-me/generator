/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { UpdateOrderRiskEventStep } from './UpdateOrderRiskEventStep';
import { updateOrderRiskMock } from './updateOrderRisk.mock';

describe('create order action', () => {
  use(chaiAsPromised);

  it('Converts a protect-switchboard-sap order to a Protect order', async () => {
    const step = new UpdateOrderRiskEventStep();
    expect(async () => {
      await step.handle(updateOrderRiskMock);
    }).not.to.throw;
  });
});
