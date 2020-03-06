/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { UpdateMerchantActionStep } from './UpdateMerchantActionStep';
import { updateMerchantMock } from './updateMerchant.mock';

describe('update merchant action', () => {
  use(chaiAsPromised);

  it('update merchant action succeeds', async () => {
    const step = new UpdateMerchantActionStep();
    expect(async () => {
      await step.update(updateMerchantMock);
    }).not.to.throw;
  });
});
