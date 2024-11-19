const path = require('path')
const { mock } = require("./mock");
const host = process.env.VUE_APP_HOST;

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
const name = '云平台'
const apis = [
    "api",
    "account",
    "token",
    "box",
    "slm",
    "models",
],
    proxy = {};
apis.map(api => {
    proxy[`/${api}/`] = {
        target: `http://${host}/${api}/`,
        changeOrigin: true,
        pathRewrite: {
            [`^/${api}/`]: ''
        }
    };
});
module.exports = {
    publicPath: './',
    outputDir: `dist`,
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        proxy,
        before: function (app, server, cpmpiler) {
            mock(app, server, cpmpiler);
        }
    },
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                implementation: require('sass'), // 使用 dart-sass 代替 node-sass
                sassOptions: {
                    outputStyle: 'compressed',
                    quietDeps: true, // 抑制依赖警告
                    logger: {
                        warn: function (message, options) {
                            // 忽略特定的警告
                            if (message.includes('legacy-js-api')) return;
                            console.warn(message);
                        }
                    }
                }
            },
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 12,
                        unitPrecision: 5,
                        propList: ['*'],
                        selectorBlackList: ['no-conversion-'],
                        replace: false,
                        mediaQuery: false,
                        minPixelValue: 3,
                        exclude: /node_modules/i

                    }),
                ]
            }
        },

    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
        config.module
            .rule('swf')
            .test(/\.swf$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 10000
            });
    },
    // pwa: {
    //     name: "云平台",
    //     themeColor: "#fff",
    //     msTileColor: "#fff",
    //     appleMobileWebAppCapable: "yes",
    //     appleMobileWebAppStatusBarStyle: "black",
    //     manifestOptions: {
    //         name: "云平台",
    //         short_name: "云平台",
    //         start_url: ".",
    //         display: "standalone",
    //         background_color: "#ffffff",
    //         theme_color: "#fff",
    //         icons: [
    //             {
    //                 src: "/static/pc/img/icons/144.png",
    //                 sizes: "144x144",
    //                 type: "image/png"
    //             },
    //             {
    //                 src: "/static/pc/img/icons/192.png",
    //                 sizes: "192x192",
    //                 type: "image/png"
    //             },
    //             {
    //                 src: "/static/pc/img/icons/512.png",
    //                 sizes: "512x512",
    //                 type: "image/png"
    //             }
    //         ]
    //     },
    //     manifestPath: "manifest-pc.json",
    //     // GenerateSW(默认) or InjectManifest（手动配置）
    //     workboxPluginMode: "InjectManifest",
    //     workboxOptions: {
    //         swSrc: "service-worker.js",
    //         swDest: "sw-pc.js"
    //         // importsDirectory: "sw-pc.js"
    //     },
    //     iconPaths: {
    //         favicon32: "static/pc/img/icons/32.png",
    //         favicon16: "static/pc/img/icons/16.png",
    //         appleTouchIcon: "static/pc/img/icons/512.png",
    //         maskIcon: "static/pc/img/icons/152.png",
    //         msTileImage: "static/pc/img/icons/144.png"
    //     }
    // },
    // pwa: {
    //     workboxPluginMode: 'GenerateSW', // 也可以定义为‘InjectManifest’模式。但是需自己写SW.js文件进行配置
    //     workboxOptions: {
    //         importWorkboxFrom: 'cdn', //从''cdn"导入workbox,也可以‘local’
    //         skipWaiting: true, // 安装完SW不等待直接接管网站
    //         clientsClaim: true,
    //         navigateFallback: '/index.html', 
    //         exclude: [/\.(?:png|jpg|jpeg|svg)$/], //在预缓存中排除图片
    //         // 定义运行时缓存
    //         runtimeCaching: [
    //             {
    //                 urlPattern: new RegExp('^https://cdn'),
    //                 handler: 'NetworkFirst',
    //                 options: {
    //                     networkTimeoutSeconds: 20,
    //                     cacheName: 'cdn-cache',
    //                     cacheableResponse: {
    //                         statuses: [200]
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // },
};
