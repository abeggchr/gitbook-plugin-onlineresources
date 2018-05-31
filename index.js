module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {
        onlineresources: {
            process: function(block) {
                return "Hello "+block.body+", How are you?";
            }
        }
    },

    // Map of new filters
    filters: {}
};
