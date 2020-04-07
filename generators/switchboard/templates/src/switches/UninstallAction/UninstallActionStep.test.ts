/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { UninstallActionStep } from './UninstallActionStep';
import { uninstallMock } from './uninstall.mock';

describe('uninstall event', () => {
  use(chaiAsPromised);

  it('uninstall event succeeds', async () => {
    const step = new UninstallActionStep();
    expect(async () => {
      await step.uninstall(uninstallMock);
    }).not.to.throw;
  });
});
