import { useState } from "react";

function RandomNumberGenerator() {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(2);
  const [count, setCount] = useState<number>(1);
  const [winCount, setWinCount] = useState<number>(0);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const generateRandomNumbers = () => {
    const nums: number[] = [];
    setWinCount(0);
    for (let i = 0; i < count; i++) {
      const door = Math.floor(Math.random() * (max - min + 1)) + min;
      const guess = Math.floor(Math.random() * (max - min + 1)) + min;
      // nums.push(num);
      if (door === guess) {
        setWinCount((winCount) => winCount + 1);
      }
    }
    setRandomNumbers(nums);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-300" htmlFor="min">
          Min
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border bg-gray-700 py-2 px-3 leading-tight shadow focus:outline-none"
          id="min"
          type="number"
          value={min}
          onChange={(e) => setMin(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-300" htmlFor="max">
          Max
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border bg-gray-700 py-2 px-3 leading-tight shadow focus:outline-none"
          id="max"
          type="number"
          value={max}
          onChange={(e) => setMax(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-300" htmlFor="count">
          Count
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border bg-gray-700 py-2 px-3 leading-tight shadow focus:outline-none"
          id="count"
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </div>
      <button
        className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
        onClick={generateRandomNumbers}
      >
        Generate
      </button>

      {winCount > 0 && (
        <div className="mt-4">
          <p className="text-lg font-bold">
            Total: {count} Wins: {winCount}, = {(winCount / count) * 100}
          </p>
        </div>
      )}

      {randomNumbers.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-bold">Random Numbers:</p>
          {randomNumbers.length}
          {/* <ul>
            {randomNumbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
