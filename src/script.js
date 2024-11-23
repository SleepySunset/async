function mocker(data) {
    return function () {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1000); 
      });
      return promise; 
    };
  }
  