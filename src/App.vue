<template>
  <div id="wrapper">
    <nav class="navbar is-dark"  role="navigation" aria-label="dropdown navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Gestion Documental</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

     <div class="navbar-menu" id="navbar-menu">
       <div class="navbar-end">
         <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Tpos de Documentos
            </a>

            <div class="navbar-dropdown">
              <router-link to="/revistas" class="navbar-item " >Revistas</router-link>
              <router-link to="/iconografias" class="navbar-item">Iconografias</router-link>
              <router-link to="/monografias" class="navbar-item">Monografias</router-link>
              <router-link to="/ensayos" class="navbar-item">Ensayos</router-link>
              <router-link to="/investigaciones" class="navbar-item">Investigaciones</router-link>
              <router-link to="/electronicos" class="navbar-item">Libros Electronicos</router-link>
            </div>
            <div class="navbar-item">
                <div class="buttons">
                  <router-link to="/log-in" class="button is-ligth">Log in</router-link>

                  <router-link to="/cart" class="buttis is-success">
                    <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                  </router-link>
                </div>
            </div>
        </div>
       </div>
     </div>
    </nav>
     <router-view/>
  </div>

</template>

<style lang="scss">
@import '../node_modules/bulma';
</style>

