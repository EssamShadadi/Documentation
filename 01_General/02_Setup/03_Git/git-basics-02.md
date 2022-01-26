# Online Git & CodiTech

As you have learned previously with Git basic 01, you can create a local directory to keep track of your changes.
But what if you want to work in team or remotely ?

Several solutions exist. The most common and free to use are Github and Gitlab.

You can research more about Github vs Gitlab. 

Here are some links :
* [Gitlab (Github Vs Gitlab)](https://about.gitlab.com/devops-tools/github-vs-gitlab.html)
* [Hackernoon](https://hackernoon.com/github-vs-gitlab-which-is-better-for-open-source-projects-31c45d464be0)
* [Google](https://www.google.com)

Keep in mind that online platforms such as Github and GitLab still use the Git system. You will **not** work directly on the website. You will **keep** working with command lines that you have seen in  [Git basic 01](./git-basics-01.md).
But instead of **push** your change locally, you will **push** them online so you or someone else can view/retrieve them easily.

> During your **Codi training** you will use Github. Why ? Because Github provides us with certain solutions such as Gitbook and bigger exposure on the internet for potential employers.

## Online Git Concept & Important Terms
Online Git provides us with plenty of new tools and commands. Some of them are more important than others, in our case we will learn 4 of them. It should be enough to get you started.

#### Essential Git Commands
1. CLONE : This is how you get the files on your computer by downloading the online repository to your local machine. 
2. PULL : Sometime your local folder is not up to date. Git pull will grab all the recent changes and update it for you. You can't pull if there is active changes that has not been staged.
3. FORK : With any online version control manager you have the ability to 'copy' a repository to your own personal space we call this a 'fork'. So you can work on it on your own or with your team, without altering the original repository files.
4. MERGE : Merge & Pull Request. They are the root of team sharing. When you or your collaborator will do a change on his repository or branch and you may request to update the changes you have made. 
> Merge can have conflicts. For instance if the same file is edited twice by two different person git will ask you to verify and edit the changes manually.

#### Local vs Online 
The difference between online and local git is that you are **not** going to use **.git init**. Instead clone will bind your folder to the online repository.

#### Repositories
We call online folder/files storage "repository or repo". A Repository is a Data Structure that holds everything your project contains e.g. : files, commits, *branches...

Repositories can have private or public access. By being private a repository won't appear anywhere else other than your personal space.
A public repository will be visible to everyone.

> ! A public repository can't be modified by a non collaborator user. However, he will be able to clone/fork and do merge requests.

What is a branch ?

A branch is an entry point in the data structure of Git. It allows the system to retrieve the data you requested, The same way you call someone by his name. A Branch is identified by its name. 

A branch is created under the name of "master" by default when you create a repository. You can create as many branches as you want within the same repository.

> In the process of cloning. The master branch is the default target. You will learn how to clone from another branch later on.

------
Now that you know a bit more about Git. We will introduce Coditech and how general exercises are submitted. 

n.b: Some of the concepts we talked about earlier are not applied here but no worries! We have prepared an exercise for you!

## CodiTech
At Codi we have our own organization hosted on github : [CodiTech](www.github.com/coditech)

It contains multiple repositories like :

* HTML-CSS-Git-Exercise
> This will be the main repository for your first exercise.

* Team Projects (e.g. Prefab-Houses)
> Certain team projects will require you to **clone** or **fork** additional repositories. Team projects are some of them.

What is fork ? [Secret](https://help.github.com/en/articles/fork-a-repo)

## Setup 
#### Github
1. Lets create a [Github Account](https://github.com/join?source=header-home)
> Fill the form and don't forget to add a picture so we can recognize each other =)
2. Visit Coditech [CodiTech](https://github.com/coditech)
> Great ! You can now navigate threw the different repositories of coditech. **don't close the tab**
3. (Optional) Join the Codi tech Organization !
> **If the join button does not appear then please send us your github nickname on discord**

Good you're all set !

## Submission Repository
During prairie you will have to do some exercises to get keys. These exercises have to be pushed into your own branch in the specific project repository. You will need to follow some steps to get that done.

1. Clone the repository.

Lets start by going to a repository (preferably HTML-CSS-Git-Exercise repository). You will find a green **Code** button.

![](./Assets/git_02_code_button.PNG)

Once you click on the button, you will be presented with several options to get the repository. You can simply download it as a ZIP file, use the Github desktop app, or preferably, clone it using git.
 
2. We will clone into our computer now. There are different clone protocols (HTTPS & SSH). For now we will use the simple https protocol.
![](./Assets/git_02_clone_instruction_01.PNG)
 1. Copy the link provided.
 2. Open your terminal and move to Desktop. This is where the repository will be downloaded
 3. Write the following command to clone
```sh
    git clone **paste your link (ctrl + shift + v)**
```
> By default the clone command will create a folder named like your online repository, in our case it will be **HTML-CSS-Git-Exercise**. You can override this by adding an additional argument in the command line as follows.
```sh
   git clone **paste your link (ctrl + shift + v)** YOURFOLDERNAME
```
  4. Done ? We are set ! Just one more thing...

> If download manually a repository without cloning, this will not include the .git files. You will see that we will need them.

#### Submissions Steps

The following steps will show you how to submit your exercise.

##### Step 1 : Create your Own Branch
* !!! This step must be done before you start writing any code  !!!
* Locate Submission Folder on your computer (the one you cloned previously).
* Open your terminal (within the exercise folder) 
* Create your own branch. A branch is a way for us to diverge from the main codebase in the repository and work normally without affecting that main code. To do so please use the following command: 

```sh 
  git checkout -b "your-full-name"
``` 
> *Make sure you write your full name properly following this convention: "firstName-lastName". Submissions with incomplete names and nicknames will not be accepted*

##### Step 2 : Pushing Changes to Your Branch
* After you are done with your exercises make sure you add them using ``` git add . ``` and then commit them. The commit messages must be meaningful and descriptive which is why it is recommended that you commit every major feature on its own. Example: "Added Navigation Bar", "Fixed Images in index.html" ...

* Once you commit all changes, it is time to update your remote branch. Run
```sh
  git push -u origin branch-name
```

Voilà, Your set !

*** Note ***: Every time you want to do any changes redo step 2.

***Note 2 ***: In case you want to switch between branches simply use:
```sh
  git checkout branch-name
```

## Git Software Manager
Git system is huge and it can be tiresome when you have to deal with problems. Fortunately there are many alternative solutions to command lines and we call them Git Managers.

Fortunately for us we won't have to use any of those. Instead we have Visual Studio Code. VS Code has an integrated Git manager. I recommend watching this video to know more about it. [VSCode Tutorials #4 - Git Integration](https://www.youtube.com/watch?v=6n1G45kpU2o)

## Next..
You are done with Git-basics? Move on to the Git-basic-trial and show us what you got ! 
