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
- tried to replace slug with a new header but idk if it worked
Warning: Cannot read property 'Skip-To-Content' of undefined Use --force to continue., probably because need to make actual new page

# # idea 2: program as yaml without associative arrays
- auto writing different information in the unique tag style that Ashley had before
- Would have to control f and replace the names though- 
  - Find and replace: https://stackoverflow.com/questions/44335619/find-and-replace-in-visual-studio-code/44339430
- new p5.js that would follow tag format
  - project-firstname: "content"
  - credit-firstname
  - description-firstname
  - creator-from-firstname
  etc. etc.


## Thoughts on q and a page
- won't work for q and a page, that'll still be by hand - migrate q and a to an external site such as medium? That has been done for experiments.google, or have default answers without linking
- put all links in manually at the end ?


# Propositions for new p5.js showcase page
- prioritise categorization of tags, provide q and a (how to i18n unsure yet), picture and source code, maybe more details through medium link

# Conclusions
- little confused about YAML -> JSON, seems to be using a plug in to do this, not very flexible
- is it even a good idea to make unique tags each time
# # idea3
- if showcase becomes a rotating feature of works, maybe just seek to replace the contents each time with the correct information, then you won't need to rewrite the handlebars skeleton code
ie.
https://editor.p5js.org/connieliu/sketches/xdKReu6kc
- project-creator1: "content"
- credit-creator1:
- description-creator1:
- creator-from-creator1:
sample handlebars page
          ---
          title: showcase
          slug: showcase/featuring/
          ---

          <div id="showcase-page">

          {{> sidebar}}

          <main id="content" class="column-span project-page">
          <h1>{{#i18n "project-creator1"}}{{/i18n}}</h1>

          <section class="project-info">
            <h2 class='sr-only' id="info">Project Info</h2>
            <img src="{{assets}}/img/showcase/daan-klijn/daan-klijn_differential-art.png" 
              alt="A screen shot of white firework lines that are approaching the x=y line as a representation of a slope drawing.">
          </section>

          <section class="project-metadata">
            <h2 class='sr-only'>Project Authors and Links</h2>
            <section class="project-credit">
              <h3>{{#i18n "created-by"}}{{/i18n}}</h3>
              <p>{{#i18n "project-creator1"}}{{/i18n}}<span class="note">{{#i18n "pronouns-creator1"}}{{/i18n}}</span></p>
              <p class="creator-from">{{#i18n "location-creator1"}}{{/i18n}}</p>
            </section>

            <section class="project-resources">
              <h3 id="resources">{{#i18n "project-links"}}{{/i18n}}</h3>
              <ul class='links' aria-labelledby="resources">
                <li><a href="https://bit.ly/p5shaders" target="_blank">p5.js Shaders guide</a></li>
                <li><a href="https://bit.ly/p5shadersexamples" target="_blank">Glitch collection of p5.js shader examples</a></li>
              </ul>
            </section>
          </section>

          <section>
            <h2 id="qa">Q&amp;A</h2>    
            </section>
          <div style='clear:both'></div>

          {{> footer}}

          </main>

          {{> asterisk}}

          </div>
# Possible Revised Goals for This Week
- stick with idea 3 and move on?
- think about creating external website-prototype with figma
- do a prototype of what a new github pages site would look like using mongodb for database storage
