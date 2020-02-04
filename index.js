// sitemap 
const sitemap = require('sitemap');


sitemap.createSitemapsAndIndex({
    urls:['/test1','/test2','/test3','/test4','/test5','/test6',],
    hostname: "http://test.com",
    targetFolder: __dirname + "/sitemap",
    sitemapName: "sitemap",
    gzip: false,
    sitemapSize: 5
}).then(data=>console.log(data));