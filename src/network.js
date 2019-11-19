const responseParse = async response => {
  return {
    statusCode: response.status,
    statusText: response.statusText,
    response: await response.json()
  };
};

export const getter = (url, successCB, failureCB) => {
  fetch(url, {
    method: "GET"
  })
    .then(response => {
      return responseParse(response);
    })
    .then(jsonResponse => {
      if (/20[0-6]/.test(jsonResponse.statusCode)) {
        //successfull
        successCB(jsonResponse.response);
      } else {
        failureCB(jsonResponse.statusText);
      }
    })
    .catch(error => {
      failureCB(error);
    });
};

export const poster = (url, body, successCB, failureCB) => {
  fetch(url, { method: "POST", body: JSON.stringify(body) })
    .then(response => {
      return responseParse(response);
    })
    .then(jsonResponse => {
      if (/20[0-6]/.test(jsonResponse.statusCode)) {
        //successfull
        successCB(jsonResponse.response);
      } else {
        failureCB(jsonResponse.statusText);
      }
    })
    .catch(error => {
      failureCB(error);
    });
};
