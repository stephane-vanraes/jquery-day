export const dayCalc = (library, reference) => {
    console.log(library, reference);
    let days = Math.round(
      (library.getTime() - reference.getTime()) / (1000 * 3600 * 24)
    );
    let date = new Date(library);
    date.setDate(date.getDate() + days);

    return date;
};
