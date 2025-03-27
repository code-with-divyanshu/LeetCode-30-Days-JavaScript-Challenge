//  Approach 1: Using await with setTimeout() (Alternative Approach)

async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

let t1 = Date.now();
sleep(100).then(() => console.log(Date.now() - t1)); // 100

// Approach 2: Using Explicit reject Parameter (Main Code 🚀)

async function sleep(millis) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
}

let t2 = Date.now();
sleep(200).then(() => console.log(Date.now() - t2)); // 200
