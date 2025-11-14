Prerequisites:
Onboard CODA-CLI: https://docs.google.com/forms/d/e/1FAIpQLSfuaLeKHT3K8jBvHPNVv8_05LVMKyWGPIW38JsRJ76bPXPzFg/viewform
Install Python 3.12+: https://www.python.org/downloads/release/python-31210/
Install libomp: brew install libomp

Guides:
CODA-CLI: https://docs.google.com/document/d/1yIDTa8kHBQUJK_xw5tf5T2W-TenU3t7fFNMOP9qK59U/edit?tab=t.1cgr55j4x172

MCPs:
{
"playwright": {
    "command": "npx",
    "args": [
      "@playwright/mcp@latest"
    ]
  }
}

{
"github-copilot": {
    "url": "https://api.githubcopilot.com/mcp",
    "headers": {
      "Authorization": "<PATH GIT TOKEN>",
      "X-GitHub-Repository": "<PATH REPO GIT>"
    }
  }
}

CODA-CLI prompts:
Using MCP Playwright, review the site built with Next.js, TypeScript and Tailwind CSS. Enabled it in the path http://localhost:3000/. Test the delete note feature. If you encounter any issues, create an issue in Git using MCP GitHub Copilot.

Using MCP GitHub Copilot, read the Issue 1 and fixed. When you have finished, test using MCP Playwright Enabled it in the path http://localhost:3000/. If the test passes, close the issue and write the evidence in the git issue.
