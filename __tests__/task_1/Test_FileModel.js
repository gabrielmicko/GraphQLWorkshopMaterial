import {
  getTalks,
  getSpeakers,
  getTalksBySpeakerId
} from '../../src/model/file';

test('Test the functionality of getTalks.', () => {
  expect(getTalks()).toMatchSnapshot();
});

test('Test the functionality of getSpeakers.', () => {
  expect(getSpeakers()).toMatchSnapshot();
});

test('Test the functionality of getSpeakers with an id argument.', () => {
  expect(
    getSpeakers({
      id: 'cfc5f8de-b034-4c61-b885-1db70d319e1c'
    })
  ).toMatchSnapshot();
});

test('Test the functionality of getSpeakers with a name argument.', () => {
  expect(
    getSpeakers({
      name: 'Gabriel Mičko'
    })
  ).toMatchSnapshot();
});

test('Test the functionality of getTalksBySpeakerId with a speakerId argument.', () => {
  expect(
    getTalksBySpeakerId('a8914a24-0135-4f2b-8e59-65116256a410')
  ).toMatchSnapshot();
});
