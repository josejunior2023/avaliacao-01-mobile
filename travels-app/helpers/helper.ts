import data from "../services/data";

export const organizeByOrigin = () => {
  const groupedData: { title: string; data: typeof data }[] = [];

  const groups = data.reduce((acc, item) => {
    acc[item.origin] = acc[item.origin] || [];
    acc[item.origin].push(item);
    return acc;
  }, {} as Record<string, typeof data>);

  for (const origin in groups) {
    groupedData.push({
      title: origin,
      data: groups[origin],
    });
  }

  return groupedData;
};
