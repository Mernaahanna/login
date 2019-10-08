import pkg from './package'
import webpack from 'webpack'

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [{
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            hid: 'description',
            name: 'description',
            content: pkg.description
        }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    router: {
        linkActiveClass: 'active'
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#013C4E',
        failedColor: '#F44336'
    },

    /*
     ** Global CSS
     */
    // css: [
    //     '~assets/scss/app.scss',
    //     '~assets/scss/animations.scss',
    // ],

    /*
     ** Plugins to load before mounting the App
     */
    // plugins: [
    //     './plugins/mixins/backend/user',
    //     '~/plugins/vue-wizard',
    //     '~/plugins/axios',
    //     { src: '~plugins/nuxt-codemirror-plugin.js', ssr: false }
    // ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/pwa',
        '@nuxtjs/auth',
        'bootstrap-vue/nuxt',
        '@tui-nuxt/editor', //
        'lodash',
        [
            'nuxt-fontawesome', { //https://github.com/FortAwesome/vue-fontawesome
                imports: [
                    {
                        set: '@fortawesome/pro-solid-svg-icons',
                        icons: ['fas']
                    },
                    {
                        set: '@fortawesome/pro-regular-svg-icons',
                        icons: ['far']
                    },
                    {
                        set: '@fortawesome/pro-light-svg-icons',
                        icons: ['fal']
                    },
                    {
                        set: '@fortawesome/pro-duotone-svg-icons',
                        icons: ['fad']
                    },
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab']
                    }
                ]
            }
        ]
    ],

    auth: {
        rewriteRedirects: true,
        strategies: {
            local: {
                endpoints: {
                    // backend TODO: change endpoint url's
                    login: {
                        url: 'login',
                        method: 'post',
                        propertyName: 'data.token'
                    },
                    register: {
                        url: 'register',
                        method: 'post',
                        propertyName: 'data.token'
                    },
                    user: {
                        url: 'me',
                        method: 'get',
                        propertyName: 'data'
                    },
                    // logout:  {
                    //     url: 'logout',
                    //     method: 'post',
                    //     propertyName: 'data'
                    // },

                    // web
                    weblogin: {
                        url: 'login',
                        method: 'post',
                        propertyName: 'data.token'
                    },
                    webregister: {
                        url: 'register',
                        method: 'post',
                        propertyName: 'data.token'
                    },
                    webuser: {
                        url: 'me',
                        method: 'get',
                        propertyName: 'data'
                    },
                    // weblogout:  {
                    //     url: 'logout',
                    //     method: 'post',
                    //     propertyName: 'data'
                    // }
                }
                // tokenRequired: true,
                // tokenType: 'bearer',
            }
        },
        redirect: {
            logout: '/backend/login',
        },
        watchLoggedIn: true
    },

    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        baseURL: 'http://0e27bd2b.ngrok.io/api/v1/backend'
    },

    /*
     ** Build configuration
     */
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                '_': 'lodash'
            })
        ],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) { }
    }
}
