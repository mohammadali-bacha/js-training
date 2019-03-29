/*
Example of async/await use case
*/

(async function() {
    let expectation = await fetch('/')
    console.log(await expectation.text())
  })()

  


(async () => {
  try {
    const res = await fetch('//api.github.com/users/lquixada');

    if (res.status >= 400) {
      throw new Error("error");
    }

    const user = await res.json();

    console.log(user);
  } catch (err) {
    console.error(err);
  }
})();