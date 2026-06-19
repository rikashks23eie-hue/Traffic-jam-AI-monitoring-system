const http = require('http');

const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

async function test() {
  try {
    console.log("Fetching Registry:");
    const reg = await makeRequest('http://localhost:5000/api/registry/9043475616');
    console.log(JSON.stringify(reg, null, 2));

    console.log("\nFetching Violations:");
    const vios = await makeRequest('http://localhost:5000/api/violations?phone=9043475616');
    console.log(JSON.stringify(vios, null, 2));

    console.log("\nFetching Notifications:");
    const notifs = await makeRequest('http://localhost:5000/api/notifications?email=9043475616');
    console.log(JSON.stringify(notifs, null, 2));
  } catch (err) {
    console.error(err);
  }
}

test();
