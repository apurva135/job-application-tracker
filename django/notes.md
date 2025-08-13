## My Learnings

I learned that we can check the saved data (form filling of job application tracker) by using this command : 

```
chrome.storage.local.get("jobs", (data) => console.log(data));
```

For example, we can see saved data as : 

<pre>
```
{jobs: Array(1)}
jobs
: 
Array(1)
0
: 
applyDate
: 
"2025-08-05"
company
: 
"Otto von Guericke Magdeburg Uni"
jobTitle
: 
"Working Student Software Developer"
timestamp
: 
"2025-08-13T20:44:58.905Z"
[[Prototype]]
: 
Object
length
: 
1

```
</pre>