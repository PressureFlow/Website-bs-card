<template>
    <div>
        <div class="container-technologies js-technologies">
            <h1>База JS
                <Vue3Lottie :animationData="JSicon" :height="50" :width="50" :noMargin="true" />
            </h1>



            <div class="js-t-content">
                <div class="js-images-content">
                    <div class="js-image-card">
                        <img src="../../../images/tic-tac-toe/tic-tac-toe.png" alt="">
                    </div>
                    <div class="js-image-card">
                        <img src="../../../images/tic-tac-toe/tic-tac-toe-style.png" alt="">
                    </div>
                    <div class="js-image-card">
                        <img src="../../../images/tic-tac-toe/tic-tac-toe-script.png" alt="">
                    </div>

                </div>
            </div>
        </div>

        <div class="container-technologies react-technologies">
            <h1>Фреймворк React
                <Vue3Lottie :animationData="JSREACTicon" :height="50" :width="50" :noMargin="true" />
            </h1>

            <div class="react-t-content">

            </div>
        </div>

        <div class="container-technologies vue-technologies">
            <h1>Фреймворк Vue <img src="../../../images/icons8-vue-js.svg" alt=""></h1>

            <div class="vue-t-content">

            </div>
        </div>


    </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

import JSicon from '../../../images/icons8-js.json'
import JSREACTicon from '../../../images/icons8-react-native.json'

export default {
    components: {
        Vue3Lottie,
    },
    data() {
        return {
            JSicon,
            JSREACTicon,
        }
    },
}

</script>

<style>

</style>