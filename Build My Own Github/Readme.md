# 🚀 I Build My Own Git (Git Server)

![Git Server Architecture](https://github.com/asimar007/Build-My-Own-X/blob/main/Build%20My%20Own%20Github/Images/Github.png?raw=true)

---

## 📌 About

This project demonstrates how to **set up a self-hosted Git server** using an AWS EC2 instance. It covers everything from installing Git, enabling SSH access for developers, pushing and pulling code, and even providing a web-based UI using GitWeb.

---

## Demo

![Code Demo](https://github.com/asimar007/Build-My-Own-X/blob/main/Build%20My%20Own%20Github/Images/Code%20Demo.png?raw=true)

## Git Server CLI

![Git Server CLI](https://github.com/asimar007/Build-My-Own-X/blob/main/Build%20My%20Own%20Github/Images/git%20cli%202.png?raw=true)

## Git Web UI

![Git Web](https://github.com/asimar007/Build-My-Own-X/blob/main/Build%20My%20Own%20Github/Images/Git%20Web.png?raw=true)

## 📖 Quick Q&A

**1. What is a Git Server?**  
A Git server is a machine where Git repositories are hosted so that developers can push and pull code remotely.

**2. How to create your own Git server on AWS?**  
Use an AWS EC2 instance, install Git, add a user named `git`, and create a bare repository in `/var/lib/git`.

**3. SSH key support for secure developer collaboration?**  
Each developer adds their public SSH key to the Git server's `authorized_keys` file, allowing secure access.

**4. Pushing and pulling code from multiple machines?**  
Clone the repo using SSH from any machine, and use `git push` or `git pull` to sync changes.

**5. Setting up a Git Web UI?**  
Install GitWeb, configure the Git root directory, and serve it on a custom port like `1234`.

**6. How does Git store files internally?**  
Git stores files as compressed blobs in the `.git/objects` directory using unique SHA-1 hashes.

---

## 🧠 What I Learned

✅ How to launch and configure an AWS EC2 instance  
✅ Creating a `git` user and managing SSH access  
✅ Initializing bare Git repositories manually  
✅ Handling secure access with SSH public keys  
✅ Serving repositories via GitWeb on a custom port  
✅ The structure of Git repositories (`objects`, `refs`, `HEAD`)  
✅ The internal mechanism Git uses to store files as blobs

---

## 💡 Use Cases

- ✅ Practice setting up your own version control infrastructure
- ✅ Use as a lightweight private Git alternative
- ✅ Educational purpose to understand Git internals and SSH setup
