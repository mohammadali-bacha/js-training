(async function() {
    let attente = await fetch('/')
    console.log(await attente.text())
  })()

  


(async () => {
  try {
    const res = await fetch('//api.github.com/users/lquixada');

    if (res.status >= 400) {
      throw new Error("erreur");
    }

    const user = await res.json();

    console.log(user);
  } catch (err) {
    console.error(err);
  }
})();