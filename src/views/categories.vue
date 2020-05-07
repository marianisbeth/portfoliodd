<template>
    <div>
        <webapp-header />
            <main id="workarchive">
                <div id="headline">
                    <router-link to="/categories"> 
                    My work in categories <br>
                    </router-link>
                </div>
                 <div id="myWork">
                    <div id="column1">
                        <router-link to="/logos">
                        <div id="pic1"></div>
                        </router-link>

                        <router-link to="/posters">
                        <div id="pic2"></div>
                        </router-link>
                    </div>
                    <div id="column2">
                        <router-link to="/invites">
                        <div id="pic3"></div>
                        </router-link>

                        <router-link to="/elements">
                        <div id="pic4"></div>
                        </router-link>
                    </div>
                    <div id="column3">
                        <router-link to="/doubleexposures">
                        <div id="pic5"></div>
                        </router-link>

                        <router-link to="/photographs">
                        <div id="pic6"></div>
                        </router-link>
                    </div>
                </div>
            </main>
        <webapp-footer id="fc" />
    </div>
</template>

<script>
import header from '../views/header.vue'
import footer from '../views/footer.vue'

    export default {
        name: 'workarchive',

        components: {
            'webapp-header':header,
            'webapp-footer':footer
        }
    }
</script>

<style lang="scss" scoped>

    #headline a {
        font-family: 'Dawning of a New Day', cursive;
        font-size: 5em;
        color: white;
        text-decoration: none;
    }

    #headline {
        background-color:  #edccb4; 
        height: 300px;
        padding-top: 60px;
        text-align: center;
        justify-content: center;
        justify-items: center;
        color: white;
    }

    #workarchive {
        background-color:  #edccb4; 
        height: 3000px auto;
        display: flex;
        flex-flow: row wrap;
        text-align: center;
        justify-content: center;
        justify-items: center;
        color: black;
    }

    #myWork {
        height: 1500px;
        width: 1500px;
        background-color: #edccb4; 
        display: flex;
        align-content: center;
        justify-content: center;
        }

    #column1, #column3 {
        height: 1200px;
        width: 400px;
        background-color: #edccb4; 
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
    }

    #column2 {
        height: 1500px;
        width: 400px;
        padding-top: 250px;
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
        background-color: #edccb4; 
    }

    #pic1, #pic2, #pic3, #pic4, #pic5, #pic6 {
        height: 500px;
        width: 350px;
        background-color: #f7b490;
        box-shadow: 0px -1px 19px -2px rgba(0,0,0,0.67);
        display: flex;
        flex-flow: row wrap;
        text-align: center;
        justify-content: center;
        justify-items: center;
        align-content: center;
    }

    #pic1 {
        background-image: url("../assets/logos.svg");
        background-size: cover;
        background-position: center;
    }

     #pic2 {
        background-image: url("../assets/posters.svg");
        background-size: cover;
        background-position: center;
    }

     #pic3 {
        background-image: url("../assets/invites.svg");
        background-size: cover;
        background-position: center;
    }

     #pic4 {
        background-image: url("../assets/elements.svg");
        background-size: cover;
        background-position: center;
    }

     #pic5 {
        background-image: url("../assets/doubleexposures.svg");
        background-size: cover;
        background-position: center;
    }

     #pic6 {
        background-image: url("../assets/photographs.svg");
        background-size: cover;
        background-position: center;
    }

    #pic1:hover, #pic2:hover, #pic3:hover, #pic4:hover, #pic5:hover, #pic6:hover {
        opacity: 0.3;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    #fc {
        background-color: #edccb4;
    }
 
 /*iphone responsive*/ 
 @media screen and (max-width: 700px){
     #headline {
        height: 100px;
        width: 700px;
    }

    #workarchive {
        height: 1400px;
        width: 700px;
    }

    #myWork {
        height: 800px;
        width: 700px;
        }

    #column1, #column3 {
        height: 900px;
        width: 233.33px;
    }

    #column2 {
        height: 1100px;
        width: 233.33px;
    }

    #pic1, #pic2, #pic3, #pic4, #pic5, #pic6 {
        height: 350px;
        width: 200px;
    }

    main {
        height: 1200px;
    }
 }

    /* responsive ipad */

    @media screen and (min-width: 700px) and (max-width: 1000px) {
    
    #headline {
        height: 300px;
        width: 1000px;
    }

    #workarchive {
        height: 2000px;
        width: 1000px;
    }

    #myWork {
        height: 1500px;
        width: 1000px;
        }

    #column1, #column3 {
        height: 900px;
        width: 333.33px;
    }

    #column2 {
        height: 1100px;
        width: 333.33px;
    }

    #pic1, #pic2, #pic3, #pic4, #pic5, #pic6 {
        height: 400px;
        width: 300px;
    }
    }
</style>