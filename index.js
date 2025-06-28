import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "server-nothing",
  version: "0.0.0"
});

const transport = new StdioServerTransport();
await server.connect(transport);
