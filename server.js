function getServer() {
  return {
    host: 'localhost',
    port: 3000,
    protocol: 'http',
    getUrl: function() {
      return `${this.protocol}://${this.host}:${this.port}`;
    }
  };
}
// Example usage