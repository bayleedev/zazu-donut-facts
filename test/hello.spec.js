const expect = require('chai').expect
const donut = require('../src/generateDonutFact')()

describe('Generate Donut Fact', () => {
  it('gets a random donut fact', () => {
    return donut().then((facts) => {
      expect(facts.length).to.eq(1)
      expect(facts[0].title).to.eq(facts[0].value)
    })
  })

  it('can generate 1000 valid donut facts', () => {
    const donuts = []
    for (let i = 0; i < 1000; i++) {
      donuts.push(donut())
    }
    expect(donuts.length).to.eq(1000)
    return Promise.all(donuts).then((donuts) => {
      donuts.forEach((facts) => {
        expect(facts.length).to.eq(1)
        expect(facts[0].title.length).to.gt(5)
      })
    })
  })

  it('can generate more than one donut fact', () => {
    const donuts = []
    const expectedDonutFacts = 5
    for (let i = 0; i < 1000; i++) {
      donuts.push(donut())
    }
    expect(donuts.length).to.eq(1000)
    return Promise.all(donuts).then((donuts) => {
      const uniqueFacts = donuts.reduce((uniqueFacts, newFacts) => {
        const newFact = newFacts[0].title
        if (!uniqueFacts.includes(newFact)) {
          uniqueFacts.push(newFact)
        }
        return uniqueFacts
      }, [])
      expect(uniqueFacts.length).to.be.eq(expectedDonutFacts)
    })
  })
})
