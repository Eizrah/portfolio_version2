<template>
  <footer>
    <h3>F.Eizrah</h3>
    <p>
      Jeune développeur fullstack & mobil fraichement diplomé, passionné par la
      création d'application innovantes.
    </p>
    <ul>
      <li>
        <button>
          <font-awesome-icon icon="fa-brands fa-github" />
        </button>
      </li>

      <li>
        <button>
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </button>
      </li>

      <li>
        <button>
          <font-awesome-icon icon="fa-brands fa-whatsapp" />
        </button>
      </li>

      <li>
        <button>
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </button>
      </li>
    </ul>
    <div class="barVide">
      <hr />
    </div>
    <p class="copyright">
      &copy; {{ new Date().getFullYear() }} VotreEntreprise. Tous droits
      réservés.
    </p>
  </footer>
</template>

<style scoped>
  hr{
    opacity: 0.5;
  }
.barVide {
  width: 90%;
  margin: 0 auto;
}
.copyright {
  margin-bottom: 10px;
}

footer {
  background-color: #111827;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.9rem;
  text-align: center;
  overflow: hidden;
  /* padding-right: 1rem; */

}
/* Réduire l'espace sous la description */
footer > p:nth-of-type(1) {
    margin: 5px 0 10px;
}


h3 {
   margin: 10px 0 0; 


  font-size: 1.2rem;
  color: #9394fb;
}

ul {
  padding: 0;
   margin: 10px 0; 

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

ul li {
  list-style: none;
  display: flex;
  margin: 0;
}

ul li button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

ul li button:hover {
  color: #007bff;
  transform: scale(1.1);
  transition: all 0.3s ease;
}

ul li button:active {
  color: #007bff;
  transform: scale(0.9);
  transition: all 0.3s ease;
}
</style>
