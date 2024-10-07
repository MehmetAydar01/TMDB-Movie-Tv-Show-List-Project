export function voteColors(voteAveragePerc: number): string {
  return voteAveragePerc >= 75
    ? 'border-green-600 border-l-black'
    : voteAveragePerc < 75 && voteAveragePerc >= 60
    ? 'border-yellow-600 border-l-black'
    : voteAveragePerc < 60 && voteAveragePerc >= 50
    ? 'border-blue-600 border-l-black border-b-black'
    : voteAveragePerc > 30 && voteAveragePerc < 50
    ? 'border-gray-600 border-l-black border-b-black'
    : voteAveragePerc === 0
    ? 'border-gray-600'
    : 'border-t-red-600 border-black';
}
