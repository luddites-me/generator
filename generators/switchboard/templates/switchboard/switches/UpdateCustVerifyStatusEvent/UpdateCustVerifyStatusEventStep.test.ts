/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { UpdateCustVerifyStatusEventStep } from './UpdateCustVerifyStatusEventStep';
import { verifyStatusMock } from './verifyStatus.mock';

describe('update customer verify status event', () => {
  use(chaiAsPromised);

  it('customer verify status event succeeds', async () => {
    const step = new UpdateCustVerifyStatusEventStep();
    expect(async () => {
      await step.handle(verifyStatusMock);
    }).not.to.throw;
  });
});
