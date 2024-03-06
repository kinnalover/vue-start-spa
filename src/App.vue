<template>
<div>
  <navbar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => activePage = index"
  ></navbar>
  <page-viewer 
    :page="pages[activePage]"
  ></page-viewer>
</div>
  
</template>

<script>
import PageViewer from "./components/PageViewer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    PageViewer,
    
  },

  data() { 
    return {
      activePage: 0,
      pages: [
        {
          link: { text: "Home", url: "index.html" },
          pageTitle: "Home Page",
          content: "this is the home ",
        },
        {
          link: { text: "About", url: "about.html" },
          pageTitle: "About Page",
          content: "this is the about content ",
        },
        {
          link: { text: "Contact", url: "content.html" },
          pageTitle: "Content Page",
          content: "this is the contact ",
        }
      ]
    };
  },
};
</script>
