<template>
    <v-container fluild fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
                <div class="display-4 font-weight-black white--text text-xs-center">Herblore Recipes</div>
                <div
                    class="display-4 font-weight-black white--text text-xs-center mb-3"
                >Get Healthier</div>
                <div
                    class="display-1 font-weight-bold white--text text-xs-center"
                >Finally be a foodie and maintain weight, With food recipes for all dieting practices.</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('../assets/img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    overflow: visible;
}

</style>