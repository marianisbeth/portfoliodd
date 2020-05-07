<template>
<div>
    <webapp-header id="logoheader" />
<main>
  <div id="section_1">
    <router-link to="/"> Logos </router-link>
  </div>
    <div id="section_2">
      <div id="content_holder">
        <div id="box2">
            <div id="welcome">Esbjerg Krisecenter</div>
            <div id="textbox">
              This logo was made in collaboration with Esbjerg Krisecenter.
              Esbjerg Krisecenter is a temporary home for women who is suffering from domestic violance. 
              I wanted to make a logo that symbolised peace, hope, freedom and a grounded home. 
              Therefor I went with the birds to symbolise peace and freedom. The tree to symbolise groundedness and the green color for hope. <br>
              </div>
        </div>
        <div id="box3">
         <div id="imageholder"></div>
        </div>
    </div>
    </div>
    <div id="section_3"></div>
</main>
<webapp-footer />
</div>
</template>

<script>
import header from '../views/header'
import footer from '../views/footer'

    export default {
        name: 'logos',

        components: {
            'webapp-header':header,
            'webapp-footer':footer
        }
    }

</script>

<style lang="scss" scoped>

#logoheader {
    background-color: #fab48f;
    height: 100px;
}

#section_1 a{
  font-family: 'Dawning of a New Day', cursive;
  font-size: 5em;
  color: white;
  text-decoration: none;
}
#section_1 {
  background-color:  #fab48f;
    height: 150px;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: white;
    margin-bottom: 40px;
}

#section_2 {
  background-color: #fab48f;
    height: 600px;
    display: flex;
    text-align: center;
    justify-content: center;
}

#section_3 {
 background-color:  #fab48f;
    height: 200px;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: white;
}


#content_holder {
   background-color: #edccb4; 
    height: 600px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-flow: column wrap;
    justify-content: space-evenly;
    box-shadow: 14px 14px 10px 0px rgba(0,0,0,0.25);
}

#box2 {
  height: 600px;
  width: 500px;
}

#box3 {
height: 600px;
width: 500px;
}

#imageholder {
  width: 500px;
  height: 600px;
  background-image: url("../assets/logo.svg");
  background-size: cover;
  display: flex;
flex-wrap: wrap;
justify-content: center;
}

#welcome {
  width: 500px;
  height: 250px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2em;
  padding-left: 50px;
  padding-top: 180px;
}

#textbox {
  height: 350px;
  padding-left: 50px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  text-align: justify;
}

main {
    background-color:  #fab48f;
    height: 900px auto;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: black;
}

@media screen and (max-width: 700px){

#section_1 {
    margin-bottom: 40px;
    width: 700px;
}

#section_2 {
    height: 600px;
    width: 700px;
}

#section_3 {
    height: 200px;
    width: 700px;
}


#content_holder {
    height: 500px;
    width: 600px;
}

#box2 {
  height: 500px;
  width: 300px;
}

#box3 {
height: 500px;
width: 300px;
}

#imageholder {
  width: 275px;
  height: 500px;
   background-size: 300px;
   background-position: center;
}

#welcome {
  width: 300px;
  height: 200px;
  font-size: 1.3em;
  padding-top: 150px;
  padding-left: 5px;
}

#textbox {
  padding-top: 0;
  font-size: 0.7em;
  height: 300px;
  text-align: justify;
  padding-left: 25px;
  padding-right: 25px;
}

main {
    width: 700px;
}
}

@media screen and (min-width: 700px) and (max-width: 1000px){
  #section_1 {
    margin-bottom: 40px;
    width: 1000px;
}

#section_2 {
    height: 600px;
    width: 1000px;
}

#section_3 {
    height: 200px;
    width: 1000px;
}


#content_holder {
    height: 600px;
    width: 800px;
}

#box2 {
  height: 600px;
  width: 400px;
}

#box3 {
height: 600px;
width: 400px;
}

#imageholder {
  width: 400px;
  height: 600px;
}

#welcome {
  width: 300px;
  height: 300px;
  font-size: 1.3em;
  padding-top: 220px;
  padding-left: 60px;
}

#textbox {
  padding-top: 0;
  font-size: 0.9em;
  height: 200px;
  text-align: justify;
  padding-left: 25px;
  padding-right: 25px;
}

main {
    width: 1000px;
}
}
</style>