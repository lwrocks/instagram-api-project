import { Selector } from 'testcafe';

fixture('Index page')
    .page('../../index.html');

test('Should contain a form field', async (t) => {
    const field = Selector('.hash');

    await t.expect(field.exists).ok();
  });
  test('Should contain a submit button', async (t) => {
    const field2 = Selector('.submit');

    await t.expect(field2.exists).ok();
  });
  // test('Should send a GET request when submit button is clicked', async (t) => {
    // write code
  // });
