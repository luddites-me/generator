/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { OnInstallEventStep } from './OnInstallEventStep';
import { installMock } from './installMock';

describe('intall event', () => {
  use(chaiAsPromised);

  it('install event succeeds', async () => {
    const step = new OnInstallEventStep();
    expect(async () => {
      await step.handle(installMock);
    }).not.to.throw;
  });
});
