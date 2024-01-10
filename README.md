<h1 align="center"> Find Us Quick</h1>

[View the live project here.](https://biecho88.github.io/memory-game/)

<h2 align="center"><img src="https://i.ibb.co/Ltrm3Yd/Memory-Game.png" alt="Moja-pierwsza-strona" border="0"></h2>

This is the website where everyone without exception can relax and spend a few minutes or even hours playing memory card game.

# User experience (UX)

- ## *User stories*

- #### First time visitor

  1. As a first time visitor, I want to find all pairs behind the cards.
  2. As a first time visitor, I want to be able to easily navigate through the site to find content.
  3. As a first time visitor, I want to be able to start the game and reset when needed.

- #### Returning visitor goals

  1. As a returning visitor, I want to find all emojis in the quickest time.
  2. As a returning visitor, I want to find all emojis with fewer amount of moves.
  3. As a returning visitor, I want to try different tactics when finding pairs.

- #### Frequent User Goals

  1. As a frequent user, I want to check if the new features have been added.
  2. As a frequent user, I want to check if the game rules changed.
  3. As a frequent user, I want to beat my records.

- ## *Design*

- #### Color scheme

    The two main colors used are black and white.

- #### Typography
  
    The Monospace font is the main font used throughout the whole website with sans-serif as the fallback font in case for any reason the font isn't being imported into the site correctly.

- #### Imagery

    Emojis have been used as decoration on the main webpage and as an image behind cards for the game.

## Languages used

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks, Libraries & Programs used

1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
2. [GitHub:](https://github.com/)
    - GitHub is used to store the project code after being pushed from Git.
3. [Pixabay](https://pixabay.com/)
    - Pixabay Was used for images at the start of the project but then it was changed.
4. [Bootstrap 5.1.3](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap is used to assist with the responsiveness and styling of the website.

# Manual and Automation testing

## Manual testing explanation

Manual testing is the process in which quality assurance analysts execute tests one by one in an individual manner. The purpose of manual testing is to catch bugs and feature issues before a software application goes live.

## Automated testing explanation

Automated testing is the process in which testers utilize tools and scripts to automate testing efforts.

## Difference between Manual and Automated Testing

There is a key difference between manual testing and automation testing. In manual testing, a human performs the tests step by step, without test scripts. In automated testing, tests are executed automatically via test automation frameworks, along with other tools and software. That means automated testing is faster than manual testing.

## Why use manual testing

The biggest pro of manual testing over automation or continuous testing is its focused attention. When a tester is manually creating and executing tests, there is more ability to handle complex and nuanced test scenarios.

## Why use automated testing

The biggest pro of automation testing over manual testing is that it allows you to do more testing in less time. It increases productivity and expands how much you can test.

## According to the ISTQB (International Software Testing Qualifications Board), the seven principles of software testing are

    1. Testing shows the presence of defects - Testing reduces the number of undiscovered defects in software. However, finding and resolving these issues does not make the software or system 100% error-free. The quality assurance and testing teams should always accept this concept and must manage client expectations accordingly.
    2. Exhaustive testing is impossible - Most inputs and outputs have an infinite number of combinations, and 100 percent testing of software from every possible perspective is not possible.
    3. Early testing - This reduces time and money and avoids the hassle of entire code bits being rewritten later in the lifecycle. The cost to fix a bug increases exponentially as the development life cycle progresses.
    4. Defect clustering - Segments of the code that are expected to be the most problematic should be tested first, followed by the defects that have been observed.
    5. Pesticide paradox - Using repetitive tests on a code to get rid of clustering will mean that it will become difficult to detect new defects. 
    6. Testing is context dependent - Every piece of software being developed is heterogeneous and has its own identity; therefore, different approaches, methodologies, techniques, and types of testing are required for each of them.
    7. Absence-of-errors fallacy - Even the absence of error fallacy would indicate that finding and fixing the bug would not be helpful for the application if it were impractical and inept at accomplishing the client/user's needs.

## Conclusion

If you apply these seven principles to your testing, you can become more focused and efficient as well as enhance the quality of your overall testing strategy. 

In addition, you might find that when you apply one principle, the other principles may fall into place organically. For instance, testing early in the software development lifecycle can help mitigate the absence-of-errors fallacy because if you test at the requirements level, you can help ensure that the software will meet your user's requirements.

## My Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [Main page](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fbiecho88.github.io%2Fmemory-game%2F)
- [CSS test results by text input](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fbiecho88.github.io%2Fmemory-game%2F#textarea)
- [The text was chacked in the free grammar checker](https://www.grammarly.com/spell-checker)
  
### Testing User Stories from the User Experience (UX) Section

- #### First time visitor goals

 1. As a First Time Visitor, I want to easily understand the rules of the game.

            1. Upon entering the site, Users are welcomed with a line of emoji images for visual experience and text that explains the rules of the game.
            2. The User has to press the start button to start the timer and begin the game.

 2. As a First Time Visitor, I want to be able to easily navigate through the site to find content.

            1. The site has been designed to be fluid and never to entrap the user. The game container stands out from the rest of the page due to the background used.
            2. Buttons are visible due to the color contrast used.

 3. As a First time visitor, I want to be able to start the game and reset when needed.

            1. The user has time to familiarise himself with the page and rules, the game starts when the user clicks the start button.
            2. The reset button is placed next to the start button which allows the user to reset the game every time the user needs to do so.

- #### Returning visitor goals

 1. As a returning visitor, I want to find all emojis in the quickest time.

            1. The user can reveal cards and find emojis behind them. Matched pairs stay revealed and failure to match results in cards being turned back in 1 second time.
            2. The user can use different techniques and creativity to reveal cards in the quickest time.

 2. As a returning visitor, I want to find all emojis with fewer amount of moves.

            1. The user can reveal cards and find emojis behind them. Matched pairs stay revealed and failure to match results in cards being turned back in 1 second time.
            2. The user can use different techniques and creativity to reveal cards in the least amount of moves. 

 3. As a returning visitor, I want to try different tactics when finding pairs

            1. The way, sequence and turns of revealing cards only depend on users decisions.
            2. The user decides which card to reveal next.

- #### Frequent User Goals

1. As a frequent user, I want to check if the new features have been added.

            1. The user would already be comfortable with the website layout and game features.

2. As a frequent user, I want to check if the game rules changed

            1. The User would be informed in the game rules section of any changes made to the game

3. As a frequent user, I want to beat my records

            1. The User can return to the game and try to solve it in either quicker time or fewer amount of moves.

### Further testing

- The Website was tested on Google Chrome, Internet Explorer and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 12 Pro Max & Samsung Galaxy S20
- A large amount of testing was done to ensure that the game runs doods and there are no bugs.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Screenshots from testing

#### Tested if the array with emojis works correctly

<h2 align="center"><img src="https://i.ibb.co/F6vcfpg/Emoji-Test.png" alt="Array list test" border="0"></h2>

#### Tested if console logs list of emoji correctly

<h2 align="center"><img src="https://i.ibb.co/p3bbzm1/Emoji-List-Test.png" alt="List of emoji test" border="0"></h2>

#### Manipulated DOM to build tiles test

<h2 align="center"><img src="https://i.ibb.co/1X60s0C/Build-Tile-Through-DOM.png" alt="Build tile through the DOM" border="0"></h2>

#### Data revealed test

<h2 align="center"><img src="https://i.ibb.co/pQmCt3z/Data-Revealed.png" alt="DataRevealed test" border="0"></h2>

#### Tested if paired tiles stay revealed

<h2 align="center"><img src="https://i.ibb.co/bBqMRW1/Paired-Tiles-Stay-Revealed.png" alt="Paired tiles stay revealed" border="0"></h2>

#### Massage at the end of the game

<h2 align="center"><img src="https://i.ibb.co/HTLSBhb/End-Of-Game.png" alt="End of game" border="0"></h2>

#### One of the friends tests shows emojis too big for the tile

<h2 align="center"><img src="https://i.ibb.co/wJsBVJ9/received-668982745078365.jpg" alt="Emojis to big for mobile phone screen" border="0"></h2>

#### The timer starts once START button is clicked

<h2 align="center"><img src="https://i.ibb.co/g4tGgPR/Timer-Check.png" alt="TimerCheck" border="0"></h2>

### Known Bugs

- The user can start the game without starting the timer. The move counter still works this way.
  
- Time doesn't stop when the game is finished.

- The back button directs the user to nonexisting page (404 error), the user is automatically redirected to the main page after 5 seconds.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Biecho88/memory-game)
2. At the top of the Repository (not the top of the page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://biecho88.github.io/memory-game/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not the top of the page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures of some of the buttons and more detailed explanations of the above process.

## Credits

### Content

- All content was written by the developer.

### Acknowledgments

- My Mentor for helpful feedback.

- Tutor support at Code Institute for their support.

- Student support on Slack [Link](https://app.slack.com/client/T0L30B202/C058BTPP7A5)
