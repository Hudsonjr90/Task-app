const useDate = (date: string): string => {
  if (!date || typeof date !== 'string') {
    // Tratar o caso em que a data é vazia ou não é uma string
    return '';
  }

  const fullDate: Date = new Date(date.replaceAll("-", "/"));
  const year: number = fullDate.getFullYear();
  const month: number = fullDate.getMonth() + 1;
  const day: number = fullDate.getDate();

  const dateFormated: string =
  day.toString().padStart(2, "0") +
   "/" +
   month.toString().padStart(2, "0") +
   "/" +
   year;

 return dateFormated;
};

export default useDate;
