/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { UpdateOrderStatusActionStep } from './UpdateOrderStatusActionStep';
import { updateOrderStatusActionMock } from './updateOrderStatusAction.mock';

describe('create order action', () => {
  use(chaiAsPromised);

  it('Converts a <%- platformName %> order to a Protect order', async () => {
    const step = new UpdateOrderStatusActionStep();
    expect(async () => {
      await step.update(updateOrderStatusActionMock);
    }).not.to.throw;
  });
});
