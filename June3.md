# Week Objective - May26
- Take a look at: https://experiments.withgoogle.com/ 
- Do a proof of concept showcasing the process of csv > yaml > html page
- You can explore p5.js loadTable()

# Notes
Objective One: Process of CSV conversion
## CSV-YAML: p5.js
step 1: sample google form, converted to google sheet

step 2: p5js csv formatting it as yaml

- tried to incorporate with html and csv but for some reason it doesn't work
- resorting to the p5 online editor to do this
 - problem with using text(), can't copy and paste it into code
 - SOLUTION: just copy and paste from the console

planning: how to represent things as yaml systematically
- https://rollout.io/blog/yaml-tutorial-everything-you-need-get-started/, according to this research, indentation plays a huge role in structuring

plan: (two spaces)
name of creator:
  name: sample
  location: sample, USA

It works! Link to code: https://editor.p5js.org/connieliu/sketches/QjJXVWidZ
RESULTS:
Connie Liu: 
 name: Connie Liu 
 location: Philadelphia, PA 
 pronouns: she/her 
 type: Art 
Sample Name: 
 name: Sample Name 
 location: Washington D.C. 
 pronouns: they/them 
 type: Code 

# Putting YAML -> HTML page
Use associative arrays to simplify the process?
https://assemble.io/docs/YAML-front-matter.html

- process- have default html page but only replace the top array
- edit preexisting showcase to fit fake handlebars data
what I'm going to try and put into the showcase page
Connie Liu: 
 name: Connie Liu 
 location: Philadelphia, PA 
 pronouns: she/her 
 type: Art 
 description: motion graphics made with p5
- issue -> testing is kind of hard esp because it reassembles the whole website each time
- not working with associative array
https://handlebarsjs.com/guide/expressions.html#basic-usage
- didn't work (followed the guide in similar syntax w/o #i18n and with)

# # idea 2: program as yaml without associative arrays
- auto writing different information in the unique tag style that Ashley had before
- Would have to control f and replace the names though- 
  - Find and replace: https://stackoverflow.com/questions/44335619/find-and-replace-in-visual-studio-code/44339430
- new p5.js that would follow tag format
  - firstname-project-description etc.

## Thoughts on q and a page
- won't work for q and a page, that'll still be by hand - migrate q and a to an external site such as medium? That has been done for experiments.google, or have default answers without linking
- put all links in manually at the end ?


# Propositions for new p5.js showcase page
- prioritise categorization of tags
- did a prototype of what a new github pages site would look like using mongodb for database storage
- figma files

# Conclusions
# Possible Revised Goals
