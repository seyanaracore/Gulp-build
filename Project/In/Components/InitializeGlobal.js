export const initializeMethods = (methodsList) => {
   for (let method of methodsList) {
      window[method.name] = method;
   }
};

export const initializeClass = (classList) => {
   for (let item of classList) {
      window[item.name] = new item();
   }
};
