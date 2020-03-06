/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { CreateOrderActionStep, CreateOrderAction } from './CreateOrderActionStep';
import { orderMock } from './orderMock';

describe('create order action', () => {
  use(chaiAsPromised);

  it('Converts a <%- platformName %> order to a Protect order', async () => {
    const step = new CreateOrderActionStep();
    expect(async () => {
      await step.create(orderMock);
    }).not.to.throw;
  });
});
