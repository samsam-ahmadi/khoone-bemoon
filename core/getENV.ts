const NODE_ENV = process.env.NODE_ENV;
const config = require(`../configs/${NODE_ENV}`);
const ENV = config.api_base_path;
export { ENV, config };
