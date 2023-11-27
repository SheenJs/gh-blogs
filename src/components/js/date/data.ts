import m from 'mockjs';

export function list() {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    const name = m.mock('@cname');
    arr.push({
      img: m.Random.image('200x200', m.mock('@color'), name.substring(0, 1)),
      name,
      content: m.mock('@cparagraph'),
      time: new Date().setDate(
        new Date().getDate() + m.Random.integer(-20, 20)
      ),
    });
  }
  return arr;
}
