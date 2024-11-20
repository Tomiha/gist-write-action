const core = require("@actions/core");
const { Octokit } = require("@octokit/action");

async function run() {

  try {
    const gistId = core.getInput("gist_id", { required: true });
    const fileName = core.getInput("file_name", { required: true });
    const content = core.getInput("content", { required: true });
    const token = core.getInput("token", { required: true });
    const octokit = new Octokit({ auth: token });

    const response = await octokit.gists.update({
      gist_id: gistId,
      files: { [fileName]: { content } },
    });

    const { files } = response.data;

    console.log(files[fileName]);

    core.setOutput("content", files[fileName].content);

  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`)
  }

}

run();
