const serverURL = "http://localhost:5000";

export const apiRequest = (method, route, params) => {
  let currentUser = sessionStorage.getItem("user");
  return new Promise((resolve, reject) => {
    let serviceUrl = serverURL + route;
    /*if (params && params.query) {
      serviceUrl += getQueryString(params.query);
    }*/
    fetch(serviceUrl, {
      method,
      headers: {
        ...(params && params.jsonData && { "Content-Type": "application/json" }),
        ...(currentUser && { Authorization: JSON.parse(currentUser).token }),
      },
      ...(params && {
        ...(params.jsonData && { body: JSON.stringify(params.jsonData) }),
        ...(params.formData && { body: params.formData }),
      }),
    })
      .then((res) => res.json ())
      .then((data) => resolve(data))
      .catch((err) => {
        console.error(`error ${method} ${route}: ${err.message}`);
        reject(err);
      });
  });
};