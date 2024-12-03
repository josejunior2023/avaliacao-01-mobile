import data from "../services/data";

export const organizeByCountry = () => {
  const groupedData: { title: string; data: typeof data }[] = [];

  const groups = data.reduce((acc, item) => {
    acc[item.origin] = acc[item.origin] || [];
    acc[item.origin].push(item);

    acc[item.destination] = acc[item.destination] || [];
    acc[item.destination].push(item);

    return acc;
  }, {} as Record<string, typeof data>);

  const sortedCountries = Object.keys(groups).sort((a, b) =>
    a.localeCompare(b)
  );

  sortedCountries.forEach((country) => {
    const sortedPassengers = groups[country].sort((a, b) =>
      a.passenger_name.localeCompare(b.passenger_name)
    );
    groupedData.push({
      title: country,
      data: sortedPassengers,
    });
  });

  return groupedData;
};
