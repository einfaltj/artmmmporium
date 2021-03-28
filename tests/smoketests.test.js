import { Selector } from 'testcafe';

fixture `Smoketests`
    .page `http://localhost:8000/`;

test('Smoketests', async t => {
    const title = Selector("div[class='inner']");
    await t.expect(title.find('h2').innerText).eql('MADELEINE EINFALT');
    await t.expect(title.find('p').innerText).eql('BRINGING YOUR ARTISTIC VISION TO LIFE');

    const logo = Selector("div[class='image']");
    await t.expect(logo.exists).ok();
});