## 🧱 1. Setting up Cloud Server (AWS EC2)

1.  Launch an EC2 instance (preferably Ubuntu).
2.  Open ports `22` (SSH) and `1234` (for GitWeb UI) in the security group.
3.  SSH into your instance

```
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

---

## ⚙️ 2. Configure Git Server

### Create a `git` user:

`sudo adduser git`

### Set directory

```
sudo chown -R git:/var/lib/git
```

---

## 🔑 3. Adding Custom SSH Key (Client-Side Auth)

1.  On your local machine (client):

    Generate SSH key (if you don’t have one):

    `ssh-keygen -t ed25519 -C "your_email@example.com"`

---

## 📦 4. Create a Repository

1.  Switch to the `git` user and navigate to Git directory:

```
  cd /var/lib/git
  mkdir demo-app.gt
  cd demo-app.git/
  git init --bare
```

---

## 🔁 5. Clone, Push & Pull

### From your local system

```
git clone git@your-ec2-public-ip:/var/lib/git/Demo-app.git
cd Demo-app # Add files and push git add .
git commit -m "Initial commit"
git push origin master
```

---

## 🌐 6. Git UI with GitWeb

### Install GitWeb and Ruby:

```
sudo apt update
sudo apt install gitweb ruby
```

### Configure GitWeb

Run GitWeb with a custom port (e.g., 1234):

```
http://your-public-ip:1234
```

![Git Web](https://github.com/asimar007/Build-My-Own-X/blob/main/Build%20My%20Own%20Github/Images/Git%20Web.png?raw=true)
