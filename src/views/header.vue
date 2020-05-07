<template>
<header>
    <div id="nav">
        <div id="home"> 
              <router-link to="/">HOME</router-link>
            </div>
            <div id="biography">
              <router-link to="/biography">BIOGRAPHY</router-link>
            </div>
            <div id="contact">
              <router-link to="/contact">CONTACT</router-link>
        </div>
        <div id="categories">
          <router-link to="/categories">WORKARCHIVE</router-link>
        </div>
    </div>     
</header>   
</template>

<script>
    export default {
        data() {
            return {
            title: 'Maria Nisbeth'
            }
        }
    };

</script>

<style lang=scss scoped>
header {
    height: 60px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 99999;
    opacity: 0,5;
    background-color:  #edccb4; 
}

#home, #biography, #contact, #categories {
  width: 200px;
  height: 50px;
  font-size: 0.9em;
  font-weight: 600;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

#nav {
width: 800px;
height: 50px;
padding: 50px 30px 0px 50px;
display: flex;
justify-content: space-evenly;
}

#nav a {
  color: white;
  text-decoration: none;
}

#home:hover, #biography:hover, #contact:hover, #categories:hover {
  color: white;
  font-size: 1em;
  transition: 0.5s;
  text-decoration: underline;
}

/* responsive iphone*/

@media screen and (max-width: 700px){
  header {
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
}

  #nav {
  width: 700px;
  padding: 50px 50px 0px 40px;
  }

}

/* responsive ipad */
@media screen and (min-width: 700px) and (max-width: 1000px){
  header {
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
}

  #nav {
  width: 1000px;
  padding: 50px 50px 0px 40px;
  }
}
</style>