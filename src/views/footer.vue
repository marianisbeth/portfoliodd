<template>
<footer>
    <div id="fill">

    </div>
    <div id="sociallink">
        <a target="_blank" href="https://www.instagram.com/designbynisbeth/"><i class="fab fa-instagram"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/marianisbeth/"><i class="fab fa-linkedin"></i></a>
    </div>
</footer>
</template>

<script>
    export default {
        data() {
            return {
            title: 'Footer'
            }
        }
    }

</script>

<style lang="scss" scoped>
footer {
    background-color: #fab48f; 
    padding: 10px;
    height: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
    color: white;
}

#fill {
    display: flex;
    flex-grow: 11;
}

#sociallink {
    display: flex;
    align-items: right;
    justify-content: space-around;
    flex-grow: 1;
    margin-left: 550px;
}


#sociallink i {
    color: white;
    font-size: 2em;
}

@media screen and (max-width: 700px){
   footer {
    width: 700px;
} 

@media screen and (min-width: 700px) and (max-width: 1000px){
    footer {
    width: 1000px;
} 
}
}
</style>