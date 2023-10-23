
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [X] My code's working just fine! 🥳
- [X] I have recorded a video showing it working and embedded it in the README ▶️
- [X] I have tested all the normal working cases 😎
- [X] I have even solved some edge cases (brownie points) 💪
- [X] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section


https://github.com/StackItHQ/stackit-hiring-assignment-lives-in-virgosupercluster/assets/83538773/9f80fcb6-86b4-4384-a568-06164a6211da

Google Drive link to the project video for better quality (had to compress the video here due to 10mb limit)-https://drive.google.com/file/d/1WsFfc99Yyi2MXPyG4efdzGgPqupTkial/view?usp=sharing

Approach-
- On opening the google sheet the onOpen function of javaScript is called 
- which creates the custom menu which contains the import csv option
- clicking on import csv option will call dialog function which will render the html page using SpreadSheetApp.getUi()
- the dialog box will open up where either you can browse and select a csv file or drag and drop it
- after choosing a file if it is csv file ,it will be parsed and you will have to select the columns that you want to import
- if it is not a csv file an alert will be shown
- after picking a column or columns click on import
- if you have selected 0 columns an alert will be thrown
- after clicking on import using the  google.script.run the importCSVDATA present in code.gs will run
- where each selected column will be first mapped to an index
- then each row is pushed inside that particular mapped index using a 2D array
## Comment's
- Thanks for giving an Interesting Problem statement which is actually trying to solve an actual problem
- had little experience with google sheets before and never worked with appScript so it was a new and good experience

*Add your video here, and your approach to the problem (optional). Leave some comments for us here if you want, we will be reading this :)*
