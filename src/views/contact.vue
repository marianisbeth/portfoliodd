<template>
<div>
<webapp-header />
<main>
   <div id="section_1">
    <router-link to="/contact"> Contact </router-link>
  </div>
    <div id="section_2">
      <div id="content_holder">
      </div>
      <a href="mailto:maria.nisbeth@gmail.com"><div id="bubbel"></div></a>  
    </div>
    <div id="section_3"></div>
    <webapp-footer id="fcontact"/>
</main>
</div>
</template>

<script>
import header from '../views/header'
import footer from '../views/footer'

    export default {
        name: 'contact',

        components: {
            'webapp-header':header,
            'webapp-footer':footer
        }
    }

</script>

<style lang="scss" scoped>

#section_1 a {
  font-family: 'Dawning of a New Day', cursive;
  font-size: 5em;
  color: white;
  text-decoration: none;
}

#section_1 {
    background-color: #edccb4; 
    height: 100px;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: white;
    margin-bottom: 60px;
    padding-top: 50px;
    display: flex;
    align-items: flex-start;
    }

#section_2 {
    background-color: #edccb4; 
    background-size: 300px;
    height: 600px;
    padding-top: 50px;
    margin-left: 125px;
    display: flex;
    text-align: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
}

#bubbel {
    background-image: url('../assets/talebobbel.svg');
    background-position: right top;
    height: 400px;
    width: 400px;
    margin-top: -120px;
    margin-left: -300px;
    background-size: 300px;
}

#section_2 img {
    position: absolute;
    z-index: -1;
}

#section_3 {
    background-color: #edccb4; 
    height: 300px;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: white;
}

#content_holder {
   background-image: url('../assets/contact.svg');
   background-size: cover;
    height: 500px;
    width: 800px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 14px 14px 10px 0px rgba(0,0,0,0.25);

}

main {
    background-color: #edccb4; 
    height: 900px;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: black;
}

#fcontact {
    background-color: #edccb4;
}

/*iphone responsive*/ 
 @media screen and (max-width: 700px){

#section_1 {
    width: 700px;
    height: 200px;
    }

#section_2 { 
    background-size: 300px;
    height: 600px;
    padding-top: 50px;
    margin-left: 0px;
    width: 700px;
}

#bubbel {
    background-position: right top;
    background-size: cover;
    height: 200px;
    width: 200px;
    margin-top: -120px;
    margin-left: -150px;
}

#section_2 img {
    z-index: -1;
}

#section_3 {
    height: 300px;
    width: 700px;
}

#content_holder {
    height: 325px;
    width: 500px;
    margin-left: 20px;
}

main { 
    height: 1000px;
    width: 700px;
  }
}
 
  /* responsive ipad */

@media screen and (min-width: 700px) and (max-width: 1000px){
    #section_1 {
    width: 1000px;
    height: 200px;
    }

#section_2 { 
    background-size: 300px;
    height: 600px;
    padding-top: 50px;
    margin-left: 0px;
    width: 1000px;
}

#bubbel {
    background-position: right top;
    background-size: cover;
    height: 300px;
    width: 300px;
    margin-top: -120px;
    margin-left: -250px;
}

#section_2 img {
    z-index: -1;
}

#section_3 {
    height: 300px;
    width: 1000px;
}

#content_holder {
    height: 500px;
    width: 800px;
    margin-left: 40px;
}

main { 
    height: 1000px;
    width: 1000px;
}
}
</style>