const Config = {
  filename: './pancakes.txt'
}

//
//  Helper
//

const log = (msg: string) => (obj: NonNullable<any>): NonNullable<any> => {
  console.log(msg, obj)
  return obj
}

const readFileAsString = async (filename: string): Promise<string> => {
  const blob = await Deno.readFile(filename)
  const filedata = new TextDecoder('utf-8').decode(blob)
  return filedata
}

const splitStringByNewlines = (s: string): Array<string> => 
    s.split(/\r?\n/)

const flipPancakes = (index: number, flipWidth: number, list: boolean[]) => {
  const endIndex = index + flipWidth
  if ((endIndex-1) < list.length) {
    const start = list.slice(0, index)
    const flipped =
      list
        .slice(index, endIndex)
        .map(value => !value)
    const rest = list.slice(endIndex)
    const newList = [...start, ...flipped, ...rest]
    return newList
  }
  else {
    return list
  }
}

const calculateFlips = ({ flipWidth, pancakes }: { flipWidth: number, pancakes: boolean[] }) =>
  Array
    .from({length: pancakes.length}, (v, i) => i)
    .reduce(
      (acc, index) => {
        const value = acc.pancakes[index]
        if (value === false) {
          return {
            ...acc,
            pancakes: flipPancakes(index, flipWidth, acc.pancakes),
            flips: acc.flips + 1
          }
        }
        return acc
      }
      , { pancakes, flipWidth, flips: 0 }
    )


//
//  Main
//

const main = async () => {
  const fileContents =
    await readFileAsString(Config.filename)
      .then(splitStringByNewlines)

  if (fileContents.length === 0) {
    console.log("ERR: File is empty")
    Deno.exit(-1)
  }

  // Part of the test, but I don't think I need it..?!
  const numTestCases = Number(fileContents[0])
  if (numTestCases === NaN || numTestCases === 0) {
    console.log("ERR: First line must be only a number and > 0")
    Deno.exit(-1)
  }

  // Get the tests from the file and parse them.
  const testCases =
    fileContents
      .slice(1)
      .map(s => s.split(" "))
      .map(([pancakes, flipWidth]) => ({
        flipWidth: Number(flipWidth),
        pancakes: 
          Array
            .from(pancakes)
            .map(char => char === '+' ? true : false)
      }))
      .filter(
        test => test.pancakes.length > 0 && 
        test.flipWidth !== NaN && 
        test.flipWidth > 0
      )
  // console.log("testCases:", testCases)
  
  // Run the calculation on all tests
  const calculatedTests =
      testCases
        .map(calculateFlips)
        .map(test => ({ 
          ...test, 
          possible: test.pancakes.every(v => v === true) 
        }))
  // console.log("calculatedTests:", testCases)

  // Construct the output.
  const resultOutput =
      calculatedTests
        .map((test, index) => 
          `Case #${index+1}:${test.possible ? test.flips : 'IMPOSSIBLE'}`
        )
        .join('\n')
  console.log(resultOutput)
}

main()