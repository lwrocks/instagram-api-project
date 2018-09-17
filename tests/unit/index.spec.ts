import { Selector } from 'testcafe';

fixture('Index page')
    .page('http://localhost:1337/');

test('Should contain a form field', async (t) => {
    const field = Selector('.hash');
  
    await t.expect(field.exists).ok();
  });
  test('Should contain a submit button', async (t) => {
    const field = Selector('.submit');
  
    await t.expect(field.exists).ok();
  });
  test('Should send a GET request when submit button is clicked', async (t) => {
    // write code
  });