module.exports = {
    // Map of hooks
    hooks: {
        "page:before": function(page) {
            if (this.output.name === 'website') {
                if (page.content.includes('.resources.md" %}')) {
                    // remove this line
                    const regex = /{% include "\.\/.*\.resources\.md" %}/
                    page.content = page.content.replace(regex, "");
                    
                    // add reference link
                    let relativeUrl = page.path.replace('.md', '.html').replace("\\", "/");
                    let basePath = this.config.values.pluginsConfig.onlineresources.url;
                                        
                    let referencesLink = `[Additional resources online](${basePath}${relativeUrl})`;
                    page.content = page.content + referencesLink;
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
