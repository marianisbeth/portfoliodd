<template>
    <main>
  <div id="section_1">
    <router-link to="/"> Maria Nisbeth </router-link>
    <div id="dame1"></div>
  </div>
    <div id="section_2">
      <div id="content_holder">
        <div id="box1">
          <div id="navigation">
            <div id="home"> 
              <router-link to="/">HOME</router-link>
            </div>
            <div id="workarchive">
              <router-link to="/categories">WORKARCHIVE</router-link>
            </div>
            <div id="contact">
              <router-link to="/contact">CONTACT</router-link>
            </div>
            <div id="cv">
              <router-link to="/cv">CV</router-link>
            </div>
          </div>
        </div>
        <div id="box2">
           <div id="introduction">
            <div id="welcome">So who am I?</div>
            <div id="textbox">
              My name is Maria Nisbeth. I am 25 years old and live in Esbjerg, Denmark with my boyfriend.<br>
              I have always been a creative person and I love to challenge myself with new assignments. <br>
              I see myself as highly motivated, with an eager to learn, driven by passion of astetics and modern digital design. <br> 
              Always trying to keep the job/costumer in mind to make the most personalized product possible.<br>
              <br>
              Take a look at my video CV further down this page. 
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
      <p>Video CV</p>
      <div id="video">
          <iframe width="600" height="400"
            src="https://www.youtube.com/embed/=J1e-2cYEpRs">
          </iframe>
      </div>
    </div>
    <webapp-footer/>
</main>
</template>

<script>
import footer from '../views/footer.vue'

    export default {
        name: 'biography',

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
}

#section_3 {
  background-color:  #fab48f;
    height: 800px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-image: url("../assets/lady3.svg");
    background-size: 700px;
}

p {
  height: 100px;
  display: flex;
  align-items: flex-start;
  font-family: 'Dawning of a New Day', cursive;
  color: white;
  text-decoration: none;
  font-size: 5em;
}

#section_1 {
  background-color: #fab48f;
  display: flex;
  align-items: flex-start;
}

#section_2 {
 
    height: 600px;
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

#box1 {
  height: 200px;
  width: 500px;
}

#box2 {
  height: 400px;
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
  background-image: url("../assets/mig.png");
  background-size: cover;
  display: flex;
  align-self: flex-start;
}

#navigation {
width: 500px;
height: 100px;
padding: 50px 50px 50px 50px;
display: flex;
flex-direction: row;
align-content: space-evenly;
justify-content: space-evenly;
}

#navigation a {
  color: white;
  text-decoration: none;
}

#home, #workarchive, #contact {
  width: 300px;
  height: 100px;
  font-size: 0.9em;
  font-weight: 600;
  background-color: #edccb4; 
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  align-content: space-evenly;
  justify-content: space-evenly;
  }

#workarchive {
  margin-right: 15px;
}

#cv {
  width: 100px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9em;
  font-weight: 600;
}

#home:hover, #workarchive:hover, #contact:hover, #cv:hover {
  color: white;
  font-size: 1em;
  transition: 0.5s;
  text-decoration: underline;
}

#introduction {
width: 500px;
height: 300px;
padding: 0px 30px 0px 50px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

#welcome {
  width: 500px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2em;
}

#textbox {
  height: 250px;
  padding-top: 20px;
  font-family: 'Montserrat', sans-serif;
}

main {
    background-color:  #fab48f;
    height: 900px auto;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: black;
}

/*iphone responsive*/

@media screen and (max-width: 700px) {
#section_1 {
    width: 700px;
}

#section_3 {
    height: 800px;
    width: 700px;
    background-size: 400px;
    background-position: bottom left;
}

p {
  height: 100px;
  font-size: 5em;
}

#section_2 {
 
    height: 400px;
    width: 100%;
}

#content_holder {
    height: 400px;
    width: 600px;
}

#box1 {
  height: 100px;
  width: 300px;
}

#box2 {
  height: 300px;
  width: 300px;
}

#box3 {
height: 400px;
width: 300px;
}

#imageholder {
  width: 300px;
  height: 400px;
}

#navigation {
width: 300px;
}

#home, #workarchive, #contact, #cv {
  height: 20px;
  width: 300px;
  font-size: 0.7em;
  }

#introduction {
width: 300px;
height: 300px;
}

#welcome {
  width: 300px;
  height: 50px;
  font-size: 1.5em;
}

#textbox {
  padding-top: 5px;
  font-size: 0.7em;
}

main {
    width: 700px;
}
}

/*ipad responsive*/

@media screen and (min-width: 700px) and (max-width: 1000px) {
  #section_1 {
    width: 1000px;
}

#section_3 {
    height: 800px;
    width: 1000px;
    background-size: 400px;
    background-position: bottom left;
}

p {
  height: 100px;
  font-size: 5em;
}

#section_2 {
 
    height: 400px;
    width: 1000px;
}

#content_holder {
    height: 500px;
    width: 800px;
}

#box1 {
  height: 100px;
  width: 400px;
}

#box2 {
  height: 400px;
  width: 400px;
}

#box3 {
width: 400px;
height: 500px;
}

#imageholder {
  width: 300px;
  height: 500px;
}

#navigation {
width: 400px;
}

#home, #workarchive, #contact, #cv {
  height: 20px;
  width: 400px;
  font-size: 0.8em;
  }

#introduction {
width: 400px;
height: 350px;
}

#welcome {
  width: 300px;
  padding-top: 30px;
  height: 50px;
  font-size: 1.5em;
}

#textbox {
  padding-top: 5px;
  font-size: 0.85em;
  text-align: justify;
}

main {
    width: 1000px;
}
}

</style>