var QRCode = require('qrcode');

module.exports = {
    // Map of hooks
    hooks: {
        "page:before": async function(page) {
            if (this.output.name !== 'website') {
                if (page.content.includes('.resources.md" %}')) {
                    
                    // remove this line
                    const regex = /{% include "\.\/.*\.resources\.md" %}/
                    page.content = page.content.replace(regex, "");
                    
                    // compile "online resources" info
                    let articlePath = page.path.replace('.md', '.html').replace("\\", "/");
                    let basePath = this.config.values.pluginsConfig.onlineresources.url;
                    let link = basePath + articlePath;
                    let image = await QRCode.toDataURL(link);
                    let info = `${this.config.values.pluginsConfig.onlineresources.text} ![Online Resources](${image})`;

                    // append "online resources" block
                    page.content = page.content + info;
                }
            }
            return page;
        }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
