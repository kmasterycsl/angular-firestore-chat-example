How to run the project
1. Without docker
- Install nodejs, angular-cli
- `npm install`
- `ng serve`
2. With docker
- Install docker
- Build image: `docker build -t angular-firestore-demo .`
- Run container with built image: `docker run -it -v ${YOUR_CODE_DIR_IN_HOST_MACHINE}:/angular-firestore-demo -p 4200:4200 --rm angular-firestore-demo`

Check website at `localhost:4200`
