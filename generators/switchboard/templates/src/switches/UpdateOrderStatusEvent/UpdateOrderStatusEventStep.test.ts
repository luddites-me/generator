/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { UpdateOrderStatusEventStep } from './UpdateOrderStatusEventStep';
import { updateOrderStatusEventMock } from './updateOrderStatusEvent.mock';

describe('create order action', () => {
  use(chaiAsPromised);

  it('Converts a <%- platformName %> order to a Protect order', async () => {
    const step = new UpdateOrderStatusEventStep();
    expect(async () => {
      await step.handle(updateOrderStatusEventMock);
    }).not.to.throw;
  });
});
