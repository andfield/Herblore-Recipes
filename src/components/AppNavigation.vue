<template>
        <span>
        <v-navigation-drawer app v-model="drawer" color="#4db8ff lighten-3" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            <v-btn block="item.route">{{item.title}}</v-btn>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="indigo">
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/" class="display-2 white--text">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in">SIGN IN</v-btn>
                <v-btn to="/join">JOIN</v-btn>
            </div>
            <div v-else>
                <v-btn flat to="/about">PROFILE</v-btn>
                <v-btn outline color="white" @click="logout">Logout</v-btn>
            </div>

        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Herblore Recipes',
            drawer: false,
            items: [{ title: 'Menu', route: '/menu' },  {title: 'My Recipes', route: '/about'}]
        };
    },
    computed: {
        isAuthenticated(){
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>