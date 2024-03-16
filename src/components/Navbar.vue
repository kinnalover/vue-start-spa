<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My app</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <navbar-link v-for="(page, index) in publishedPages" class="nav-item" :key="index" :index="index"
                    :page="page" ></navbar-link>

                <li>
                    <router-link to="/create" class="nav-link"  aria-current="page"
                    active-class="active"
                        >Create Page</router-link>
                </li>

            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle

                </button>
            </form>

        </div>

    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components: {
        NavbarLink
    },
    created() {
        this.getThemeSetting();
        this.pages = this.$pages.getAllPages();
    },
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published);
        }

    },

    
    data() {
        return {
            theme: 'light',
            data: [],
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light';
            console.log('activePage' + this.activePage)
            if (this.theme == 'light') {
                theme = 'dark';
            }
            this.theme = theme;
            this.storeThemeSetting();

        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme');
            if (theme) {
                this.theme = theme;
            }
        },
    }

}
</script>
