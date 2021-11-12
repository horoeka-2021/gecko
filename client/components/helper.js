// takes in the response from gecko, which is an array of objects, where each object is a coin.
// it searches the array until it finds bitcoin, and returns the bitcoin object.
export function findCoin (res, coinSearched) {
  console.log('findCoin, res: ', res)
  console.log('findCoin, coinSearched: ', coinSearched)
  return res.find(coin => coin.name === coinSearched)
}
