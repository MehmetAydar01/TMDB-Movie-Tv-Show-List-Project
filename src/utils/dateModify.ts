type DateModifyFunc = {
  getYear: number;
  shortMonthName: string;
  monthNumber: string;
};

export function dateModify(releaseDate: string): DateModifyFunc {
  const getDateData = new Date(releaseDate);
  const shortMonthName = getDateData
    .toLocaleString('en-US', { month: 'long' })
    .slice(0, 3);
  const monthNumber = getDateData.toLocaleString('en-US', {
    month: '2-digit',
  });
  const getYear = getDateData.getFullYear();

  return { getYear, shortMonthName, monthNumber };
}
