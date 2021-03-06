var QRCode = require('qrcode');

module.exports = {
    // Map of hooks
    hooks: {
        "page:before": async function(page) {
            if (this.output.name !== 'website') {
                if (page.content.includes('.resources.md" %}')) {
                    // new line 
                    const newLine = "\r\n\r\n";
                    
                    // remove this line
                    const regex = /{% include "\.\/.*\.resources\.md" %}/
                    page.content = page.content.replace(regex, "");
                    
                    // compile "online resources" info
                    let articlePath = page.path.replace('.md', '.html').replace("\\", "/");
                    let basePath = this.config.values.pluginsConfig.onlineresources.url;
                    let link = basePath + articlePath;
                    let image = await QRCode.toDataURL(link, this.config.values.pluginsConfig.onlineresources.qrCodeOptions);
                    let info = "";
                    if (this.config.values.pluginsConfig.onlineresources.text.above) {
                        info += `${this.config.values.pluginsConfig.onlineresources.text.above} ${newLine}`;
                    }
                    if (this.config.values.pluginsConfig.onlineresources.text.left) {
                        info += `${this.config.values.pluginsConfig.onlineresources.text.left} `;
                    }
                    info += `![Online Resources](${image}) `;
                    if (this.config.values.pluginsConfig.onlineresources.text.right) {
                        info += `${this.config.values.pluginsConfig.onlineresources.text.right}`;
                    }
                    if (this.config.values.pluginsConfig.onlineresources.text.below) {
                        info += `${newLine} ${this.config.values.pluginsConfig.onlineresources.text.below} ${newLine}`;
                    }

                    // console.log("DEBUG resources content replaced with:")
                    // console.log(info);

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
