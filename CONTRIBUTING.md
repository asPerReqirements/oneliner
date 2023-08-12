# let's contribute


### Contribute to this repository


1. Fork the repository (Click the green Fork button in the top right of this page,

click your Profile Image)

2. Clone the forked repository to your local machine.

```bash
https://github.com/<yourname>/oneliner.git

```
3. change the present working directory
```bash

cd oneliner

```

4. Open CMD in your current directory and run
```markdown
npm i 

```
  
> Run locally
```
npm run start

```
5. Add new one liner :

> Go to **src > assets > `DB.json`** & add your code
```json
{
	"question": "< Title >",
	"answer": "< Desc about the title >",
	"category": "< linux || python || Java || webdev || ethical>"
},
```
- answer should not exceed **10-12 words**

6. Make changes in the project. Add, Commit and push the project using following commands:


> Add all files
```bash
git add .
```
> Commit the changes
```bash

git commit -m "Write Your commit Message"

```

> Create a new branch
```bash

git branch -M <your-name>

```
> Set upstream command to create a PR

```diff
git remote add upstream https://github.com/asPerReqirements/oneliner.git
```
> Push the branch

  

```markdown

git push

```

7. Create a new pull request from your forked repository (Click the `New Pull Request` button located at the top of your repo)

### How to Create a PR

1. After you push the changes you need to create a pull request and name the issue and mention the issue number,

	eg: added oneliner #issuenumber

2. Wait for your PR review and merge approval!

3.  **Star the repo.**
