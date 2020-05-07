<template>
<div>
<webapp-header />
<main>
   <div id="section_1">
    <router-link to="/cv"> CV </router-link>
  </div>
    <div id="section_2">
      <div id="content_holder"></div>
        <div id="content_holder2"></div>
    </div>
    <div id="section_3"></div>
    <webapp-footer id="fcv"/>
</main>
</div>
</template>

<script>
    import header from '../views/header'
    import footer from '../views/footer'

    export default {
        name: 'cv',

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
    height: 200px;
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
    height: 600px;
    margin-top: 50px; 
    display: flex;
    text-align: center;
    justify-content: space-around;
    justify-items: center;
    align-content: center;
}

#section_3 {
    background-color: #edccb4; 
    height: 600px;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: white;
}

#content_holder, #content_holder2 {
    height: 900px;
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 14px 14px 10px 0px rgba(0,0,0,0.25);
}

#content_holder {
    background-image: url('../assets/cv.png');
    background-size: cover;
    margin-left: 50px;
}

#content_holder2 {
    background-image: url('../assets/cv2.png');
    background-size: cover;
    margin-right: 50px;
}

main {
    background-color: #edccb4; 
    height: 900px auto;
    text-align: center;
    justify-content: center;
    justify-items: center;
    color: black;
}

#fcv {
    background-color: #edccb4;
}

/* responsive iphone */

@media screen and (max-width: 700px){

#section_1 {
    width: 700px;
    height: 100px;
}

#section_2 {
    width: 700px;
    height: 2000px;
     display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

#section_3 {
    width: 700px;
}   

#content_holder, #content_holder2 {
    height: 900px;
    width: 700px;
    display: flex;
    flex-direction: column;
    flex-wrap: row wrap;
    box-shadow: 14px 14px 10px 0px rgba(0,0,0,0.25);
}

#content_holder {
    background-image: url('../assets/cv.png');
    background-size: contain;
    background-position: center;
    margin-left: 0px;
}

#content_holder2 {
    background-image: url('../assets/cv2.png');
    background-size: contain;
    margin-right: 0px;
    margin-top: 50px;
    background-position: center;
}

main {
    width: 700px;
}
}

 /* responsive ipad */

    @media screen and (min-width: 700px) and (max-width: 1000px){
    
    #section_1 {
    width: 1000px;
    height: 100px;
}

#section_2 {
    width: 1000px;
    height: 2000px;
     display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

#section_3 {
    width: 1000px;
}

#content_holder, #content_holder2 {
    height: 900px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    flex-wrap: row wrap;
    box-shadow: 14px 14px 10px 0px rgba(0,0,0,0.25);
}

#content_holder {
    background-image: url('../assets/cv.png');
    background-size: contain;
    background-position: center;
    margin-left: 0px;
}

#content_holder2 {
    background-image: url('../assets/cv2.png');
    background-size: contain;
    margin-right: 0px;
    margin-top: 50px;
    background-position: center;
}

main {
    width: 1000px;
}
    }

</style>