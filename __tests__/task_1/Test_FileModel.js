import {
  getTalks,
  getSpeakers,
  getTalksBySpeakerId
} from '../../src/model/file';
import talks from '../../src/db/talks.json';
import speakers from '../../src/db/speakers.json';

test('Test the functionality of getTalks.', () => {
  expect(getTalks()).toEqual(talks);
});

test('Test the functionality of getSpeakers.', () => {
  expect(getSpeakers()).toEqual(speakers);
});
// This goes to another test.
// test('Test the functionality of getTalksBySpeakerId.', () => {
//   const randomTalk = {
//     complexity: 'Intermediate',
//     id: '2de314c2-067a-4d79-9133-1852bf9c7340',
//     lang: 'pt-BR',
//     name: 'Roselma Mendes',
//     speaker_id: 'a8914a24-0135-4f2b-8e59-65116256a410',
//     theme:
//       'Cada vez mais vemos a comunidade de desenvolvimento de software falar mais e mais sobre como entregar software de maneira rápida e com qualidade, onde DevOps, Entrega e Integração Contínua fazem parte dessas discussões. Baseado nisso, Docker se tornou uma das palavras do momento. Depois do uso das máquinas virtuais, atualmente tem se falado muito da conteinerização das aplicações. A idéia é mostrar como usar docker em uma aplicação React com um servidor ExpressJS. Serão abordados temas de "mount volume", docker-compose, testes em containers, deploy com docker, práticas para dockerizar aplicações web. E a pergunta de 1 milhão de dólares para que serve esse Docker e quais as vantagens de usar ele. Entenda em como "dockerizar" uma aplicação pode ajudar no desenvolvimento e na entrega dela.',
//     title: 'Docker no desenvolvimento Web'
//   };
//   expect(getTalksBySpeakerId(randomTalk.speaker_id)).toEqual([randomTalk]);
// });
