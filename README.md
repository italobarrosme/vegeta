# Base project NEXTJS + DOCKER + Dev Container

## Requirements

- [Docker](https://www.docker.com/)
- [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Vscode](https://code.visualstudio.com/)

## How to usage

1. Have `Docker` and `VScode` installed on your machine. 
2. In vscode install the extension `Dev Containers`.
3. In vscode's shortcut for quick commands, press `f1` and select `Dev Containers: Reopen in Container`. this command will reopen your `vscode` and follow the commands in the `.devcontainer` folder, then a `docker compose` command will be automatically started
Thus creating the proposed development container.

4. After the container is ready, you can start the development server by running `npm run dev` in the terminal. The application will be available at 
http://localhost:3000.


