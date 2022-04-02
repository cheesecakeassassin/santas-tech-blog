const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    blog_entry: 'lorem ipsum or whatever',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_entry: 'Hola mi nombre es Sebastian, como se llama usted?',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    blog_entry: 'Hey guys what do you think about quantum computing?',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    blog_entry: 'Did you check out the new DeepMind AI destroy the best chess engines easily?!',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    blog_entry: 'I like cheesecake, how about you?',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    blog_entry: 'Watashi wa daigaku de nihongo no gakusei desu yo!',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_entry: 'La vida te da sorpresas, sorpresas te da la vida hay Dios',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_entry: 'Si naciste pa martillo, del cielo te caen los clavos',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    blog_entry: 'There is a lady who knows all that glitters is gold and shes buying a stairway to Heaven',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    blog_entry: 'Cual prisionera perpetua, te encontre atada al fracaso',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_entry: 'Y creyendo en tus promesas de amor, yo te refugie en mis brasos',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    blog_entry: 'Little black submarines, operator please, put me back on the line',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    blog_entry: 'How I wish, how I wish you were here',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    blog_entry: 'And now, the end is near, and so I face my final curtain',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog_entry: 'My friends, I will say it clear, I will state my case of which I am certain',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    blog_entry: 'Regrets I have had a few, but then again, too few to mention',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_entry: 'I did what I had to do and saw it through without exemption',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    blog_entry: 'Olha que coisa mas linda mas cheia de graca, e ela menina que vem e que passa',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    blog_entry: 'Num doce balanco caminho do mar',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    blog_entry: 'Mousa do corpo dourado do sol de Ipanema, e seu balancao e mais que um poema',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
