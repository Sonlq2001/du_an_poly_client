export const MapOptions = (array) => {
  if (Array.isArray(array)) {
    const handleResult = array.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return handleResult;
  }
};
export const MapOptionsCampuses = (array) => {
  if (Array.isArray(array)) {
    const handleResult = array.map((item) => ({
      label: item.name,
      value: item.code,
    }));
    return handleResult;
  }
};
export const MapOptionsLong = (array) => {
  if (Array.isArray(array)) {
    const handleResult = array.map((item) => ({
      label: `${item.name.length > 22 ?    item.name.slice(0,20)+ "..." : item.name} `,
      value: item.id,
    }));
    return handleResult;
  }
};