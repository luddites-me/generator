/* eslint-disable
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-var-requires,
  no-unused-expressions,
  */
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import { UpdateEQ8ScoreEventStep } from './UpdateEQ8ScoreEventStep';
import { updateScoreMock } from './updateScore.mock';

describe('update EQ8 score event', () => {
  use(chaiAsPromised);

  it('update EQ8 score event succeeds', async () => {
    const step = new UpdateEQ8ScoreEventStep();
    expect(async () => {
      await step.handle(updateScoreMock);
    }).not.to.throw;
  });
});
