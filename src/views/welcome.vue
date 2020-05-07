<template>
<main>
  <div id="section_1">
    <router-link to="/"> Maria Nisbeth </router-link>
  </div>
    <div id="section_2">
      <div id="content_holder">
        <div id="box1">
          <div id="navigation">
            <div id="workArchive"> 
              <router-link to="/categories">WORK ARCHIVE</router-link>
            </div>
            <div id="biography">
              <router-link to="/biography">BIOGRAPHY</router-link>
            </div>
            <div id="contact">
              <router-link to="/contact">CONTACT</router-link>
            </div>
          </div>
        </div>
        <div id="box2">
           <div id="introduction">
            <div id="welcome">WELCOME</div>
            <div id="textbox">
              Thank you for taking the time to click onto my portfolio. <br>
              If you browse around, you will find my workarchive, contact information and a biography to get to know me better! <br>
              3 words that descripe my style: <br>
              Simplistic, modern and minimalistic. <br>
              Hope you have a great look around, can't wait to hear from you!
              </div>
          </div>
        </div>
        <div id="box3">
         <div id="imageholder">

         </div>
        </div>
       
      </div>
    </div>
    <div id="section_3">
    
    </div>
    <webapp-footer/>
</main>
</template>

<script>
import footer from '../views/footer.vue'

     export default {
       name: 'content',

     components: {
            'webapp-footer':footer
        }
     }

</script>

<style lang="scss" scoped>

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
  display: flex;
  align-items: flex-start;
}

#section_3 {
  background-color:  #fab48f;
    height: 400px;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: white;
}

#section_2 {
  background-color: #fab48f;
    height: 370px;
    display: flex;
    text-align: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
}

#content_holder {
   background-color: #edccb4; 
    height: 600px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 14px 14px 10px 0px rgba(0,0,0,0.25);
}

#box2 {
  height: 500px;
  width: 500px;
}

#box3 {
height: 600px;
width: 500px;
display: flex;
align-items: stretch;
align-content: center;
}

#imageholder {
  width: 500px;
  height: 600px;
  background-image: url("../assets/lady3.svg");
  background-size: 700px;
  display: flex;
  align-self: flex-start;
}

#navigation {
width: 500px;
height: 100px;
padding: 50px 30px 0px 50px;
display: flex;
justify-content: space-between;
}

#navigation a {
  color: white;
  text-decoration: none;
}

#workArchive, #biography, #contact {
  width: 166px;
  height: 100px;
  font-size: 0.9em;
  font-weight: 600;
  background-color: #edccb4; 
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

#workArchive {
  margin-right: 15px;
}

#workArchive:hover, #biography:hover, #contact:hover {
  color: white;
  font-size: 1em;
  transition: 0.5s;
  text-decoration: underline;
}

#introduction {
width: 500px;
height: 450px !important;
padding: 0px 30px 0px 30px;
display: flex;
flex-wrap: wrap;
justify-content: center;
}

#welcome {
  width: 500px;
  height: 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2em;
  padding-top: 70px;
}

#textbox {
  height: 300px;
  padding-top: 20px;
  font-family: 'Montserrat', sans-serif;
}

main {
    background-color:  #fab48f;
    height: 600px;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: black;
}

@media screen and (max-width: 700px){

#section_1 {
  width: 700px;
}

#section_3 {
    width: 700px;
}

#section_2 {
    width: 700px;
}

#content_holder {
    height: 400px;
    width: 600px;
}

#box2 {
  height: 350px;
  width: 300px;
  text-align: center;
}

#box3 {
height: 400px;
width: 300px;
}

#imageholder {
  width: 300px;
  height: 400px;
  background-size: 400px;
}

#navigation {
width: 300px;
height: 50px;
padding: 10px 10px 0px 15px;
}

#workArchive, #biography, #contact {
  width: 100px;
  height: 40px;
  font-size: 0.7em;
}

#workArchive {
  margin-right: 0px;
}

#biography {
  padding-left: 10px;
}

#introduction {
width: 300px;
height: 300px;
}

#welcome {
  width: 300px;
  height: 50px;
  font-size: 1.3em;
  padding-top: 40px;
}

#textbox {
  height: 300px;
  padding-top: 0px;
  padding-bottom: 20px;
  font-size: 0.9em;
}

main {
    height: 900px auto;
    width: 700px;
}
}

@media screen and (min-width: 700px) and (max-width: 1000px){
  #section_1 {
  width: 1000px;
}

#section_3 {
    width: 1000px;
}

#section_2 {
    width: 1000px;
}

#content_holder {
    height: 500px;
    width: 900px;
}

#box2 {
  height: 400px;
  width: 450px;
}

#box3 {
height: 500px;
width: 450px;
}

#imageholder {
  width: 450px;
  height: 500px;
  background-size: 400px;
}

#navigation {
width: 450px;
height: 100px;
padding: 30px 10px 0px 30px;
}

#workArchive, #biography, #contact {
  width: 100px;
  height: 40px;
  font-size: 0.7em;
}

#workArchive {
  margin-right: 0px;
}

#biography {
  padding-left: 10px;
}

#introduction {
width: 450px;
height: 350px;
}

#welcome {
  width: 450px;
  height: 50px;
  font-size: 1.4em;
  padding-top: 20px;
}

#textbox {
  height: 300px;
  padding-top: 30px;
  font-size: 1em;
}

main {
    height: 900px auto;
    width: 1000px;
}
}

</style>