const donuts = [
  'Donuts built the pyramids.',
  'Donut people live in the NY sewers.',
  'The world isn\'t flat or round, it\'s donut.',
  'DonutScript compiles to Java, not JavaScript.',
  'Portland has an underground donut bar.',
  'The world is ran by a group of donuts.',
  'NASA never landed on the donut.',
  'Donuts wiretapped Trump first.',
  'UFOs are just our Donut overlords.',
]
const randDonut = () => {
  const index = Math.round(Math.random() * 1000) % donuts.length
  return donuts[index]
}
module.exports = (pluginContext) => {
  return () => {
    const donut = randDonut()
    const donutIndex = donuts.indexOf(donut) * 5 + 1234
    return Promise.resolve([{
      title: donut,
      subtitle: 'Donut Fact #' + donutIndex,
      value: donut,
      icon: 'logo.svg',
    }])
  }
}
