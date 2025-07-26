<template>
    <section class="AboutUs">


        <div class="container">
            <div class="cardContainer">
                <div class="card">
                    <img src="../../images/photo_2023-12-06_18-49-50.jpg" alt="">
                </div>
                <div class="card">
                    <img src="../../images/image_2023-12-06_19-12-49.png" alt="">
                </div>
                <div class="card">
                    <img src="../../images/image_2023-12-06_19-07-49.png" alt="">
                </div>
            </div>
            <div class="about-container">
                <h1 class="about-title">Мои проекты</h1>

                <p>Здесь собраны все мои проекты которые я копил не только во время курсов, но и небольшие внеурочные
                    практики по типу верстки или создание стилей для сайтов.</p>

                <button class="btn">Check more</button>
            </div>

        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.AboutUs {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.623);
    margin-right: auto;
    font-family: "Montserrat", sans-serif;
}

.AboutUs h3 {
    width: 20px;
}

.AboutUs .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.AboutUs .about-container {
    text-align: center;
    width: 30%;
    padding: 20px;
    margin: 0 auto;

}

.AboutUs .about-container h1 {
    text-align: center;
    font-size: xx-large;
    margin-bottom: 4rem;
}

.AboutUs .about-container p {
    padding-bottom: 20px;
    font-size: 24px;
    text-align: left;
}

.AboutUs .about-container button {
    margin-top: 20px;
}

.AboutUs .cardContainer {
    width: 60%;
    display: flex;
    justify-content: space-between;
    background-color: #ffedcc;
    padding: 20px;
    border-radius: 50px;
    transition: all 0.3s linear;
}

.AboutUs .cardContainer:hover {
    background: transparent;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.137);
}

.AboutUs .card {
    width: 50%;
    background-size: cover;
    height: auto;
    margin: 30px 10px;

}

.AboutUs .card img {
    width: 100%;
    border-radius: 10px;
}

.AboutUs .card img:hover {
    transition: all 0.3s ease-in-out;

}

@media (max-width: 767px) {
    .AboutUs {
        
        padding: 0;
    }
    .AboutUs .container {
        display: block;
        
    }
    .AboutUs .cardContainer { 
        width: 100%;
        margin-bottom: 4rem;
        
    }
    .AboutUs .about-container {
        margin: 0;
        width: 100%;
        padding: 0;
        margin-bottom: 4rem;

    }
    .AboutUs .about-container h1 {
        margin-bottom: 20px;
    }
    .AboutUs .about-container p {
        padding: 0;
        margin: 0;
        text-align: justify;
    }

}
</style>