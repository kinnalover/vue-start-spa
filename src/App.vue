<template>
    <navbar :pages="pages" :activate-page="activePage" :nav-link-click="(index) => activePage = index"></navbar>
    <page-viewer :page="pages[activePage]"> </page-viewer>
</template>

<script>
import PageViewer from './components/PageViewer.vue';
import Navbar from './components/Navbar.vue';
export default {
    components: {
        Navbar,
        PageViewer
    },
    data() {
        return {
            activePage: 0,
            pages: [
                {
                    pageTitle: "Home Page",
                    content: "this is Home Page",
                    link: { text: 'Home', url: 'home.html' },
                },
                {
                    pageTitle: "About Page",
                    content: "This is About Page",
                    link: { text: 'About', url: 'about.html' }
                },

                {
                    pageTitle: "Contact Page",
                    content: "This is Contact Page",
                    link: { text: 'Contact', url: 'contact.html' }
                }
            ]
        }
    }
}
</script>