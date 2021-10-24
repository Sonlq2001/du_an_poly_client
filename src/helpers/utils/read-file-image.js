export const readFileImage = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      if (!e.target || !e.target.result) {
        reject(new Error());
        return;
      }
      resolve(e.target.result);
    };
    fileReader.readAsText(file);
  });
};
